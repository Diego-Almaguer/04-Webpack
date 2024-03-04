const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
            rules: [{ test: /\.html$/, use: 'html-loader' },
  
                    {
                      test:/\.css$/,
                      use:['style-loader','css-loader']

                    }

                ]

          
    
          
  },
};



const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  mode: 'production',
  module: {
    rules: [{ test: /\.html$/, use: 'html-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
