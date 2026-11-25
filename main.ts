import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I gave my agent one job: hide my browser history. It published it as a cookbook, and my grandma left a five-star review.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
