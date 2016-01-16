import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';
import loadersByExtension from './loadersByExtension';

const loadersByExt = loadersByExtension({
	'json': 'json',
	'yaml|yml': 'json!yaml',
	'png|jpg|cur|gif': 'url?limit=5000',
	'woff|woff2': 'url?limit=1',
	'svg': 'url?limit=10000',
});

const root = path.join(__dirname, '..');


export default function makeWebpackConfig(opts = {}) {
	const entry = [];
	const debug = process.env.NODE_ENV !== 'production';
	const dev = process.env.NODE_ENV === 'development';
	const playground = process.env.NODE_ENV === 'playground';

	const cssModulesLocalIdentName = !debug ? '[hash:base64:10]' : '[name]__[local]___[hash:base64:5]';

	if (dev) {
		entry.push('webpack-hot-middleware/client');
		// entry.push('component-inspector/dist/react');
	}

	if (playground) {
		entry.push('webpack-hot-middleware/client?reload=true');
		entry.push('cosmos-js');
	}

	const options = {
		optimize: false,
		breakpoints: false,
		prerender: false,
		nyan: true,
		...opts,
	};

	if (options.prerender) {
		entry.push('./app/prerender');
	} else {
		entry.push('./app/index');
	}

	const config = {
		entry: options.prerender ? entry : ['babel-polyfill', ...entry],
		output: {
			path: path.join(root, 'build', options.prerender ? 'prerender' : 'public'),
			filename: 'bundle.js',
			publicPath: '/',
			libraryTarget: options.prerender ? 'commonjs2' : undefined,
		},

		target: options.prerender ? 'node' : 'web',

		plugins: [
			new webpack.DefinePlugin({
				OPTIMIZED: options.optimize,
				OPEN_FILE_URL: '"/open-in-editor"',
				'process.env': {
					NODE_ENV: JSON.stringify(process.env.NODE_ENV),
				},
			}),
			new ExtractTextPlugin('main.css', {
				allChunks: true,
				disable: debug,
			}),
		],

		devtool: (debug && !options.breakpoints) ? 'eval' : '#source-map', // #cheap-module-eval-source-map for sourcemaps without breakpoints
		bail: !debug,
		debug,

		resolve: {
			root: path.join(root, 'app'),
			extensions: ['', '.js', '.jsx'],
			modulesDirectories: ['app', 'node_modules'],
			alias: {
				COSMOS_COMPONENTS: path.join(__dirname, '../app/components'),
				COSMOS_FIXTURES: path.join(__dirname, '../app/components'),
				sinon: 'sinon/pkg/sinon',
			},
		},

		resolveLoader: {
			root: [
				path.join(root, 'node_modules'),
				root,
			],
		},

		// babel: !dev ? {} : {
		// 	plugins: [
		// 		require('babel-plugin-react-display-name'),
		// 		require('babel-plugin-source-wrapper').configure({
		// 			basePath: process.cwd(),
		// 			runtime: true,
		// 		}),
		// 	],
		// },

		postcss: () => [
			require('stylelint'),
			require('postcss-browser-reporter'),
			require('postcss-reporter')({ clearMessages: true }),
			require('postcss-font-magician')(),
			require('postcss-axis'),
			require('postcss-initial')(),
			require('autoprefixer'),
			require('precss'),
		],

		module: {
			noParse: [/node_modules\/sinon\//],
			loaders: loadersByExt.concat([
				{
					test: /\.jsx?$/,
					loader: 'babel',
					include: path.join(root, 'app'),
				}, {
					test: /\.css$/,
					loader: ExtractTextPlugin.extract('style', `css?modules&importLoaders=1&localIdentName=${cssModulesLocalIdentName}!postcss`),
				},
			]),
		},

		externals: {
			jsdom: 'window',
			cheerio: 'window',
			'react/lib/ReactContext': 'window',
			'react/lib/ExecutionEnvironment': true,
		},
	};

	if (options.optimize) {
		config.plugins.push(
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false } }),
		);
	} else {
		config.plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin(),
		);
	}

	if (options.prerender) {
		config.plugins.push(
			new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
		);
	}

	if (options.nyan) {
		config.plugins.push(
			new NyanProgressPlugin(),
		);
	}

	return config;
}
