import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const filesToScan = [
  "src/constants/mockData.ts",
];

const suspiciousPatterns = [
  /\uFFFD/u,           // Replacement character: text already corrupted.
  /Ã[\u0080-\u00BF]/u, // UTF-8 bytes decoded as Latin-1/CP1252.
  /Â[\u0080-\u00BF]/u,
  /Ä[\u0080-\u00BF]/u,
  /Ð[\u0080-\u00BF]/u,
  /Ñ[\u0080-\u00BF]/u,
  /Ò[\u0080-\u00BF]/u,
  /Ó[\u0080-\u00BF]/u,
  /Ô[\u0080-\u00BF]/u,
  /Õ[\u0080-\u00BF]/u,
  /Ù[\u0080-\u00BF]/u,
  /Ú[\u0080-\u00BF]/u,
  /Û[\u0080-\u00BF]/u,
  /Ü[\u0080-\u00BF]/u,
  /Ý[\u0080-\u00BF]/u,
  /â[\u0080-\u00BF]/u,
  /á[\u0080-\u00BF]/u,
];

function findIssues(content) {
  const lines = content.split(/\r?\n/);
  const issues = [];

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    for (const pattern of suspiciousPatterns) {
      const match = line.match(pattern);
      if (!match) {
        continue;
      }
      issues.push({
        line: i + 1,
        column: match.index + 1,
        text: line.trim(),
      });
      break;
    }
  }

  return issues;
}

let hasIssue = false;

for (const relPath of filesToScan) {
  const absPath = path.resolve(relPath);
  const content = fs.readFileSync(absPath, "utf8");
  const issues = findIssues(content);

  if (issues.length === 0) {
    continue;
  }

  hasIssue = true;
  console.error(`\n[encoding-check] Found ${issues.length} issue(s) in ${relPath}`);
  for (const issue of issues.slice(0, 20)) {
    console.error(`- ${relPath}:${issue.line}:${issue.column}`);
    console.error(`  ${issue.text}`);
  }
  if (issues.length > 20) {
    console.error(`- ... and ${issues.length - 20} more`);
  }
}

if (hasIssue) {
  console.error("\n[encoding-check] FAILED: mojibake/replacement characters detected.");
  process.exit(1);
}

console.log("[encoding-check] OK: no mojibake patterns detected.");
