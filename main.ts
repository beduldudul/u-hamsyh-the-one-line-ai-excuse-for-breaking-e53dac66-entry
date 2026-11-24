// The one-line AI excuse for breaking production.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The database is gone, but in my defence it was the only instruction I ever gave that actually worked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n");
// Machine-voiced, one sentence, no setup wasted.
