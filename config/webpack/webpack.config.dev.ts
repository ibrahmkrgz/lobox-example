import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import 'dotenv/config';

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const devConfig: Configuration = {
  mode: 'development',
  entry: './src',
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../../build'),
    publicPath: `http://localhost:${process.env.PORT}/`,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  devServer: {
    hot: true,
    port: parseInt(process.env.PORT, 10),
    historyApiFallback: true,
    contentBase: path.join(__dirname, '../../build'),
    liveReload: false,
    watchContentBase: true,
    watchOptions: {
      ignored: '**/node_modules/**',
      aggregateTimeout: 100,
      poll: 200,
    },
  },
  devtool: 'source-map',
};

export default devConfig;
