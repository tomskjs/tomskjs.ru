require('babel-register');
require('webpack');
require('karma-webpack');
const webpackConfig = require('./utils/make-webpack-config').default();
webpackConfig.devtool = 'inline-source-map';


module.exports = config => {
  config.set({
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    frameworks: ['mocha', 'chai-things', 'sinon-chai', 'chai', 'sinon'],
    preprocessors: {
      'utils/tests.webpack.js': ['webpack', 'sourcemap'],
    },
    files: [
      'utils/tests.webpack.js',
    ],
    reporters: ['mocha'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true,
    },
  });
};
