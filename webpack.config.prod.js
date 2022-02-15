/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/namespace */

import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
	mode: "production",
	devtool: "source-map",
	entry: {
		main: path.resolve(__dirname, "src/index"),
		vendor: path.resolve(__dirname, "src/vendor")
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].[chunkhash].js"
	},
	plugins: [
		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: "src/index.html"
		}),
		// Generate an external css file with a hash in the filename.
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash].css"
		})
	],
	module: {
		rules: [
			{test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"]},
			{test: /\.css$/, use: [MiniCssExtractPlugin.loader, "css-loader"]}
		]
	}
}
