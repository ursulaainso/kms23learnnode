const { merge } = require('weback-merege');
const common = require('./webpack.common');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "src"),
  };
  
module.exports = merge(common, {
    mode: 'production',
});

module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', "css-loader"],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                'style-loader',
                'css-loader', 
                {
                    loader: "sass-loader",
                    options: {
                        sassOptions: { 
                            quietDeps: true
                        },
                    }
                }
            ],
        },
        {
            test: /\.njk$/,
            use: [
                {
                    loader: 'simple-nunjucks-loader',
                    options: {}
                }
            ]
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: '[file][ext]'
            }
          }
    ],
},
