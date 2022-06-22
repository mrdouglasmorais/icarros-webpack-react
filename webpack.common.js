const path = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'budle-[fullhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['babel/preset-react']
        }
      }, {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true, 
            }
          },
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "src/sass/_variables.scss"'
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.scss', '.sass'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify(process.env.API_URL || 'http://localhost:3000')
    }),
    new CleanWebpackPlugin()
  ]
}

const mergeRule = {
  module: {
    rules: {
      test: 'match',
      use: 'prepend'
    }
  },
  plugins: 'prepend'
}

module.exports = {
  common,
  mergeRule
}