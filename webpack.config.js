/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { HotModuleReplacementPlugin } = require('webpack')
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin;

const postcssPlugins = [
  require('postcss-cssnext')({
    features: {
      customProperties: {
        variables: {
          '--color-cornsilk': '#fff8e1',
          '--color-green': '#009e51',
          '--color-viridian': '#377b77',
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

function merge(configs) {
  return Object.assign({}, ...configs)
}

function entry(path) {
  return { entry: path }
}

function output(filename, libraryTarget) {
  return {
    output: {
      path: __dirname,
      publicPath: '',
      filename,
      libraryTarget,
    },
  }
}

function resolve() {
  return {
    resolve: {
      extensions: ['.ts', '.js'],
    },
  }
}

function loaders(rules) {
  return { module: { rules } }
}

function tsLoader() {
  return {
    test: /\.ts$/,
    loader: 'ts-loader',
    options: {
      transpileOnly: true,
    },
    exclude: /node_modules/,
  }
}

function postcssLoader() {
  return {
    loader: 'postcss-loader',
    options: {
      plugins: () => postcssPlugins,
    }
  }
}

function cssLoader(loader) {
  return {
    loader,
    options: {
      modules: true,
      localIdentName: '[local]_[hash:base64:5]',
      importLoaders: 1,
    },
  }
}

function serverCSS() {
  return {
    test: /\.css$/,
    use: [
      cssLoader('css-loader/locals'),
      postcssLoader(),
    ],
  }
}

function clientCSS() {
  return {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        cssLoader('css-loader'),
        postcssLoader(),
      ],
    })
  }
}

function svg() {
  return {
    test: /\.svg$/,
    loader: 'raw-loader',
  }
}

function images() {
  return {
    test: /\.(png|jpg)/,
    loader: 'file-loader',
  }
}

const client = merge([
  entry('./src/client.ts'),
  output('assets/[name].[hash].js'),
  resolve(),
  loaders([
    tsLoader(),
    clientCSS(),
    svg(),
    images(),
  ]),
  {
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.ejs' }),
      new HotModuleReplacementPlugin(),
      new ExtractTextPlugin({
        filename: 'assets/[hash].css',
        disable: process.env.NODE_ENV === 'development',
      }),
      new StatsWriterPlugin({
        filename: 'dist/assets.json',
        transform(data) {
          return JSON.stringify({
            clientJavaScript: data.assetsByChunkName.main[0],
            clientCSS: data.assetsByChunkName.main[1],
          }, null, 2);
        },
      }),
    ]
  },
])

const server = merge([
  entry('./src/server/server.ts'),
  output('dist/server.js', 'commonjs2'),
  resolve(),
  loaders([
    tsLoader(),
    serverCSS(),
    svg(),
    images(),
  ]),
  { target: 'node' }
])

module.exports = [client, server]
