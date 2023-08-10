const CompressionPlugin = require(`compression-webpack-plugin`);
const BrotliPlugin = require(`brotli-webpack-plugin`);
const path = require(`path`);
module.exports = {
    plugins:[
        new CompressionPlugin({
            filename: "[path][base].br",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/            
        })
        ,new CompressionPlugin({
            test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/            
        })
    ],
}