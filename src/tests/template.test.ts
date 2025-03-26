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

// テンプレートファイルのテストはスキップします、コピー後skip関数を削除してください
test.skip('テンプレートファイル - これは参照用です', () => {
  // テスト対象のソリューションファイルパス
  const SOLUTION_PATH = '@/abc/問題番号/問題ID/index';

  const outputCapture = new OutputCapture();

  describe('問題名', () => {
    beforeEach(() => {
      outputCapture.start();
      resetAll();

      try {
        clearRequireCache(SOLUTION_PATH);
      } catch (e) {}
    });

    afterEach(() => {
      outputCapture.stop();
    });

    test('テストケース1', () => {
      setMockInputs(['入力1行目', '入力2行目', '入力3行目']);

      require(SOLUTION_PATH);
      const output = outputCapture.get();
      expect(output[0]).toBe('期待する出力1行目');
      // 複数行の出力がある場合
      // expect(output[1]).toBe('期待する出力2行目');
    });

    test('テストケース2', () => {
      setMockInputs([
        // ...別の入力
      ]);

      require(SOLUTION_PATH);
      const output = outputCapture.get();
      expect(output[0]).toBe('期待する出力');
    });
  });
});
