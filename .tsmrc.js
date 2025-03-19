// TypeScript モジュール解決設定
const { resolve } = require('path');
const tsconfig = require('./tsconfig.json');

const paths = tsconfig.compilerOptions.paths;
const aliases = {};

// tsconfigのpathsからエイリアスを生成
if (paths) {
  Object.keys(paths).forEach(key => {
    const alias = key.replace(/\/\*$/, '');
    const target = paths[key][0].replace(/\/\*$/, '');
    aliases[alias] = resolve(__dirname, target);
  });
}

module.exports = {
  aliases
};