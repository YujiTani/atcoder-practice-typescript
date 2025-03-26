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

// テスト対象のソリューションファイルパス
const SOLUTION_PATH = '@/abc/086/a';

const outputCapture = new OutputCapture();

describe('Product', () => {
  beforeEach(() => {
    outputCapture.start();
    resetAll();

    try {
      clearRequireCache(SOLUTION_PATH);
    } catch (e) { }
  });

  afterEach(() => {
    outputCapture.stop();
  });

  test('テストケース1', () => {
    setMockInputs([3, 4]);

    require(SOLUTION_PATH);
    const output = outputCapture.get();
    expect(output[0]).toBe('Even');
  });

  test('テストケース2', () => {
    setMockInputs([1, 21]);

    require(SOLUTION_PATH);
    const output = outputCapture.get();
    expect(output[0]).toBe('Odd');
  });
});
