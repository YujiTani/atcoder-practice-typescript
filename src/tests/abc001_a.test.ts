import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { setMockInputs, resetAll } from '@/utils/io';
import { OutputCapture, clearRequireCache } from '@/utils/test-helper';

// テスト対象のソリューションファイルパス
const SOLUTION_PATH = '@/abc/001/a/index';

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

test('ABC001-A: 積雪深差', () => {
  // テストケース1
  setMockInputs(['10', '5']);
  
  // ソリューションを実行
  require(SOLUTION_PATH);
  
  // 出力が正しいか検証
  const output = outputCapture.get();
  assert.is(output[0], '5');
});

test('ABC001-A: 負の積雪深差も扱える', () => {
  // テストケース2 - 2番目の入力が大きい場合
  setMockInputs(['5', '10']);
  
  // ソリューションを実行
  require(SOLUTION_PATH);
  
  // 出力が正しいか検証
  const output = outputCapture.get();
  assert.is(output[0], '-5');
});

// テストを実行
test.run();