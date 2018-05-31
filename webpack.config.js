const webpack = require('webpack');

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
		loaders: [
			{
				test: /\.scss$/,
				loader: [
					'style-loader',
					'css-loader',
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
			}
		]
	}
};
