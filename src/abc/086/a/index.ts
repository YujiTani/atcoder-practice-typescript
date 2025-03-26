import {
  readInt,
  readInts,
  readline,
  readStrings,
  readAllLines,
} from '@/utils/io';

function main() {
  const [a, b] = readInts();
  const resalt = a * b;
  console.log(resalt % 2 === 0 ? 'Even' : 'Odd');
}

main();
