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

import { describe, test, expect, beforeEach, afterEach } from 'bun:test';
import { setMockInputs, resetAll } from '@/utils/io';
import { OutputCapture, clearRequireCache } from '@/utils/test-helper';

// このファイルは参照用のテンプレートなのでテストをスキップします
test.skip('テンプレートファイル - これは参照用です', () => { });

// テスト対象のソリューションファイルパス
const SOLUTION_PATH = '@/abc/問題番号/問題ID/index';

// 出力キャプチャ用のヘルパー
const outputCapture = new OutputCapture();

describe('問題名', () => {
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
    setMockInputs([
      '入力1行目',
      '入力2行目',
      '入力3行目'
    ]);

    // ソリューションを実行
    require(SOLUTION_PATH);

    // 出力が正しいか検証
    const output = outputCapture.get();
    expect(output[0]).toBe('期待する出力1行目');
    // 複数行の出力がある場合
    // expect(output[1]).toBe('期待する出力2行目');
  });

  test('テストケース2', () => {
    // 2つ目のテストケース
    setMockInputs([
      // ...別の入力
    ]);

    require(SOLUTION_PATH);

    const output = outputCapture.get();
    expect(output[0]).toBe('期待する出力');
  });
});

