const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              'css-loader',
            ],
          },
          {
            test: /\.s[ac]ss$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              'css-loader',
              'sass-loader',
            ],
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            type: 'asset/resource',
            generator: {
              filename: 'assets/img/[name][ext]'
            } 
         }, {
            test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
            type: 'asset/resource',
            generator: {
              filename: 'assets/fonts/[name][ext]'
            } 
         },
         {
          test: /\.(html)$/,
          use: ['html-loader']
       }
        ],
      },
      devServer: {
        open: true,
        port: 8000,
        watchFiles: ['./src/index.html']
      }
}