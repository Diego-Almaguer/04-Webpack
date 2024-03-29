const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  output: {
    clean:true
  },


  module: {
    rules: [{ test: /\.html$/, loader:'html-loader',options:{sources:false} },
              

            {
              test:/\.css$/,
              exclude:/style.css$/,
              use:['style-loader','css-loader']

            },
  
            {
              test:/style.css$/,
              use:[MiniCssExtractPlugin.loader, 'css-loader']
    
            },
            {
              test:/\.(png|jpe?g|gif)$/,
              loader:'file-loader'
            
            },
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
  
    ]
 
  },
  optimization:{},

  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),

            new MiniCssExtractPlugin({filename:'[name].css', ignoreOrder:false}),

            new CopyPlugin({
              patterns: [
              {from:'src/assets/',to:'assets/'}
            
              ]   
            
            
            })
          
         
          
          ]
};