var http = require('http')
var url = require('url')

var cookie = require('./middleware/cookie')
var post-body = require('./middleware/post-body')
var query = require('./middleware/query')
var session = require('./middleware/session')

var server = http.crestServer(function, (req, res) {
	// 解析表单 get 请求体
	// 解析表单 post 请求体
	// 解析 Cookie
	// 处理 Session
	// 使用模板引擎

	// 解析请求地址中的 get 参数
	/*var urlObj = url.parse(req.url, true)
	req.query = urlObj.query*/
	query(req, res)

	// 请求地址中的 post 参数
	/*req.body = {
		foo: 'bar'
	}*/
	postBody(req, res)

	// 解析 Cookie
	/*req.cookies = {
		isLogin: true
	}*/
	cookie(req, res)

	// 配置 Session
	//req.session = {}
	session(req, res)

	// 配置模板引擎
	res.render = function () {

	}
	// 上面的过程都是为了在后面做具体业务操作处理的时候更方便
})

http.listen(3000, function () {
	console.log('running......')
})