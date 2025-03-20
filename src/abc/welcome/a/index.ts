import { readInt, readline } from '@/utils/io';

// メイン処理
function main() {
  // 3つの整数を読み込む
  const a = readInt();
  const b = readInt();
  const c = readInt();

  // 文字列を読み込む
  const s = readline();

  // a+b+cの結果と文字列sを空白区切りで出力
  console.log(`${a + b + c} ${s}`);
}

// プログラム実行
main();
