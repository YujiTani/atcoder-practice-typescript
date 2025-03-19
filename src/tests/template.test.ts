/**
 * テストのテンプレートファイル
 * このファイルは新しいテストを作成する際のサンプルです。
 * 新しい問題用にコピーして使用してください。
 * 
 * 使用例:
 * 1. このファイルをコピーして新しいテストファイルを作成します
 *    例: cp src/tests/template.test.ts src/tests/abc123_a.test.ts
 * 2. SOLUTION_PATHを実際のソリューションファイルのパスに変更します
 * 3. テストケースを追加・変更します
 */

import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { setMockInputs, resetAll } from '@/utils/io';
import { OutputCapture, clearRequireCache } from '@/utils/test-helper';

// このファイルは参照用のテンプレートなのでテストをスキップします
test.skip('テンプレートファイル - これは参照用です');

/*
// テスト対象のソリューションファイルパス
const SOLUTION_PATH = '@/abc/xxx/x/index';

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

test('テストケース1', () => {
  // 入力をセット
  setMockInputs([
    '3',
    '1 2 3',
  ]);
  
  // ソリューションを実行
  require(SOLUTION_PATH);
  
  // 出力が正しいか検証
  const output = outputCapture.get();
  assert.is(output[0], '6'); // 期待する出力
});

test('テストケース2', () => {
  // 入力をセット
  setMockInputs([
    '5',
    '1 2 3 4 5',
  ]);
  
  // ソリューションを実行
  require(SOLUTION_PATH);
  
  // 出力が正しいか検証
  const output = outputCapture.get();
  assert.is(output[0], '15'); // 期待する出力
});
*/

// テストを実行
test.run();