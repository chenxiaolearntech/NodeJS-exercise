var express = require('express')
var fs = require('fs')
var app = express()

/*app.get('/abc', function (req, res, next) {
	console.log('abc')
	//req.foo = 'bar'
	req.body = {}
	next()
})

app.get('/abc', function (req, res, next) {
	console.log('abc 2')
	console.log(req.body)
})*/

app.get('/', function (req, res, next) {
	fs.readFile('./de/ded', function (err, data) {
		if (err) {
			//return res.status(500).send('Server Error')
			// 当调用 next 的时候，如果传递了参数，则直接往后找到带有 四个参数的应用程序级别中间件
			// 当错误发生的时候，我们可以调用 next 传递错误对象
			// 然后就会被全局错误处理中间件匹配到并处理
			next(err)
		}
	})
})

app.get('/', function (req, res, next) {
	console.log('/ 2')
})

app.get('/a', function (req, res, next) {
	fs.readFile('./dee/ded', function (err, data) {
		if (err) {
			return res.status(500).send('Server Error')
		}
	})
})

// 配置错误处理中间件
app.use(function (err, req, res, next) {
	//console.log('app Error handler')
	res.status(500).send(err.message)
})

app.listen(3000, function () {
	console.log('app is running at port 3000.')
})