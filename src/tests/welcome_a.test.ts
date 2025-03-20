import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { setMockInputs, resetAll } from '@/utils/io';
import { OutputCapture, clearRequireCache } from '@/utils/test-helper';

// テスト対象のソリューションファイルパス
const SOLUTION_PATH = '@/abc/welcome/a/index';

// 出力キャプチャ用のヘルパー
const outputCapture = new OutputCapture();

test.before.each(() => {
  // テスト前に毎回実行
  outputCapture.start(); // コンソール出力をキャプチャ開始
  resetAll(); // 入力状態をリセット

  try {
    // モジュールキャッシュをクリア
    clearRequireCache(SOLUTION_PATH);
  } catch (e) {
    // ファイルが存在しない場合は無視
  }
});

test.after.each(() => {
  // テスト後に毎回実行
  outputCapture.stop(); // キャプチャ停止
});

test('Welcome to AtCoder: サンプルケース1', () => {
  // 問題のサンプルケース
  setMockInputs(['1', '2', '3', 'test']);

  // ソリューションを実行
  require(SOLUTION_PATH);

  // 出力が正しいか検証
  const output = outputCapture.get();
  assert.is(output[0], '6 test');
});

test('Welcome to AtCoder: 別のケース', () => {
  // 別のテストケース
  setMockInputs(['100', '200', '300', 'atcoder']);

  // ソリューションを実行
  require(SOLUTION_PATH);

  // 出力が正しいか検証
  const output = outputCapture.get();
  assert.is(output[0], '600 atcoder');
});

// テストを実行
test.run();
