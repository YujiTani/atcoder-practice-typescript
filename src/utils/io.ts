/**
 * AtCoder用の標準入力処理ユーティリティ
 */

// 入力データの格納用
let inputs: string[] = [];
let readlineIndex = 0;

// 初期化関数 - プログラム開始時に呼び出す
function initInputs() {
  // まだ初期化されていない場合のみ実行
  if (inputs.length === 0) {
    const fs = require('fs');
    try {
      // /dev/stdinからの読み込みを試みる（本番環境用）
      inputs = fs.readFileSync('/dev/stdin', 'utf8').split('\n');
    } catch (e) {
      // 失敗したら標準入力からの読み込みを試みる（ローカル環境用）
      inputs = require('fs').readFileSync(0, 'utf8').split('\n');
    }
    readlineIndex = 0;
  }
}

// 標準入力から行を読み込む
export function readline(): string {
  initInputs();
  return inputs[readlineIndex++] || '';
}

// 標準入力から整数を1つ読み込む
export function readInt(): number {
  const line = readline();
  return parseInt(line, 10);
}

// 標準入力から整数の配列を読み込む
export function readInts(): number[] {
  return readline()
    .split(' ')
    .map((v) => parseInt(v, 10));
}

// 標準入力から文字列の配列を読み込む
export function readStrings(): string[] {
  return readline().split(' ');
}

// 標準入力をすべて読み込み、行ごとの配列を返す
export function readAllLines(): string[] {
  initInputs();
  return [...inputs];
}

// モックモードのためのユーティリティ（テスト用）
export function setMockInputs(mockInputs: string[]): void {
  inputs = [...mockInputs];
  readlineIndex = 0;
}

// 数値をうけとるモックを作成
// export function setMockinputsNumber(mockInputs: number[]): void {
//   inputs = [...mockInputs];
//   readlineIndex = 0;
// }

// テスト用のインデックスリセット機能
export function resetReadlineIndex(): void {
  readlineIndex = 0;
}

// 内部状態をリセットする（主にテスト用）
export function resetAll(): void {
  inputs = [];
  readlineIndex = 0;
}
