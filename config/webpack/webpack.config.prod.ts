import path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import 'dotenv/config';

const { REMOTE_URL } = process.env;

const prodConfig: WebpackConfiguration = {
  mode: 'production',
  entry: {
    index: './src',
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.join(__dirname, '../../build'),
    publicPath: `http://${REMOTE_URL}/`,
  },
  devtool: 'source-map',
};

export default prodConfig;
