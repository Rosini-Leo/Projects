// required packages
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // main settings
    entry: './src/index.js',
    mode:'development',
    devtool:'inline-source-map',

    // build output
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        clean:true,
    },

    
    // loaders 
    module:{
        rules:[
            { test: /\.(s[ac]ss)$/i, use: ['style-loader','css-loader','sass-loader'] },
            { test: /\.(js|jsx)$/, use:'babel-loader', exclude: /node_modules/ },
            { test: /\.(png|jpg|jpeg|svg)$/, use:'file-loader' }
        ]
    },


    // external plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join('public','index.html'),
        })
    ],
    
    // development server
    devServer:{
        hot:true,
        port:8080,
        liveReload:true,
        open:true,
        compress:true,

        // react-router-dom needs
        historyApiFallback: true,
    }
}