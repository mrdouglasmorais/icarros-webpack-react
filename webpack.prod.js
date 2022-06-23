const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: [{
          loader: MiniCssExtractPlugin.loader
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './templates/template.prod.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle-[fullhash].css'
    })
  ]
}