const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './styles/styles.scss',
	devtool: 'source-map',
	context: __dirname,
	target: 'web',
	stats: 'errors-only',
	output: {
		filename: './styles/styles.css'
	},
	devServer: {
		contentBase: __dirname,
		watchContentBase: true,
		inline: true,
		historyApiFallback: true,
		hot: true,
		port: 3000,
		stats: 'errors-only',
		watchOptions: {
			ignored: /node_modules/
		}
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				include: __dirname + '/styles',
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								minimize: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [
									require('autoprefixer')
								]
							}
						},
						'sass-loader'
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles/styles.css')
	]
};
