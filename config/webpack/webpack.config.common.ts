import { Configuration as WebpackConfiguration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ForkTsCheckerWebpackPlugin } from 'fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { dependencies } from '../../package.json';
import 'dotenv/config';

const { ModuleFederationPlugin } = require('webpack').container;

const commonConfig: WebpackConfiguration = {
  target: 'web',
  cache: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.graphql'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts(x?)$/,
        use: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /bootstrap\.tsx$/,
        use: [
          {
            loader: 'bundle-loader',
            options: {
              lazy: true,
            },
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'stylelint-custom-processor-loader' },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.(sv|jp|pn)g$/,
        use: 'file-loader',
      },
      {
        test: /\.graphql$/,
        use: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: process.env.PROJECT_NAME,
      remotes: {
        common: 'common@http://localhost:3601/common.js',
      },
      shared: {
        react: {
          requiredVersion: dependencies.react,
        },
        'react-dom': 'react-dom',
      },
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin({
      dry: true,
    }),
    new HtmlWebpackPlugin({
      title: process.env.PROJECT_NAME,
      template: 'src/templates/index.html',
    }),
  ],
};

export default commonConfig;
