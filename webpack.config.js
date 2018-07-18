const path = require('path'); // node提供的路径解决模块
// 引入生成页面的插件 大写，为构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入清除文件的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
// js压缩代码插件为webpack 4.x之前的版本所需要的
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
// 分离压缩的文件，例如分离css，将css压缩到别的文件
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
// 消除css冗余的插件
const PurifyCssWebpackPlugin = require('purifycss-webpack');
const glob = require('glob');
// 引入自定义的模块 注意要加上./，用来区分自定义和npm的模块
const rulesConfig = require('./webpack.rules.js');

const testModule = require('./modules/testModule.js');

console.log(testModule());
// json形式的配置文件
const jsonConfig = require('./webpack.config.json');
// 静态资源输出
const CopyWebpackPlugin = require('copy-webpack-plugin');

console.log(jsonConfig);

module.exports = {
	// 入口配置
	entry: {
		// entry1 : ['./src/index.js', './src/index2.js'],
		index: jsonConfig.entry,
        // 配置多入口，该配置为从app.bundle.js中提取出jquery代码
        jquery: 'jquery'
        // bootstrap: 'bootstrap'
		// index2: './src/index2.js'
	},
	// 出口配置
	output: {
		// path: __dirname + '/dist', //path必须是绝对路径 __dirname为node提供的当前配置文件所在的路径
		path: path.resolve(__dirname, 'dist'), // 用于路径连接	
        // 多出口 形成多个打包的js文件
		// filename: '[name].bundle.js'
        // 单出口 形成一个打包的js文件
        filename: 'app.bundle.js'
	},
	// module rules
	// loaders  该模块的配置字段不能改变 loader加载插件有3种写法
    module: rulesConfig,
	// 开发服务器
	devServer: {
		// 设置服务器所要访问的基本目录
		contentBase: path.resolve(__dirname + 'dist'),
		// 要访问的主机域名
		host: jsonConfig.host,
		port: jsonConfig.port,
		// 自动打开页面
		open: true,
		// 配置热更新
		hot: true
	},
    // 用于开启调试的配置
    devtool: 'source-map',
    // 插件 一般用于生产环境
    plugins: [
    	new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            // filename: 'index.html',
            // chunks: ['index'],
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            title: 'this is a new title',
            template: './src/index.html'
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'index2.html',
        //     chunks: ['index2'],
        //     minify: {
        //         collapseWhitespace: true
        //     },
        //     hash: true,
        //     title: 'this is anther new title',
        //     template: './src/index2.html'
        // }),
        new UglifyjsWebpackPlugin(),
        new ExtractTextWebpackPlugin('css/index.css'),
        new ExtractTextWebpackPlugin('less/index.less'),
        new ExtractTextWebpackPlugin('sass/index.scss'),
        new PurifyCssWebpackPlugin({
            // 注意路径的拼接方式
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        }),
        // 拷贝静态资源
        new CopyWebpackPlugin([{
            from: path.join(__dirname, 'src/assets'),
            to: './public'
        }]),
        // 提供第三方库jQuery,并且在使用时打包
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    // Conflict: Multiple assets emit to the same filename app.bundle.js
    // 上面问题的原因是相同的文件代码打包到同一个js文件中
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor1: { // vendor 为小作坊的意思
                    chunks: 'initial',
                    name: 'jquery', // 入口entry 名称
                    enforce: true
                }
            }
        }
    }
}