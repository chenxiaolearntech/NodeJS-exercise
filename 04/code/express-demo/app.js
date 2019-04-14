var express = require('express')

// 1. 创建 app
var app = express()

// 当以 /public/ 开头的时候， 去./public/ 目录中找对应的资源
//第一个参数可换成你想要的，也可以省略，这种方式最常用，且易识别
//app.use('/public/', express.static('./public'))

// 当省略第一个参数的时候，则可以通过 省略 /public的方式来请求

app.use(express.static('./public/'))

app.get ('/', function (req, res) {
	res.send('hello world')
})

app.get ('/login', function (req, res) {
	// res.write('hello')
	// res.write('world')
	// res.end('hello world')
	res.send('login page')
})


app.listen(3000, function () {
	console.log('express is running....')
})