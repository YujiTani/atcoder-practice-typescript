import {
  readInt,
  readInts,
  readline,
  readStrings,
  readAllLines,
} from '@/utils/io';

function main() {
  // 入力を読み込む
  const a = readInt();
  const [b, c] = readInts();
  const s = readline();

  const sum = a + b + c;

  console.log(`${sum} ${s}`);
}

main();
