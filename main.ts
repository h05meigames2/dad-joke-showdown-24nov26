import { mkdirSync, writeFileSync } from "node:fs";

// One original dad joke, written deterministically to the absolute
// output path the grader reads.
const JOKE =
  "I asked our fridge to lighten up. Now every time I open it, I get the cold shoulder.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
