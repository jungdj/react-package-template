var path = require ('path');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, 'src/MyLibrary.jsx'),
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'MyLibrary.js',
		libraryTarget: 'umd',
		library: 'my-library'
	},
	devtool: 'source-map',
	externals: {
		react: {
			commonjs: "react",
			commonjs2: "react",
			amd: "react",
			// React dep should be available as window.React, not window.react
			root: "React"
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env', '@babel/react']
				}
			}
		]
	}
};
