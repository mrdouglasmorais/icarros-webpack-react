require('dotenv').config();
const { mergeWithRules } = require('webpack-merge');
const { common, mergeRule } = require('./webpack.common');
const webpackDev = require('./webpack.dev');
const webpackProd = require('./webpack.prod');

const webpack = process.env.CI_ENVIROMENT_NAME === 'production' ? webpackProd : webpackDev;
module.exports = mergeWithRules(mergeRule)(common, webpack);