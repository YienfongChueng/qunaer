const path = require('path');
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    outputDir: 'dist',
    indexPath: 'index.html',
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '仿去哪儿',
        },
    },
    productionSourceMap: process.env.NODE_ENV !== 'production',
    devServer: {
        host: '0.0.0.0',
        port: '8080',
        https: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                pathRewrite: {
                    '^/api': 'mock/'
                },
                ws: false,
                changeOrigin: true,
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@api': path.resolve(__dirname, './src/api'),
            },
        },
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "./src/assets/style/import.scss";',
            },
            // postcss: {
            //     plugins: [
            //         require('vue-loader/lib/plugin')
            //     ]
            // },
            // postcss: {
            //     plugins: [
            //         require('postcss-plugin-px2rem')({
            //             // rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            //             // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            //             // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            //             // propBlackList: [], //黑名单
            //             exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            //             // selectorBlackList: [], //要忽略并保留为px的选择器
            //             // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            //             // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            //             // mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
            //             minPixelValue: 2, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
            //         }),
            //     ],
            // },
        },
    },
};
