/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

const postcssPlugins = [
  require('postcss-cssnext')({
    features: {
      customProperties: {
        variables: {
          '--color-poisonous-green': '#377B77'
        }
      },
      customMedia: {
        extensions: {
          '--desktop': `(width > 768px)`,
        }
      }
    },
  }),
]

module.exports = {
  entry: ['./src/index.ts'],
  output: {
    path: path.join(__dirname, 'assets'),
    publicPath: '/',
    filename: 'assets/[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:5]',
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => postcssPlugins,
          }
        }
      ],
    }, {
      test: /\.svg$/,
      loader: 'raw-loader',
    }, {
      test: /\.(png|jpg)/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.ejs' }),
    new HotModuleReplacementPlugin(),
  ],
}
