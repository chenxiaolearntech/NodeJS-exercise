var fs = require('fs')

// z我们所使用的所有文件操作的 API 都是异步的
// 就像你的 ajax 请求一样
//文件中的相对路径可以省略 ./
/*fs.readFile('data/a.txt', function (err, data) {
	if (err) {
		return console.log('读取失败')
	}
	console.log(data.toString())
})
*/

// 在模块加载中， 相对路径中的 ./ 不能省略
require('./data/foo.js')('hello')


// /相当于磁盘根路径
//  ./data/a.txt   相当于当前目录  
//  data/a.txt 	   相当于当前目录
//	/data/a.txt	   当前文件模块所处此盘根目录
//	E:/xx/xx...	   绝对路径
/*fs.readFile('./data/a.txt', function (err, data) {
	if (err) {
		return	console.log(err)
	}
	console.log(data.toString())
})*/