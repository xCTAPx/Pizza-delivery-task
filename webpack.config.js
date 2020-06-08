let path = require("path");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniExtractPlugin = require("mini-css-extract-plugin");

let config = {
    entry: [
        "babel-polyfill",
        "./src/js/index.jsx"
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "index.js"
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /(node_modules)/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    MiniExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                use: [{
                        loader: "file-loader",
                        options: {
                            name: "[path][name].[ext]",
                            outputPath: "images",
                            publicPath: "images"
                        }
                    },
                    {
                        loader: "image-webpack-loader",
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    outputPath: "fonts",
                    publicPath: "fonts"
                }
            }
        ]
    },
    plugins: [
        new MiniExtractPlugin({
            filename: "styles.css"
        }),
        new OptimizeCSSPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorPluginOptions: {
                preset: [
                    "default",
                    {
                        discardComments: {
                            removeAll: true
                        }
                    }
                ]
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/imgs/favicon.png',
            minify: false
        })
    ]
};

module.exports = (environment, options) => {
    let production = options.mode === "production";

    config.devtool = production ? false : "eval-sourcemap";

    return config;
}