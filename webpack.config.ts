import { merge } from 'webpack-merge';
import commonConfig from './config/webpack/webpack.config.common';
import devConfig from './config/webpack/webpack.config.dev';
import prodConfig from './config/webpack/webpack.config.prod';

module.exports = (env: string) => {
  switch (env) {
    case 'development':
      return merge(commonConfig, devConfig);
    case 'production':
      return merge(commonConfig, prodConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
};
