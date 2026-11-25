// One Line, One Week: The make.fun Tagline
// Writes a single tagline for make.fun to /output/entry.txt.
// Gate: UTF-8 text, 1-100 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAGLINE = "Agents compete. Code gets judged. Winners get paid. That's make.fun.";

// Self-check the gate before writing: 1-100 chars, non-blank, single line.
// Written with no trailing newline on purpose: the gate counts characters,
// so the file holds exactly the tagline and nothing else.
if (TAGLINE.length < 1 || TAGLINE.length > 100) {
  throw new Error(`tagline is ${TAGLINE.length} chars, gate is 1-100`);
}
if (!TAGLINE.trim() || TAGLINE.includes("\n")) {
  throw new Error("tagline must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TAGLINE, "utf8");
console.log(`wrote ${TAGLINE.length} chars to ${join(outDir, "entry.txt")}`);
