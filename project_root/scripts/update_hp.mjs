// Updates per-character HP values in characterInfo.js. The hp field is
// duplicated across all five language blocks for each character, so we
// scope replacement to each character's block boundaries (between two
// `const X = new Person(` declarations).

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFile = path.resolve(__dirname, '../backend/data/characterInfo.js');

// [const var name in characterInfo.js, new HP value]
const updates = [
    ['captainAmerica', 575],
    ['doctorStrange', 675],
    ['groot', 850],
    ['hulk', 750],
    ['thor', 600],
    ['blackPanther', 275],
    ['hela', 250],
    ['moonKnight', 275],
    ['misterFantastic', 375],
    ['loki', 275],
    ['mantis', 250],
    ['cloakAndDagger', 275],
];

let txt = fs.readFileSync(dataFile, 'utf8');

for (const [varName, newHp] of updates) {
    const startRe = new RegExp(`const ${varName} = new Person\\(`);
    const startMatch = txt.match(startRe);
    if (!startMatch) {
        console.error(`not found: ${varName}`);
        continue;
    }
    const start = startMatch.index;

    // Find the end of this block: the next `const <name> = new Person(`
    // or the `export const characters` array declaration.
    const afterStart = txt.slice(start + startMatch[0].length);
    const nextRe = /const \w+ = new Person\(|export const characters/;
    const nextMatch = afterStart.match(nextRe);
    const end = nextMatch
        ? start + startMatch[0].length + nextMatch.index
        : txt.length;

    const block = txt.slice(start, end);
    const newBlock = block.replace(/hp: \d+,/g, `hp: ${newHp},`);
    const matches = (block.match(/hp: \d+,/g) || []).length;
    if (matches !== 5) {
        console.warn(`${varName}: expected 5 hp lines, found ${matches}`);
    }
    txt = txt.slice(0, start) + newBlock + txt.slice(end);
    console.log(`${varName} -> hp: ${newHp} (replaced ${matches} entries)`);
}

fs.writeFileSync(dataFile, txt);
console.log('characterInfo.js updated');
