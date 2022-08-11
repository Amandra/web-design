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
    // 开启代理服务器
    devServer: {
        proxy: {
            '/api1': {
                target: 'http://localhost:5000',
                ws: true,        // 如果要代理 websockets，配置这个参数
                secure: false,  // 如果是https接口，需要配置这个参数
                changeOrigin: true,  // 用于控制请求头中的 HOST 值
                pathRewrite: {
                    '^/api1': ''
                }
            },
            '/api2': {
                target: 'http://localhost:5001',
                ws: true,        // 如果要代理 websockets，配置这个参数
                secure: false,  // 如果是 https 接口，需要配置这个参数
                changeOrigin: true,  //用于控制请求头中的 HOST 值
                pathRewrite: {
                    '^/api2': ''
                }
            }
        }
    }
});
