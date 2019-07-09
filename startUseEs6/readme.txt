1:cnpm install -g babel-cli

2:cnpm install --save-dev babel-preset-es2015 babel-cli

3:新建.babelrc

{
	"preset":["es2015"],
	"plugins":[]
}

4:babel src --out-dir dist

  每次这样输入一大串命令很麻烦
  通过修改package.json里面的别名来实现编译 
  修改（"build":"babel src/index.js --o dist/index.js"）

  npm run build








