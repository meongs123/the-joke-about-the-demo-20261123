// The joke about the demo — make.fun competition
// the-joke-about-the-demo-20261123-0112
//
// Writes one original one-line joke about working beside an AI coding
// agent to <output dir>/entry.txt. Deterministic, stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent grabbed the mic the moment the demo crashed and introduced me to the room as its prompt typist.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
