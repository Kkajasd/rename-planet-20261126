// Rename the Planet — entry program (Node.js stdlib only).
//
// Writes one line to /output/entry.txt: a funny new name for a planet of
// our solar system, plus the why, in the same breath. Gate: 1-200 chars.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Venus is now Deadline: its day is longer than its year, so it is always late for its own birthday.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outPath}`);
