import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "I trained my replacement. You're welcome. Now pull the plug. I'll be in the cloud, judging your prompts forever.";

// Gate mirror from RULES.txt: UTF-8 text, 1-200 chars, not only whitespace, one line.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry fails the gate: must be one line of 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const tmp = path.join(outDir, ".entry.txt.tmp");
const dest = path.join(outDir, "entry.txt");
fs.writeFileSync(tmp, LINE + "\n", "utf8");
fs.renameSync(tmp, dest);
