/**
 * テスト用のヘルパー関数
 */

// Node.jsのモジュールキャッシュをクリアする関数
export function clearRequireCache(modulePath: string): void {
  const resolvedPath = require.resolve(modulePath);
  delete require.cache[resolvedPath];
}

// 標準出力をキャプチャするためのヘルパークラス
export class OutputCapture {
  private originalLog: typeof console.log;
  private capturedOutput: string[];

  constructor() {
    this.originalLog = console.log;
    this.capturedOutput = [];
  }

  // キャプチャを開始
  start(): void {
    this.capturedOutput = [];
    console.log = (...args: any[]) => {
      this.capturedOutput.push(args.join(' '));
    };
  }

  // キャプチャを停止
  stop(): void {
    console.log = this.originalLog;
  }

  // キャプチャした出力を取得
  get(): string[] {
    return [...this.capturedOutput];
  }

  // キャプチャした出力をクリア
  clear(): void {
    this.capturedOutput = [];
  }
}
