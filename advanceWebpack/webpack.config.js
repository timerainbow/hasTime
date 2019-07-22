const { resolve } = require('path')
const r = url => resolve(__dirname,url)

const ExtractTextPlugin = require('extract-text-plugin')
const extractSass = new ExtractTextPlugin({
	filename:'[name].wxss'
})

module.exports = {
	devtool: false,
	output: {
		path: r('./src/mina'),
		filename: '[name].js'
	},
	resolve: {
		alias:{
			utils: r('../utils/utils')
		}
	},
	module: {
		rules: [
		{
			test:/\.js$/,
			loader:'babel-loader',
			exclude:/node_modules/,
			options: {
				presets: {
					['env',{
						modules:false
					}]
				}
			}
		},{
			test:/\.sass$/,
			use: extractSass.extract({
				use:[
					{
						loader:'css-loader'
					},
					{
						loader:'postcss-loader',
						options:{
							plugins:(loader) => [
								require('autoprefixer')({
									browsers:[
										'last 2 versions'
									]
								})
							]
						}
					},
					{
						loader: 'sass-loader',
						options:{
							indentedSyntax:true
						}
					}
				],
				fallback: 'style-loader'
			})
		}
		]
	}
}