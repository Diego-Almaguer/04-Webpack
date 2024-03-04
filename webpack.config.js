const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
            rules: [{ test: /\.html$/, use: 'html-loader' },
  
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
                    
                    }

                ]

          
    
          
  },
};



const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins


module.exports = {
  mode: 'production',
  module: {
    rules: [{ test: /\.html$/, use: 'html-loader' },
              

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
            
            }
  
    ]
 
  },
  optimization:{},

  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),

            new MiniCssExtractPlugin({filename:'[name].css', ignoreOrder:false})]
};
