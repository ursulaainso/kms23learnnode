const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let pages = [];
for(let i = 0; i<10; i++){
    let page = new HtmlWebpackPlugin({
        template: './src/views/page.njk',
        filename: 'page'+ i +'.html',
        templateParameters: {
            page: i
        }
    });
    pages.push(page);
}


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', "sass-loader"],
            },
            {
                test: /\.njk$/,
                use: [
                    {
                        loader: 'simple-nunjucks-loader',
                        options: {}
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/views/index.njk'
        }),
        new HtmlWebpackPlugin({
            template: './src/views/about.njk',
            filename: 'about.html'
        }),
        ...pages
    ],
};