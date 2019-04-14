var express = require('express')

var bodyParser = require('body-parser')

var app = express()

app.use('/public/', express.static('./public/'))


// 配置使用 art-template 模板引擎
// 第一个参数，表示当渲染以 .art 结尾的文件时，这里可以根据需要自定义文件后缀名，使用 art-template
//express-art-template 是专门用来在Express中把art-template整合到Express中
// 虽然这里不需要加载 art-template 但是也必须安装
//原因在于 express-art-template 依赖了 art-templatte
app.engine('html', require('express-art-template'))

// Express 为Response 相应对象提供了一个方法： render
// render方法默认是不可以使用， 但是如果配置了模板引擎就可以使用了
// res.render('html模板名', {模板数据})
//第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 也就是说 Express 有一个约定：开发人员把所有视图文件都放到views目录中

// 如果想要修改默认的 views 目录，则可以
//第一个参数是替代views的意思，
//第二个参数是要把views指向 render 函数的路径
// app.set('views', render 函数的默认路径)

//配置 body-parser 中间件（插件， 专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//
// parse application/json
app.use(bodyParser.json())


var conmments = [
	{
		name: '张三',
		message: '今天天气不错',
		dateTime: '2019-03-22'
	},
	{
		name: '张三2',
		message: '今天天气不错',
		dateTime: '2019-03-22'
	},
	{
		name: '张三3',
		message: '今天天气不错',
		dateTime: '2019-03-22'
	},
	{
		name: '张三4',
		message: '今天天气不错',
		dateTime: '2019-03-22'
	},
	{
		name: '张三5',
		message: '今天天气不错',
		dateTime: '2019-03-22'
	}
]

app.get('/', function (req, res) {
	res.render('index.html', {
		conmments: conmments
	})
})

app.get('/post', function (req, res) {
	res.render('post.html')
})

// 当以 POST 请求 /post 的时候，执行指定的处理函数
// 这样的话我们就可以；利用不同的请求方法让一个请求路径使用多次

app.post('/post', function (req, res) {
	// 1. 获取表单 POST 请求体数据
	// 2. 处理
	// 3.发送响应

	// req.query只能拿 get 请求参数
	console.log(req.body)

	//post
	//res.end('post')
	var conmment = req.body
	conmments.unshift(conmment)
	res.redirect('/')   //重定向
})

app.listen(3000, function () {
	console.log('running....')
})