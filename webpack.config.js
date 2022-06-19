const path = require('path')

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
            "@design" : path.resolve(__dirname,"src/ns/design")
            
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
    output: {
        filename: "development.js",
        path : path.resolve(__dirname,"./.devcontainer/ns/browser"),
    },
    stats : {
        modules : true,
        errors  : true,
        moduleTrace: true,
    },
    devServer: {
        compress: true,
        port : 9000
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 400,
        poll: 200,
        ignored: [
            path.resolve(__dirname, "./src/ns/components/common"),
            path.resolve(__dirname,"./src/ns/common"),
            
        ]
    }
}

module.exports = _WebPackConfiguration;