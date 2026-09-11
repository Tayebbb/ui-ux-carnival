// Extract plain text from PDFs using pdf.js bundled with the installed tomoki1207.pdf extension.
const fs = require("node:fs");
const path = require("node:path");
const ext = path.join(process.env.USERPROFILE, ".vscode", "extensions");
const parserRoot = path.join(ext, fs.readdirSync(ext).filter(n => n.startsWith("tomoki1207.pdf-")).sort().pop());
const pdfjs = require(path.join(parserRoot, "lib/build/pdf.js"));
pdfjs.GlobalWorkerOptions.workerSrc = path.join(parserRoot, "lib/build/pdf.worker.js");

(async () => {
  for (const file of process.argv.slice(2)) {
    const data = new Uint8Array(fs.readFileSync(file));
    const doc = await pdfjs.getDocument({ data, useSystemFonts: true }).promise;
    const out = [];
    for (let p = 1; p <= doc.numPages; p++) {
      const page = await doc.getPage(p);
      const content = await page.getTextContent();
      let line = "", lastY = null;
      for (const item of content.items) {
        const y = Math.round(item.transform[5]);
        if (lastY !== null && Math.abs(y - lastY) > 2) { out.push(line); line = ""; }
        line += item.str + (item.hasEOL ? "" : " ");
        lastY = y;
      }
      out.push(line);
      out.push(`\n===== PAGE ${p} =====\n`);
    }
    fs.writeFileSync(file + ".txt", out.join("\n"), "utf8");
    console.log(`${file}: ${doc.numPages} pages -> ${file}.txt`);
  }
})().catch(e => { console.error(e); process.exit(1); });
