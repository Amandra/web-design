const {defineConfig} = require('@vue/cli-service');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,　　// 关闭语法检查
  chainWebpack: config => {
    config.resolve.alias // 配置别名
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
        .set('base', resolve('baseConfig'))
        .set('public', resolve('public'));
  },
});
