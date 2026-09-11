const fs = require("fs");
const { execSync } = require("child_process");
const p = "E:/ui-ux carnival/final/GreenCommute-Final-Submission.md";
const mangled = execSync("git show HEAD:final/GreenCommute-Final-Submission.md", { cwd: "E:/ui-ux carnival", encoding: "utf8" }).replace(/^\uFEFF/, "");
const cp1252 = { 0x20AC:0x80,0x201A:0x82,0x0192:0x83,0x201E:0x84,0x2026:0x85,0x2020:0x86,0x2021:0x87,0x02C6:0x88,0x2030:0x89,0x0160:0x8A,0x2039:0x8B,0x0152:0x8C,0x017D:0x8E,0x2018:0x91,0x2019:0x92,0x201C:0x93,0x201D:0x94,0x2022:0x95,0x2013:0x96,0x2014:0x97,0x02DC:0x98,0x2122:0x99,0x0161:0x9A,0x203A:0x9B,0x0153:0x9C,0x017E:0x9E,0x0178:0x9F };
const bytes = [];
let unmapped = 0;
for (const ch of mangled) {
  const c = ch.codePointAt(0);
  if (c < 0x100) bytes.push(c);
  else if (cp1252[c] !== undefined) bytes.push(cp1252[c]);
  else { unmapped++; bytes.push(0x3F); }
}
const fixed = Buffer.from(bytes).toString("utf8");
fs.writeFileSync(p, fixed, "utf8");
console.log("unmapped", unmapped, "| replacement chars", (fixed.match(/\uFFFD/g) || []).length, "| arrows", (fixed.match(/\u2192/g) || []).length, "| bangla", (fixed.match(/\u09AC\u09BE\u0982\u09B2\u09BE/g) || []).length, "| geq", (fixed.match(/\u2265/g) || []).length);
