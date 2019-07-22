require('shelljs/global')

const webpack = require('webpack')
const fs = require('fs')
const _ = require('lodash')
const { resolve } = require('path')

//process.cwd() 是当前执行node命令时候的文件夹地址——工作目录，
//保证了文件在不同的目录下执行时，路径始终不变

//__dirname 是被执行的js 文件的地址 ——文件所在目录
const r = url => resolve(process.cwd(),url)
const webpackConf = require('./webpack.config')
const config = require(r('./mina-config'))
const assetsPath = r('./src/mina')

rm('-rf',assetsPath)
mkdir(assetsPath)

var renderConf = webpackConf;


renderConf.entry = () =>_.reduce(config.json.pages,(en,i)=>{
	en[i] = resolve(process.cwd(),'./','${i}.mina')

	return entry
})

renderConf.entry = entry()
renderConf.entry.app = config.app

renderConf.output = {
	path: r('./src/mina'),
	filename: '[name].js'
}

var compiler = webpack(renderConf)

fs.writeFileSync(r('./src/mina/app.json'),JSON.stringify(config.json),'utf8')

compiler.watch({
	aggregateTimeout:300,
	poll:true
},(err,stats) => {
	process.stdout.write(stats.toString({
		colors:true,
		modules:false,
		children:true,
		chunks:true,
		chunksModules:true
	}) + '\n\n')
})

compiler.watch({},(err,stats))



