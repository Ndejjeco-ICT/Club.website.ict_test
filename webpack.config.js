const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * @param {string} source
 */

const _WebPackConfiguration = {
    devtool  :"inline-source-map",
    mode: "development",
    target : "web",
    entry: path.resolve(__dirname, "./src/ns/workload/workload.main.ts"),
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            ns: path.resolve(__dirname, "src/ns"),
            "@design_Home" : path.resolve(__dirname,"src/ns/design/browser/sass/home.view.style"),
            "@design_About" : path.resolve(__dirname,"src/ns/design/browser/sass/aboutus.view.style"),
            "@design_Common" : path.resolve(__dirname,"src/ns/design/browser/sass/common"),
            "@design_Blog" : path.resolve(__dirname,"src/ns/design/browser/sass/blog.view.style"),
            "@design_Academics" : path.resolve(__dirname,"src/ns/design/browser/sass/academics.view.style")
            
        }
    },
    module: {
        rules: [
            {
                test: /\.ts/,
                loader : "ts-loader"
            },
            {

                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader"
                ],
            },
        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename: 'workload.html',
            templateContent: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!--Font Awesome-->
                <link rel="stylesheet" type="text/css" href="./fontAwesome/css/all.css">
            </head>
            <body>
                <!--The startup webcomponet to be initially loaded-->
                <ns-root></ns-root>
            </body>
            </html>
            `
          })
    ],
    output : {
        path : path.resolve(__dirname,"./public"),
    },
    devServer: {
        port : 9000,
        compress : true,
        static : {
            directory : path.resolve(__dirname,"./public"),
        }
    },
}

module.exports = _WebPackConfiguration;