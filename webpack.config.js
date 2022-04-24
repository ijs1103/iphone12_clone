//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
//export

// 결과물(번들)을 반환하는 설정
module.exports = {
	entry: {
		main: './js/main.js', // 파일을 읽어드리는 진입점을 설정 
		youtube: './js/youtube.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // resolve() : 매개변수 2가지의 경로를 합친다, __dirname : 현재 파일의 경로 , 기본값 => dist 경로
		filename: '[name]_bundle.js', // 반환하는 파일의 이름 설정, 기본값 => entry의 경로값
		clean: true // 기존 webpack 결과물들을 제거하고 새로 결과물을 반환 
	}, 
	// scss 매칭 모듈
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.js$/,
				use: [
					'babel-loader'
				]
			}
		]
	},

	// 번들링 후 결과물의 처리 방식 등 다양한 플러그인들 설정
	plugins: [
		new HtmlPlugin({
			template: './index.html'
		}),
		// static 폴더안에 모든 것들을 결과물인 dist 폴더에 복사해주는 플러그인 
		new CopyPlugin({
			patterns: [
				{ from: 'static' },
				{ from: 'scss' , to: 'scss'},
			]
		})
	],

	devServer: {
		host: 'localhost'
	}
}