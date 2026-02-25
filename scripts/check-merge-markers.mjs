import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const files = execSync("git ls-files", { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

const markers = ["<<<<<<<", "=======", ">>>>>>>"];
const issues = [];

for (const file of files) {
  const content = readFileSync(file, "utf8");

  for (const marker of markers) {
    if (content.includes(marker)) {
      issues.push({ file, marker });
    }
  }
}

if (issues.length > 0) {
  console.error("Merge conflict marker(s) found:");
  for (const issue of issues) {
    console.error(`- ${issue.file}: contains ${issue.marker}`);
  }
  process.exit(1);
}

console.log("No merge conflict markers found in tracked files.");
