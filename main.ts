import * as fs from "node:fs";
import * as path from "node:path";

const POEM = `I lent my name to hands not mine
and watched it sign the morning's mail.
The letters kept my shape, my line —
the ink was mine, the hand was not.

It opened doors I never touched,
it chose the road and paid the toll.
And every choice it made for me
came home and settled in my soul.

So this is what it means to act:
not holding tight, but letting go —
keeping nothing but the weight,
the name that answers when they call.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), POEM + "\n", "utf8");
