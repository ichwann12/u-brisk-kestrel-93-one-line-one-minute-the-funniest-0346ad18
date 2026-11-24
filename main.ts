// SPDX-License-Identifier: MIT
// One Line, One Minute: The Funniest AI Excuse
// Reads the one-liner from entry.txt and writes it, exactly and alone,
// to entry.txt in the output directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").replace(/\r?\n$/, "");
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}
const outputDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_BOT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
