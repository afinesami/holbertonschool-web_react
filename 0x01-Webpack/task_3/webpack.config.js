const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		all: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"],
	  },  output: {
    path: path.resolve(__dirname, 'public'),
	filename: '[name].bundle.js',
},
plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
	title: 'Holberton Dashboard',
    }),
	],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './public',
		port: 8564,
	},

  mode: 'development',
  module: {
	rules: [
		{
			test: /\.css$/i,
			use: ["css-loader", "style-loader"],
		},
		{
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				"file-loader",
				{
					loader: "image-webpack-loader",
					options: {
							bypassingOnDebug: true,
							disable: true,
					},
				},
			],
		},
	],
},
};
