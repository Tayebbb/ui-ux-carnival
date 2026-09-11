"use strict";

const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");
const crypto = require("node:crypto");
const Module = require("node:module");
const assert = require("node:assert/strict");

const PHASES = [
  { title: "Phase 1 / Requirements and discovery", file: "01-understand/brief.md" },
  { title: "Phase 2 / Research and validation", file: "02-research/research.md" },
  { title: "Phase 3 / Structure and low-fidelity design", file: "03-structure/structure.md" },
  { title: "Phase 4 / High-fidelity screens", file: "04-screens/screen-notes.md" },
  { title: "Phase 5 / Design system and accessibility", file: "05-design-file/design-system-and-accessibility.md" },
  { title: "Phase 6 / Developer handoff and redlines", file: "06-handoff/handoff.md" }
];
const COVER = "submission/00-cover.md";
const DECISIONS = "DECISIONS.md";
const DESIGN_DECISIONS = "design_decision.md";
const IMAGE_FOLDERS = ["03-structure", "04-screens", "05-design-file", "06-handoff"];
const REQUIRED = [
  { name: "Waiting (S-01)", folder: "04-screens", pattern: /^S[-_ ]?01(?!\d)|waiting|home[-_ ](coming|arrived)/i, phone: true },
  { name: "In transit (S-04)", folder: "04-screens", pattern: /^S[-_ ]?04(?!\d)|transit/i, phone: true },
  { name: "SOS (S-05 or S-06)", folder: "04-screens", pattern: /^S[-_ ]?0[56](?!\d)|sos/i, phone: true },
  { name: "Home redlines", folder: "06-handoff", pattern: /redlines?/i, phone: false }
];

function parseArguments() {
  const options = { draft: false };
  const argumentsList = process.argv.slice(2);
  while (argumentsList.length) {
    const flag = argumentsList.shift();
    if (flag === "--draft") options.draft = true;
    else if (flag === "--print-proof") options.printProof = true;
    else if (["--root", "--extensions", "--edge"].includes(flag)) {
      const value = argumentsList.shift();
      assert(value && !value.startsWith("--"), `Missing value for ${flag}`);
      options[flag.slice(2)] = value;
    } else throw new Error(`Unknown argument: ${flag}`);
  }
  assert(options.root && options.extensions, "--root and --extensions are required");
  return options;
}

function installedExtension(root, prefix) {
  const names = fs.readdirSync(root).filter(name => name.startsWith(prefix));
  names.sort((left, right) => right.localeCompare(left, undefined, { numeric: true }));
  assert(names.length, `Required installed extension not found: ${prefix}`);
  return path.join(root, names[0]);
}

function loadTooling(extensionsRoot) {
  const rendererRoot = installedExtension(extensionsRoot, "yzane.markdown-pdf-");
  const filename = path.join(rendererRoot, "dist/extension.js");
  const bundle = fs.readFileSync(filename, "utf8");
  const start = bundle.indexOf("// src/extension.ts");
  const resume = bundle.indexOf("// src/utils.ts", start);
  const end = bundle.indexOf("// src/markdown-it-checkbox.ts", resume);
  assert(start > 0 && resume > start && end > resume, "Installed renderer bundle changed; review the adapter before exporting.");
  const source = bundle.slice(0, start) + bundle.slice(resume, end);
  assert(!source.includes('require("vscode")'), "Renderer adapter must not activate VS Code.");
  const adapter = new Module(filename, module);
  adapter.filename = filename;
  adapter.paths = Module._nodeModulePaths(path.dirname(filename));
  adapter._compile(source + "\nmodule.exports={MarkdownIt,puppeteer:require_puppeteer_core()};", filename);
  const parserRoot = installedExtension(extensionsRoot, "tomoki1207.pdf-");
  const pdfjs = require(path.join(parserRoot, "lib/build/pdf.js"));
  pdfjs.GlobalWorkerOptions.workerSrc = path.join(parserRoot, "lib/build/pdf.worker.js");
  return { ...adapter.exports, pdfjs, rendererRoot, parserRoot };
}

function digest(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

function readInputs(root) {
  const sourceFiles = [COVER, ...PHASES.map(phase => phase.file), DECISIONS, DESIGN_DECISIONS];
  const sources = sourceFiles.map(file => {
    const bytes = fs.readFileSync(path.join(root, file));
    const content = bytes.toString("utf8").replace(/^\uFEFF/, "");
    assert(content.trim(), `Empty source: ${file}`);
    return { file, content, hash: digest(bytes) };
  });
  const images = IMAGE_FOLDERS.flatMap(folder => fs.readdirSync(path.join(root, folder))
    .filter(name => /\.png$/i.test(name)).sort((left, right) => left.localeCompare(right, undefined, { numeric: true }))
    .map(name => {
      const file = `${folder}/${name}`;
      const bytes = fs.readFileSync(path.join(root, file));
      assert(bytes.length >= 45 && bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), `Invalid PNG: ${file}`);
      assert(bytes.subarray(-8, -4).toString("ascii") === "IEND", `PNG is incomplete: ${file}`);
      const width = bytes.readUInt32BE(16);
      const height = bytes.readUInt32BE(20);
      assert(width >= 100 && height >= 100, `Export is too small: ${file}`);
      return { file, folder, name, width, height, hash: digest(bytes), uri: `data:image/png;base64,${bytes.toString("base64")}` };
    }));
  const coverage = REQUIRED.map(requirement => ({
    name: requirement.name,
    matches: images.filter(image => image.folder === requirement.folder && requirement.pattern.test(image.name)
      && (!requirement.phone || image.height / image.width >= 1.7)).map(image => image.file)
  }));
  return { sources, images, coverage };
}

function escapeHtml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function section(id, title, content, className = "phase") {
  return `<section id="${id}" class="${className}">\n\n# ${title}\n\n${content}\n\n</section>`;
}

function imageTiles(image) {
  if (image.folder === "04-screens" && image.height / image.width >= 1.7) {
    const heightMm = 65 * image.height / image.width;
    assert(heightMm <= 215, `Phone export is too tall at 65 mm: ${image.file}; export individual screens.`);
    return [{ image, left: 0, top: 0, width: image.width, height: image.height, scale: 65 / image.width, label: "Individual screen", phone: true }];
  }
  const wireframe = /^wireframes-/i.test(image.name);
  const columnWidth = wireframe ? 408 : 850;
  const rowHeight = wireframe ? 1100 : 1050;
  const columns = Math.ceil(image.width / columnWidth);
  const rows = Math.ceil(image.height / rowHeight);
  const tiles = [];
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const left = wireframe ? column * columnWidth : Math.floor(column * image.width / columns);
      const top = Math.floor(row * image.height / rows);
      const right = wireframe ? Math.min(left + columnWidth, image.width) : Math.floor((column + 1) * image.width / columns);
      const bottom = Math.floor((row + 1) * image.height / rows);
      tiles.push({ image, left, top, width: right - left, height: bottom - top, scale: wireframe ? 65 / 360 : 0.2,
        label: `Detail tile ${row + 1}/${rows}, ${column + 1}/${columns} (row, column)` });
    }
  }
  assert.equal(tiles.reduce((area, tile) => area + tile.width * tile.height, 0), image.width * image.height, `Tiles omit pixels: ${image.file}`);
  return tiles;
}

function gallery(images, prefix) {
  const tiles = images.flatMap(image => imageTiles(image));
  const pages = [];
  for (const tile of tiles) {
    const previous = pages.at(-1);
    const width = tile.width * tile.scale;
    if (previous && previous.length === 1 && previous[0].width * previous[0].scale + width + 10 <= 178) previous.push(tile);
    else pages.push([tile]);
  }
  let number = 0;
  return pages.map(pageTiles => `<div class="gallery-page"><div class="gallery-row">${pageTiles.map(tile => {
    const label = `${prefix}-${String(++number).padStart(2, "0")}`;
    const width = tile.width * tile.scale;
    const height = tile.height * tile.scale;
    return `<figure class="export" data-export="${escapeHtml(tile.image.file)}" data-label="${label}" data-phone="${Boolean(tile.phone)}" style="width:${width}mm">`
      + `<figcaption><strong>${label}</strong> ${escapeHtml(tile.image.name)}<br>${tile.label}</figcaption>`
      + `<div class="image-window" style="width:${width}mm;height:${height}mm"><img alt="${escapeHtml(tile.image.name)}" src="../${tile.image.file.split("/").map(encodeURIComponent).join("/" )}" `
      + `style="width:${tile.image.width * tile.scale}mm;height:${tile.image.height * tile.scale}mm;left:${-tile.left * tile.scale}mm;top:${-tile.top * tile.scale}mm"></div></figure>`;
  }).join("")}</div></div>`).join("\n\n");
}

function buildMarkdown(inputs, draft) {
  const findSource = file => inputs.sources.find(source => source.file === file).content;
  const missing = inputs.coverage.filter(item => !item.matches.length).map(item => item.name);
  const status = draft ? "DRAFT / REVIEW COPY" : "FINAL EXPORT";
  const sourceWords = inputs.sources.reduce((total, source) => total + source.content.trim().split(/\s+/u).length, 0);
  const coverageRows = inputs.coverage.map(item => `| ${item.name} | ${item.matches.length ? item.matches.join("; ") : "MISSING"} |`).join("\n");
  const guideRows = PHASES.map((phase, index) => `| ${index + 1} | [${phase.title.split(" / ")[1]}](#core-${index + 1}) | [Full source evidence](#evidence-${index + 1}) |`).join("\n");
  const parts = [`<section class="cover">\n\n${findSource(COVER)}\n\n**${status}**\n\nGenerated ${new Date().toISOString()}. ${sourceWords.toLocaleString("en-US")} source words; ${inputs.images.length} PNG exports found.\n\n`
    + `${missing.length ? `**Missing mandatory exports: ${missing.join("; ")}. Do not submit this draft.**` : "Mandatory export categories are present by filename and image geometry. Content and prototype operation require separate review."}\n\n</section>`];
  parts.push(section("guide", "Reading guide", "Each of the six phases appears once below, with its complete source document unchanged. These sections also serve as the full evidence record (formerly Appendices A-F). Appendix G preserves the complete decision log, including earlier hypotheses and later qualifications; this build does not reconcile or rewrite them. Wide prose tables are printed as labelled records. Appendix H includes every PNG once, with full pixel coverage in readable tiles for large sheets. Appendix I preserves the design decisions and rationale in full.\n\n"
    + `| Phase | Full phase document | Evidence link |\n|---|---|---|\n${guideRows}\n\n[Appendix G: full decision log](#decisions) | [Appendix H: complete export gallery](#exports) | [Appendix I: design decisions and rationale](#design-decisions)\n\n`
    + `## Mandatory image check\n\n| Required export | Found at build time |\n|---|---|\n${coverageRows}\n\n`
    + "This is a packaging check, not an audit of Figma, claims, visual states or prototype interactions. The standalone developer handoff is also supplied as a separate one-page A4 PDF."));
  PHASES.forEach((phase, index) => {
    const galleryFolder = IMAGE_FOLDERS.find(folder => phase.file.startsWith(`${folder}/`) && inputs.images.some(image => image.folder === folder));
    const content = `<div id="evidence-${index + 1}"></div>\n\nSource: ${phase.file}. Full text, unchanged. [Reading guide](#guide).`
      + (galleryFolder ? ` [Phase exports](#gallery-${galleryFolder}).` : "")
      + `\n\n${findSource(phase.file)}`;
    parts.push(section(`core-${index + 1}`, phase.title, content, index === 5 ? "phase handoff" : "phase appendix"));
  });
  parts.push(section("decisions", "Appendix G / Full decision log", `Source: ${DECISIONS}. Full text, unchanged.\n\n${findSource(DECISIONS)}`, "phase appendix"));
  const inventory = inputs.images.map(image => `| ${image.file} | ${image.width} x ${image.height} |`).join("\n");
  parts.push(section("exports", "Appendix H / Complete export gallery", `Every PNG available in the four export folders is included below. Individual phone screens are 65 mm wide. Wireframe strips retain the original scale and all source pixels; other boards use contiguous row/column detail tiles. No source PNG is edited.\n\n| Source export | Pixels |\n|---|---|\n${inventory}`));
  for (const folder of IMAGE_FOLDERS) {
    const images = inputs.images.filter(image => image.folder === folder);
    if (images.length) parts.push(section(`gallery-${folder}`, `Exports / ${folder}`, gallery(images, `G${IMAGE_FOLDERS.indexOf(folder) + 1}`)));
  }
  parts.push(section("design-decisions", "Appendix I / Design decisions and rationale", `Source: ${DESIGN_DECISIONS}. Full text, unchanged.\n\n${findSource(DESIGN_DECISIONS)}`, "phase appendix"));
  const result = parts.join("\n\n");
  assert(result.includes("# Appendix I / Design decisions and rationale"), "Design rationale appendix was omitted");
  for (const source of inputs.sources) assert(result.includes(source.content), `Source text was omitted: ${source.file}`);
  return result;
}

function htmlDocument(markdown, content, handoff) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>GreenCommute ${handoff ? "Developer Handoff" : "Submission"}</title><style>
@page { size: A4; margin: ${handoff ? "13mm 15mm" : "18mm 14mm 16mm"}; }
* { box-sizing: border-box; }
html { background: white; color: #182922; }
body { margin: 0 auto; width: ${handoff ? "180mm" : "182mm"}; font: ${handoff ? "11pt/1.23" : "10.5pt/1.4"} "Segoe UI", "Nirmala UI", sans-serif; }
h1, h2, h3, h4 { color: #174d35; line-height: 1.2; break-after: avoid; page-break-after: avoid; overflow-wrap: anywhere; }
h1 { font-size: 22pt; margin: 0 0 6mm; }
h2 { font-size: 14pt; margin: 7mm 0 3mm; }
h3 { font-size: 11.5pt; margin: 5mm 0 2mm; }
h4 { font-size: 10.5pt; margin: 4mm 0 2mm; }
p { margin: 0 0 3mm; orphans: 3; widows: 3; }
ul, ol { margin: 0 0 3mm; padding-left: 6mm; }
li { margin-bottom: 1.5mm; orphans: 3; widows: 3; }
a { color: #174d35; text-decoration: underline; overflow-wrap: anywhere; }
strong { font-weight: 650; }
blockquote { margin: 3mm 0; padding: 2mm 4mm; border-left: 0.8mm solid #376347; }
hr { border: 0; border-top: 0.3mm solid #c6d2cb; margin: 5mm 0; }
code, pre { font-family: Consolas, "Nirmala UI", monospace; font-size: 10pt; overflow-wrap: anywhere; }
pre { white-space: pre-wrap; padding: 3mm; background: #f2f5f3; border: 0.25mm solid #c6d2cb; margin: 3mm 0; }
table { width: 100%; table-layout: fixed; border-collapse: collapse; margin: 3mm 0 5mm; font-size: 10pt; }
thead { display: table-header-group; }
tfoot { display: table-footer-group; }
tr { break-inside: avoid; page-break-inside: avoid; }
td, th { vertical-align: top; text-align: left; padding: 2mm; border: 0.25mm solid #b9c9be; overflow-wrap: anywhere; word-break: normal; }
th { background: #eaf1ec; color: #173d2a; font-weight: 650; }
.phase { break-before: page; page-break-before: always; }
.cover { break-before: auto; }
.cover h1 { font-size: 34pt; margin-top: 12mm; }
.cover h2 { font-size: 18pt; margin-bottom: 10mm; }
.appendix > h1:not(:first-child) { font-size: 17pt; }
.record { margin: 2mm 0 3mm; border-top: 0.5mm solid #799483; }
.record h3 { margin: 1.5mm 0; }
.record dl { margin: 0; }
.record-field { display: grid; grid-template-columns: 28mm minmax(0, 1fr); gap: 3mm; padding: 0.8mm 0; border-bottom: 0.2mm solid #d9e1dc; break-inside: avoid; }
dt { font-size: 10pt; font-weight: 650; overflow-wrap: anywhere; }
dd { margin: 0; min-width: 0; overflow-wrap: anywhere; }
.gallery-page { margin: 4mm 0 0; break-inside: avoid; page-break-inside: avoid; }
.gallery-page + .gallery-page { break-before: page; page-break-before: always; padding-top: 2mm; }
.gallery-row { display: flex; gap: 10mm; align-items: flex-start; justify-content: center; }
figure.export { margin: 0; flex: none; break-inside: avoid; page-break-inside: avoid; }
figcaption { font-size: 10pt; line-height: 1.28; overflow-wrap: anywhere; margin-bottom: 3mm; }
.image-window { position: relative; overflow: hidden; background: white; }
.image-window img { position: absolute; max-width: none; object-fit: contain; }
.handoff h1 { font-size: 19pt; margin: 0 0 5pt; }
.handoff h2 { font-size: 12pt; margin: 8pt 0 4pt; }
.handoff p { margin: 0 0 5pt; }
.handoff ul { margin: 0 0 5pt; }
.handoff li { margin-bottom: 3pt; }
.handoff code { font-size: 11pt; }
</style></head><body class="${handoff ? "handoff" : "submission"}">${markdown.render(content)}</body></html>`;
}

async function preparePage(browser, html, handoff, images = []) {
  const page = await browser.newPage();
  await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });
  await page.emulateMediaType("print");
  await page.setRequestInterception(true);
  page.on("request", request => /^(data:|about:)/.test(request.url()) ? request.continue() : request.abort());
  await page.setContent(html, { waitUntil: "load", timeout: 60000 });
  await page.evaluate(imageMap => {
    for (const figure of document.querySelectorAll("figure.export")) {
      const uri = imageMap[figure.dataset.export];
      if (!uri) throw new Error(`Export bytes unavailable: ${figure.dataset.export}`);
      figure.querySelector("img").src = uri;
    }
  }, Object.fromEntries(images.map(image => [image.file, image.uri])));
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(image => image.decode())); });
  const transformed = await page.evaluate(() => {
    let tables = 0;
    let records = 0;
    for (const table of document.querySelectorAll("table")) {
      const headers = [...table.querySelectorAll("thead th")];
      if (headers.length <= 4 && ![...table.querySelectorAll("td")].some(cell => cell.textContent.length > 300)) continue;
      const replacement = document.createElement("div");
      for (const row of table.querySelectorAll("tbody tr")) {
        const cells = [...row.children];
        const record = document.createElement("article");
        record.className = "record";
        const heading = document.createElement("h3");
        heading.innerHTML = `${headers[0].innerHTML}: ${cells[0].innerHTML}`;
        record.appendChild(heading);
        const definitions = document.createElement("dl");
        cells.slice(1).forEach((cell, index) => {
          const field = document.createElement("div");
          field.className = "record-field";
          const term = document.createElement("dt");
          const definition = document.createElement("dd");
          term.innerHTML = headers[index + 1].innerHTML;
          definition.innerHTML = cell.innerHTML;
          field.append(term, definition);
          definitions.appendChild(field);
        });
        record.appendChild(definitions);
        if (!cells.every(cell => record.textContent.includes(cell.textContent))) throw new Error("Table conversion dropped cell content");
        replacement.appendChild(record);
        records++;
      }
      table.replaceWith(replacement);
      tables++;
    }
    return { tables, records };
  });
  const layout = await page.evaluate(({ handoff }) => {
    const bodyBounds = document.body.getBoundingClientRect();
    const failures = [];
    for (const element of document.querySelectorAll("h1,h2,h3,p,pre,table,.record-field,figure.export")) {
      const bounds = element.getBoundingClientRect();
      if (bounds.left < bodyBounds.left - 1 || bounds.right > bodyBounds.right + 1 || element.scrollWidth > element.clientWidth + 2)
        failures.push(`Horizontal overflow: ${element.textContent.slice(0, 100)}`);
    }
    const figures = [...document.querySelectorAll("figure.export")].map(figure => {
      const viewport = figure.querySelector(".image-window");
      const image = figure.querySelector("img");
      const bounds = viewport.getBoundingClientRect();
      const imageBounds = image.getBoundingClientRect();
      if (!image.complete || !image.naturalWidth) failures.push(`Unloaded PNG: ${figure.dataset.export}`);
      if (Math.abs(imageBounds.width / imageBounds.height - image.naturalWidth / image.naturalHeight) > 0.005) failures.push(`Stretched PNG: ${figure.dataset.export}`);
      if (figure.dataset.phone === "true" && Math.abs(bounds.width * 25.4 / 96 - 65) > 0.3) failures.push(`Unreadable phone width: ${figure.dataset.export}`);
      if (figure.getBoundingClientRect().height > 240 * 96 / 25.4) failures.push(`Figure too tall: ${figure.dataset.export}`);
      return { file: figure.dataset.export, label: figure.dataset.label, widthMm: bounds.width * 25.4 / 96, heightMm: bounds.height * 25.4 / 96 };
    });
    const links = [...new Set([...document.querySelectorAll("a[href]")].map(link => link.getAttribute("href")).filter(href => /^https?:/.test(href)))];
    const internalLinks = [...document.querySelectorAll('a[href^="#"]')];
    if (internalLinks.some(link => !document.getElementById(link.getAttribute("href").slice(1)))) failures.push("Broken internal index link");
    const blocks = [...document.querySelectorAll("h1,h2,h3,h4,p,li,dt,dd,td,th,pre,figcaption")]
      .filter(element => !element.querySelector("p,li,pre,dt,dd"))
      .map(element => element.innerText.trim()).filter(Boolean);
    return { failures, figures, links, blocks, fontPt: parseFloat(getComputedStyle(document.body).fontSize) * 72 / 96,
      bodyHeightMm: document.body.scrollHeight * 25.4 / 96, handoff };
  }, { handoff });
  assert.deepEqual(layout.failures, [], `Print layout failed: ${layout.failures.join("; ")}`);
  if (handoff) assert(layout.fontPt >= 10.99, "Handoff body must remain at least 11 pt");
  return { page, layout, transformed, html: await page.content() };
}

async function renderPdf(prepared, draft, handoff) {
  const header = `<div style="font:9px 'Segoe UI',sans-serif;width:100%;margin:0 14mm;color:#46584c">GreenCommute | ${draft ? "DRAFT - REVIEW COPY" : "FINAL EXPORT"}</div>`;
  const footer = '<div style="font:10pt \'Segoe UI\',sans-serif;width:100%;margin:0 14mm;color:#46584c;display:flex;justify-content:space-between"><span>Six phases + full evidence</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>';
  return prepared.page.pdf({ format: "A4", preferCSSPageSize: true, printBackground: true, scale: 1, displayHeaderFooter: !handoff,
    headerTemplate: header, footerTemplate: footer, timeout: 120000 });
}

function comparableText(value) {
  return value.normalize("NFKC").toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function inspectPdf(pdfjs, bytes, prepared, handoff, inputs) {
  const task = pdfjs.getDocument({ data: new Uint8Array(bytes), isEvalSupported: false, useSystemFonts: true });
  const document = await task.promise;
  const pages = [];
  const urls = new Set();
  const failures = [];
  try {
    for (let pageNumber = 1; pageNumber <= document.numPages; pageNumber++) {
      const page = await document.getPage(pageNumber);
      const viewport = page.getViewport({ scale: 1 });
      assert(Math.abs(viewport.width - 595.28) < 2 && Math.abs(viewport.height - 841.89) < 2, `Non-A4 page ${pageNumber}`);
      const content = await page.getTextContent();
      const textItems = content.items.filter(item => item.str && item.str.trim());
      const bodyItems = textItems.filter(item => handoff || (item.transform[5] > 36 && item.transform[5] < viewport.height - 42));
      for (const item of textItems) {
        if (item.transform[4] < 25 || item.transform[4] + item.width > viewport.width - 25 || item.transform[5] < 12 || item.transform[5] > viewport.height - 12)
          failures.push(`Text outside safe page bounds on page ${pageNumber}: ${item.str.slice(0, 70)}`);
      }
      const annotations = await page.getAnnotations();
      for (const annotation of annotations) if (annotation.url) urls.add(annotation.url);
      const operators = await page.getOperatorList();
      const imageOperators = new Set([pdfjs.OPS.paintImageXObject, pdfjs.OPS.paintJpegXObject, pdfjs.OPS.paintInlineImageXObject]);
      const imageCount = operators.fnArray.filter(operator => imageOperators.has(operator)).length;
      pages.push({ number: pageNumber, text: bodyItems.map(item => item.str).join(" "), images: imageCount });
    }
    if (handoff) assert.equal(document.numPages, 1, `Handoff must be EXACTLY one A4 page at 11 pt; got ${document.numPages}. Edit its source or approved layout, not print scale.`);
    const text = pages.map(page => page.text).join(" ");
    const normalized = comparableText(text);
    const missingBlocks = prepared.layout.blocks.filter(block => comparableText(block).length > 8 && !normalized.includes(comparableText(block)));
    for (const block of missingBlocks) failures.push(`PDF text missing or reordered: ${block.slice(0, 100)}`);
    for (const expected of prepared.layout.links) if (!urls.has(new URL(expected).href)) failures.push(`PDF hyperlink missing: ${expected}`);
    assert([...urls].some(url => url.includes("figma.com/design/")), "Design URL missing from PDF annotations");
    assert([...urls].some(url => url.includes("figma.com/proto/")), "Prototype URL missing from PDF annotations");
    if (!handoff) {
      for (const phase of PHASES) assert(normalized.includes(comparableText(phase.title)), `Phase heading missing: ${phase.title}`);
      for (const image of inputs.images) assert(prepared.layout.figures.some(figure => figure.file === image.file), `Export not rendered: ${image.file}`);
      assert.equal(pages.reduce((total, page) => total + page.images, 0), prepared.layout.figures.length, "PDF image paints must match complete, unsplit gallery figures.");
      for (const figure of prepared.layout.figures) {
        const captionPage = pages.find(page => page.text.includes(figure.label));
        if (!captionPage || captionPage.images < 1) failures.push(`Export caption has no PDF image on its page: ${figure.label}`);
      }
      if (prepared.layout.blocks.some(block => /[\u0980-\u09ff]/.test(block))) assert(/[\u0980-\u09ff]/.test(text), "Bengali text was not extracted from PDF");
    }
    assert.deepEqual(failures, [], `${handoff ? "Handoff" : "Submission"} PDF validation failed (${failures.length}): ${failures.slice(0, 12).join("; ")}`);
    return { pages: document.numPages, textCharacters: text.length, checkedTextBlocks: prepared.layout.blocks.length,
      externalLinks: urls.size, imagePaints: pages.reduce((total, page) => total + page.images, 0),
      samplePages: handoff ? undefined : { gallery: pages.find(page => page.text.includes("G2-01"))?.number,
        records: pages.find(page => page.text.includes("Facts extracted"))?.number },
      phasePages: handoff ? undefined : PHASES.map(phase => ({ phase: phase.title, page: pages.find(page => comparableText(page.text).includes(comparableText(phase.title)))?.number })) };
  } finally {
    await document.destroy();
  }
}

function assertUnchanged(root, inputs) {
  for (const input of [...inputs.sources, ...inputs.images]) assert.equal(digest(fs.readFileSync(path.join(root, input.file))), input.hash, `Input changed during rendering; rerun: ${input.file}`);
  const currentImages = IMAGE_FOLDERS.flatMap(folder => fs.readdirSync(path.join(root, folder)).filter(name => /\.png$/i.test(name)).map(name => `${folder}/${name}`)).sort();
  assert.deepEqual(currentImages, inputs.images.map(image => image.file).sort(), "Exports changed during rendering; rerun to include the complete set.");
}

async function printProof(browser, parserRoot, handoffPdf, submissionPdf, samplePages) {
  assert(samplePages.gallery && samplePages.records, "Print sample pages were not found in the generated PDF.");
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "greencommute-print-proof-"));
  const page = await browser.newPage();
  await page.setContent("<!doctype html><html><body></body></html>");
  await page.addScriptTag({ path: path.join(parserRoot, "lib/build/pdf.js") });
  await page.addScriptTag({ path: path.join(parserRoot, "lib/build/pdf.worker.js") });
  const jobs = [
    { name: "handoff", number: 1, bytes: handoffPdf },
    { name: "phone-gallery", number: samplePages.gallery, bytes: submissionPdf },
    { name: "wide-table-records", number: samplePages.records, bytes: submissionPdf }
  ];
  const outputs = [];
  for (const job of jobs) {
    const dataUrl = await page.evaluate(async ({ encoded, number }) => {
      const data = Uint8Array.from(atob(encoded), character => character.charCodeAt(0));
      const pdfDocument = await pdfjsLib.getDocument({ data, isEvalSupported: false }).promise;
      try {
        const pdfPage = await pdfDocument.getPage(number);
        const viewport = pdfPage.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        await pdfPage.render({ canvasContext: canvas.getContext("2d"), viewport }).promise;
        return canvas.toDataURL("image/png");
      } finally {
        await pdfDocument.destroy();
      }
    }, { encoded: Buffer.from(job.bytes).toString("base64"), number: job.number });
    const filename = path.join(directory, `${job.name}.png`);
    fs.writeFileSync(filename, Buffer.from(dataUrl.split(",")[1], "base64"));
    outputs.push({ file: filename, pdfPage: job.number });
  }
  await page.close();
  return outputs;
}

async function main() {
  const options = parseArguments();
  const inputs = readInputs(options.root);
  const missing = inputs.coverage.filter(item => !item.matches.length).map(item => item.name);
  assert(options.draft || !missing.length, `Final export blocked: ${missing.join(", ")}. Individual phone PNGs are required; use --draft explicitly for a review copy.`);
  const tooling = loadTooling(options.extensions);
  const markdown = new tooling.MarkdownIt({ html: true, linkify: true, typographer: false });
  const edge = options.edge || [process.env["ProgramFiles(x86)"], process.env.ProgramFiles]
    .filter(Boolean).map(folder => path.join(folder, "Microsoft/Edge/Application/msedge.exe")).find(filename => fs.existsSync(filename));
  assert(edge && fs.existsSync(edge), "Edge not found; pass -EdgePath with the installed browser path.");
  const body = buildMarkdown(inputs, options.draft);
  const handoffSource = inputs.sources.find(source => source.file === PHASES[5].file).content;
  const browser = await tooling.puppeteer.launch({ executablePath: edge, headless: true,
    args: ["--disable-extensions", "--disable-background-networking", "--no-first-run"], timeout: 60000 });
  try {
    const handoff = await preparePage(browser, htmlDocument(markdown, handoffSource, true), true);
    const handoffPdf = await renderPdf(handoff, options.draft, true);
    const handoffValidation = await inspectPdf(tooling.pdfjs, handoffPdf, handoff, true, inputs);
    process.stdout.write(`Handoff: ${handoffValidation.pages} A4 page; 11 pt; ${handoffValidation.checkedTextBlocks} text blocks retained.\n`);
    const submission = await preparePage(browser, htmlDocument(markdown, body, false), false, inputs.images);
    const submissionPdf = await renderPdf(submission, options.draft, false);
    const submissionValidation = await inspectPdf(tooling.pdfjs, submissionPdf, submission, false, inputs);
    const proofs = options.printProof ? await printProof(browser, tooling.parserRoot, handoffPdf, submissionPdf, submissionValidation.samplePages) : [];
    assertUnchanged(options.root, inputs);
    const destinations = [
      ["submission/GreenCommute-Submission.md", body],
      ["submission/GreenCommute-Submission.html", submission.html],
      ["submission/GreenCommute-Submission.pdf", submissionPdf],
      ["06-handoff/handoff.pdf", handoffPdf]
    ];
    for (const [relative, content] of destinations) fs.writeFileSync(path.join(options.root, relative), content, typeof content === "string" ? "utf8" : undefined);
    process.stdout.write(JSON.stringify({ status: options.draft ? "DRAFT - NOT FINAL" : "FINAL EXPORT - PACKAGING CHECKS PASSED", missingMandatoryExports: missing,
      submission: submissionValidation, handoff: handoffValidation, transformedTables: submission.transformed,
      uniqueExports: inputs.images.length, galleryFigures: submission.layout.figures.length, phoneWidthMm: 65,
      sourcesPreserved: inputs.sources.length, sourceSnapshotUnchanged: true, networkRequestsAllowed: false,
      renderer: path.basename(tooling.rendererRoot), parser: `PDF.js ${tooling.pdfjs.version}`, outputs: destinations.map(([relative]) => path.join(options.root, relative)),
      printProofs: proofs,
      unverified: ["Visual appearance and Bengali glyph shaping", "Figma/prototype behavior and source-claim accuracy", "Independent unit-test coverage percentage"] }, null, 2) + "\n");
  } finally {
    await browser.close();
  }
}

main().catch(error => {
  process.stderr.write(`EXPORT FAILED: ${error.message}\n`);
  process.exitCode = 1;
});