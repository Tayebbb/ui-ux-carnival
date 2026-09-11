// Renders final/GreenCommute-Final-Submission.md to PDF with inlined images (Edge via puppeteer-core from the installed markdown-pdf extension).
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");

const root = path.resolve(__dirname, "..");
const source = path.join(root, "final/GreenCommute-Final-Submission.md");
const output = path.join(root, "final/GreenCommute-Final-Submission.pdf");

function tooling() {
  const filename = path.join(__dirname, "render-submission.cjs");
  const code = fs.readFileSync(filename, "utf8");
  const cut = code.lastIndexOf("\nmain().catch");
  const adapter = new Module(filename, module);
  adapter.filename = filename;
  adapter.paths = Module._nodeModulePaths(__dirname);
  adapter._compile(code.slice(0, cut) + "\nmodule.exports={loadTooling};", filename);
  return adapter.exports.loadTooling(path.join(process.env.USERPROFILE, ".vscode/extensions"));
}

function inlineImages(markdown) {
  let count = 0;
  const html = markdown.replace(/src="([^"]+)"/g, (whole, rel) => {
    const file = path.resolve(path.dirname(source), rel);
    if (!fs.existsSync(file)) throw new Error(`Missing image: ${rel}`);
    const mime = /\.jpe?g$/i.test(file) ? "image/jpeg" : "image/png";
    count++;
    return `src="data:${mime};base64,${fs.readFileSync(file).toString("base64")}"`;
  });
  return { html, count };
}

const css = `
@page { size: A4; margin: 16mm 14mm 16mm; }
* { box-sizing: border-box; }
html { color: #0F1A14; background: #fff; }
body { margin: 0 auto; width: 182mm; font: 10pt/1.42 "Segoe UI", "Nirmala UI", sans-serif; }
h1, h2, h3 { color: #0B5D3B; line-height: 1.15; break-after: avoid; page-break-after: avoid; margin: 0; }
h1 { font-size: 22pt; margin-bottom: 2mm; padding-bottom: 2mm; border-bottom: 0.6mm solid #0B5D3B; }
h2 { font-size: 13pt; margin: 6mm 0 2mm; }
h3 { font-size: 11pt; margin: 4mm 0 1.5mm; color: #063B26; }
p { margin: 0 0 2.5mm; orphans: 3; widows: 3; }
ul, ol { margin: 0 0 2.5mm; padding-left: 5mm; }
li { margin-bottom: 1mm; }
a { color: #0B5D3B; text-decoration: none; border-bottom: 0.2mm solid #9fc3ae; overflow-wrap: anywhere; }
strong { font-weight: 650; }
code { font: 9pt Consolas, monospace; background: #F3F6F4; padding: 0 1mm; border-radius: 1mm; }
table { width: 100%; border-collapse: collapse; margin: 2mm 0 4mm; font-size: 9pt; table-layout: fixed; }
th, td { text-align: left; vertical-align: top; padding: 1.4mm 2mm; border-bottom: 0.2mm solid #D5DDD8; overflow-wrap: anywhere; }
th { background: #DDF3E7; color: #063B26; font-weight: 650; }
tr { break-inside: avoid; page-break-inside: avoid; }
thead { display: table-header-group; }
.phase { break-before: page; page-break-before: always; }
.meta { color: #3A4A40; font-size: 9pt; margin: 0 0 4mm; }
.cover { padding-top: 30mm; }
.cover .eyebrow { color: #3A4A40; letter-spacing: 0.08em; text-transform: uppercase; font-size: 9pt; }
.cover h1 { font-size: 42pt; border: 0; margin: 4mm 0 0; color: #063B26; }
.cover h2 { font-size: 16pt; margin: 1mm 0 8mm; color: #0B5D3B; font-weight: 500; }
.cover .who { font-size: 12pt; margin-bottom: 10mm; }
.cover table.links th { width: 42mm; background: transparent; color: #063B26; border-bottom: 0.2mm solid #D5DDD8; }
.cover .small { font-size: 8.5pt; color: #3A4A40; }
.cover h3 { margin-top: 10mm; }
.cover ol { font-size: 10pt; columns: 2; }
figure { margin: 2mm 0 4mm; break-inside: avoid; page-break-inside: avoid; }
figure img { display: block; width: 100%; height: auto; border: 0.25mm solid #D5DDD8; }
figcaption { font-size: 8.5pt; color: #3A4A40; line-height: 1.3; margin-top: 1mm; }
figure.wide { width: 100%; }
figure.half { width: 60%; }
figure.sketch { width: 100%; }
figure.sketch img { max-height: 190mm; width: auto; max-width: 100%; margin: 0 auto; }
figure.redline img { width: 100%; }
.row { display: flex; gap: 3.5mm; align-items: flex-start; margin: 1mm 0 3mm; break-inside: avoid; page-break-inside: avoid; }
.row figure { flex: 1 1 0; margin: 0; }
.row figure img { width: 100%; }
.row.small figure { flex: 1 1 0; }
.row.small figcaption { text-align: center; }
.handoff { font-size: 9.5pt; line-height: 1.35; }
.handoff h1 { font-size: 18pt; }
.handoff p, .handoff li { margin-bottom: 1.5mm; }
`;

(async () => {
  const tools = tooling();
  const md = new tools.MarkdownIt({ html: true, linkify: false, typographer: false });
  const { html: body, count } = inlineImages(md.render(fs.readFileSync(source, "utf8").replace(/^\uFEFF/, "")));
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>GreenCommute Submission</title><style>${css}</style></head><body>${body}</body></html>`;
  const edge = [process.env["ProgramFiles(x86)"], process.env.ProgramFiles].filter(Boolean)
    .map(f => path.join(f, "Microsoft/Edge/Application/msedge.exe")).find(f => fs.existsSync(f));
  const browser = await tools.puppeteer.launch({ executablePath: edge, headless: true, args: ["--disable-extensions", "--no-first-run"], timeout: 60000 });
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load", timeout: 120000 });
    await page.evaluate(() => Promise.all([...document.images].map(i => i.complete ? null : new Promise(r => { i.onload = i.onerror = r; }))));
    const overflow = await page.evaluate(() => [...document.querySelectorAll("table,figure,.row")].filter(e => e.scrollWidth > e.clientWidth + 2).length);
    const pdf = await page.pdf({ format: "A4", preferCSSPageSize: true, printBackground: true, displayHeaderFooter: true, timeout: 120000,
      headerTemplate: "<div></div>",
      footerTemplate: '<div style="font:8pt \'Segoe UI\',sans-serif;width:100%;margin:0 14mm;color:#3A4A40;display:flex;justify-content:space-between"><span>GreenCommute · Mohammed Tayeb · Team Lonewolf · AUST CSE Carnival 8.0</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
    fs.writeFileSync(output, pdf);
    const doc = await tools.pdfjs.getDocument({ data: new Uint8Array(pdf), isEvalSupported: false }).promise;
    console.log(JSON.stringify({ output, pages: doc.numPages, bytes: pdf.length, images: count, horizontalOverflowElements: overflow }));
  } finally { await browser.close(); }
})().catch(e => { console.error(e.stack); process.exit(1); });
