/**
 * PracticeA のテスト
 */

import { describe, test, expect, beforeEach, afterEach } from 'bun:test';
import { setMockInputs, resetAll } from '@/utils/io';
import { OutputCapture, clearRequireCache } from '@/utils/test-helper';

// テスト対象のソリューションファイルパス
const SOLUTION_PATH = '@/practiceA';

// 出力キャプチャ用のヘルパー
const outputCapture = new OutputCapture();

describe('PracticeA', () => {
  beforeEach(() => {
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

  afterEach(() => {
    // テスト後に毎回実行
    outputCapture.stop(); // キャプチャ停止
  });

  test('テストケース1', () => {
    // 入力をセット
    setMockInputs(['1', '2 3', 'test']);

    // ソリューションを実行
    require(SOLUTION_PATH);

    // 出力が正しいか検証
    const output = outputCapture.get();
    expect(output[0]).toBe('6 test');
  });

  test('テストケース2', () => {
    // 入力をセット
    setMockInputs(['72', '128 256', 'myonmyon']);

    // ソリューションを実行
    require(SOLUTION_PATH);

    // 出力が正しいか検証
    const output = outputCapture.get();
    expect(output[0]).toBe('456 myonmyon');
  });
});
