const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const rules = {
        rules: [
            {
                test: /\.css$/,
                // use: ['style-loader', 'css-loader']
                // load: ['style-loader', 'css-loader'],
                // use: [
                //     { loader: 'style-loader' },
                //     { loader: 'css-loader' }
                // ]
                // 提取css文件
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader'],
                    publicPath: '../' // 解决css背景图路径问题
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 如果图片大小超过50KB，那么图片将为base 64的数据，否则是路径的形式
                            limit: 50,
                            outputPath: 'images' // 图片打包出去的目录
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                // use: ['style-loader', 'css-loader', 'less-loader']
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                // 配置浏览器不能识别的语法转换器
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    };

module.exports = rules;