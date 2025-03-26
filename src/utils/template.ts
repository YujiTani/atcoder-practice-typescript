import {
  readInt,
  readInts,
  readline,
  readStrings,
  readAllLines,
} from '@/utils/io';

function main() {
  // 入力を読み込む
  const a = readInt(); // 1行目: 整数a
  const [b, c] = readInts(); // 2行目: 整数b, c（空白区切り）
  const s = readline(); // 3行目: 文字列s

  // 処理
  // a + b + c を計算
  const sum = a + b + c;

  // 出力
  // 計算結果とsを空白区切りで出力
  console.log(`${sum} ${s}`);
}

main();
