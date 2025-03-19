# AtCoder TypeScript環境

TypeScript/JavaScriptでAtCoderの問題を解くためのローカル環境です。

## 機能

- TypeScript/JavaScriptで問題を解くことができます
- 最新のTypeScript機能を使用可能
- 標準入力部分のテンプレートが用意されています
- ホットリロード機能で保存時に自動実行
- パスエイリアスでスッキリしたimport文
- Biomeによるコード整形とリント

## 使い方

### 環境構築

```bash
# 依存パッケージのインストール
npm install
```

### 問題を解く

1. 問題に対応するフォルダを作成します
```bash
mkdir -p src/abc/123/a
```

2. そのフォルダ内に`index.ts`ファイルを作成し、問題を解きます
```typescript
import { readInt, readInts } from '@/utils/io';

function main() {
  // 入力を読み込む
  const N = readInt();
  const array = readInts();
  
  // 処理
  const answer = 'Hello, world!';
  
  // 出力
  console.log(answer);
}

main();
```

3. 実行する
```bash
# 実行する
npm run solve src/abc/123/a/index.ts

# 監視モードで実行（ファイル保存時に自動実行）
npm run watch src/abc/123/a/index.ts
```

## 入力ユーティリティ

`src/utils/io.ts`には、標準入力を簡単に処理するためのユーティリティ関数が用意されています。

- `readline()`: 1行の文字列を読み込みます
- `readInt()`: 1つの整数を読み込みます
- `readInts()`: スペース区切りの整数配列を読み込みます
- `readStrings()`: スペース区切りの文字列配列を読み込みます
- `readAllLines()`: すべての入力行を配列として読み込みます

## テスト方法

入力データを用意してテストすることができます:

```typescript
import { setMockInputs, readInt } from '@/utils/io';

// テスト入力を設定
setMockInputs([
  '3',
  '1 2 3'
]);

// 問題のメイン処理
function main() {
  const n = readInt();
  // ...
}

main();
```

## Gitでの管理

このプロジェクトはGithubで管理できます。

```bash
git init
git add .
git commit -m "初期化"
git remote add origin <リポジトリURL>
git push -u origin main
```

## コード整形

このプロジェクトはBiomeを使用してコードの整形とリントを行います。

```bash
# コードをフォーマットする
npm run format

# コードをチェックする
npm run check

# 問題を自動修正する
npm run check:apply
```

VSCodeを使用している場合、ファイル保存時に自動的にフォーマットが適用されます。

## テスト

uvuを使用した軽量なテスト環境が用意されています。

### テストの書き方

テストファイルは `src/tests` ディレクトリに配置します。テストファイル名は `*.test.ts` というパターンにします。

```typescript
// src/tests/abc123_a.test.ts
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { setMockInputs, resetAll } from '@/utils/io';
import { OutputCapture, clearRequireCache } from '@/utils/test-helper';

// テスト対象のソリューションファイルパス
const SOLUTION_PATH = '@/abc/123/a/index';

// 出力キャプチャ用のヘルパー
const outputCapture = new OutputCapture();

test.before.each(() => {
  // テスト前に毎回実行
  outputCapture.start();
  resetAll();
  clearRequireCache(SOLUTION_PATH);
});

test.after.each(() => {
  // テスト後に毎回実行
  outputCapture.stop();
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
  assert.is(output[0], '6');
});

// テスト実行
test.run();
```

### テストの実行

```bash
# すべてのテストを実行
npm test

# テストをウォッチモードで実行（ファイル変更時に自動実行）
npm run test:watch
```

テンプレートファイル `src/tests/template.test.ts` を使用して、新しいテストを作成することができます。
