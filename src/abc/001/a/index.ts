import { readInt } from '@/utils/io';

// メイン処理
function main() {
  // 1行目：H1を読み込む
  const H1 = readInt();

  // 2行目：H2を読み込む
  const H2 = readInt();

  // 結果を計算
  const result = H1 - H2;

  // 結果を出力
  console.log(result);
}

// プログラム実行
main();
