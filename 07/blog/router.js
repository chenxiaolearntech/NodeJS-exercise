var express = require('express')
var User = require('./models/user.js')
var md5 = require('blueimp-md5')

var router = express.Router()

router.get('/', function (req, res) {
	//console.log(req.session.user)
	res.render('index.html', {
		user: req.session.user
	})
})

router.get('/login', function (req, res) {
	res.render('login.html')
	

})

router.post('/login', function (req, res, next) {
	// 1. 获取表单数据
	//console.log(req.body)
	// 2. 查询数据库用户名密码是否正确
	var body = req.body
	User.findOne({
		email: body.email,
		password: md5(md5(body.password))
	}, function (err, user) {
		if (err) {
			/*return res.status(500).json({
				err_code:500,
				message: err.message
			})*/
			return next(err)
		}
		if (!user) {
			return res.status(200).json({
				err_code: 1,
				err_message: 'Email or password is invaild'
			})
		}

		// 3. 发送响应数据
		// 用户存在， 登陆成功， 通过 Session记录登录状态
		req.session.user = user

		res.status(200).json({
			err_code: 0,
			message: 'OK'
		})
	})
	
})

router.get('/register', function (req, res, next) {
	res.render('register.html')
})

router.post('/register', function (req, res, next) {
	// 1.获取表单提交的数据
	//	console.log(req.body)
	// 2.操作数据库
	//	 判断该用户是否存在
	//	 如果已存在，不允许注册
	//	 如果不存在，注册新建用户
	// 3.发送响应
	var body = req.body
	User.findOne({
		$or: [
			{
				email: body.email
			},
			{
				nickname: body.nickname
			}
		]
	}, function (err, data) {
		if (err) {
			/*return res.status(500).json({
				success: false,
				message: '服务端错误'
			})*/
			return next(err)
		}
		//console.log(data)
		if (data) {
			return res.status(200).json({
				err_code: 1,
				message: 'Email or nickname already exists'
			})
			return res.send('邮箱或密码已存在，请重试')
			/*return res.render('register.html', {
				err_message: '邮箱或密码已存在',
				form: body
			})*/
		}


		// 对密码进行 md5 重复加密
		body.password = md5(md5(body.password))
		new User(body).save(function (err, user) {
			if (err) {
				/*return res.status(500).json({
					err_code: 500,
					message: 'Internal error'
				})*/
				return next(err)
			}

			// 注册成功，使用 Session 记录用户的登陆状态
			req.session.user = user
			// 服务端重定向只针对同步请求才有效，异步请求无效
			//res.require('/')
	        //res.status(200).send('{"success": true}')
			/*res.status(200).send(JSON.stringify({
				success: true,
				foo: 'bar'
			}))*/
			// 以上两种方法均可输出 json 数据
			// Express 提供了一个响应方法：json
			// 该方法接收一个对象作为参数，它会自动帮你把对象转为字符串再发送给浏览器
			res.status(200).json({
				err_code: 0,
				message: 'ok'
			})
		})
	})
})

router.get('/logout', function (req, res) {
	// 清除登录状态
	req.session = null
	// 重定向到登录页
	res.redirect('/login')
})

module.exports = router