const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public'
  },
  mode: 'production',
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
