# Node.js 第4部分笔记
## 知识点

- Express
- 原生的http在某些方面表现不足以应对我们的开发需求，所以我们就需要使用框架来加快我们的开发效率，让我们的代码高度统一。
- 在 Node中，有很多 Web 开发框架，我们这里以学习 express为主。
	+ 官方网址：http://expressjs.com/
- 起步
	+ 安装：npm install --save express
- hello world
	+ `const express = require('express')
	  const app = express()
	  const port = 3000
	  app.get('/', (req, res) => res.send('Hello World!'))
	  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
	  `
- 基本路由 （路由实际上就类似于一张表，这个表里面具体的映射关系，一一对应）
	+ 路由器
		+ 请求方法  请求路径 请求处理函数
	+ get:  //当你以GET方法请求 / 时，执行对应的处理函数
		+ `app.get ('/', function (req, res) {
			res.send('hello world')
    		})`
	+ post： 当你以POST方法请求 / 时，执行对应的处理函数
		+ `app.post('/', function (req, res) {
		res.end('Got a POST request')
		})`
- 静态服务
	+ /public 资源
		+ `app.use(express.static('./public'))`
	+ /files 资源
		+ `app.use(express.static('files'))`
	+ /public/xxx
		+ `app.use('public', express.static('public'))`
	+ /static/xxx
		+ `app.use('static', express.static('public'))`
	+ 
		+ `app.use('static', express.static(path_join(_dirname,'./public')))`
- 基于文件做一套 CRUD （增删改查）
	+ 模块化思想
	+ 模块如何划分
		+ 模块指责要单一
		+ Vue
		+ angular
		+ React
		+ 也非常有利于学习前端三大框架
- 修改完代码自动重启
	+ 我们这里可以使用一个第三方命令行工具，nodemon 来帮我们解决频繁修改代码重启服务器问题。
	+ nodemon 是一个基于Node.js开发的一个第三方命令行工具，我们使用的时候需要独立安装：
		+ # 在任意目录执行该命令都可以
		+ # 也就是说，所有需要 --global 来安装的包都可以在任意目录执行
		+ npm install --global nodemon
	+ 安装完毕之后，使用：
		+ node app.js
		+ # 使用 nodemon
		+ nodemon app.js
	+ 只要是通过 nodemon app.js 启动的服务，则它会监视你文件的变化，当文件发生变化的时候，自动帮你重启服务器。
- 在 Express中配置使用 art-template 模板引擎
	+ art-template GitHub仓库：https://github.com/aui/art-template
	+ art-template 官方文档：https://aui.github.io/art-template/
	+ 安装： `npm install --save art-template`
			 `npm install --save express-art-template`
	 + 配置：`app.engine('art', require('express-art-template'))`
	 + 使用： app.get('/', function (req, res) {
	 			// express 默认会去项目中的views目录找 index.html
	 			res.render('index.html', {
	 			title: 'hello world'
	 			})
	 })
	 + 如果希望修改默认 views 视图渲染储存目录，可以
	 +  `app.set('views', 目录路径)`  第一个参数 views 千万不要写错
 - 在 express 中获取表单 GET 请求参数
 	 + Express 内置了一个 API， 可以直接通过 req.query 来获取
 	 + req.query
 - 在 Express 获取表单 POST 请求体数据
 	 + 在 Express 中没有内置获取表单POST请求体的 API ，这里我们需要一个第三方包 bady-parser
 	 + 安装： npm install --save body-parser
 	 + 配置：
 	 	`var express = require('express')
		var bodyParser = require('body-parser')
		// 0. 引包
		var app = express()
		// 配置 body-parser
		//只要加入这个配置，则在 req请求对象上会多出一个属性： body
		// 也就是说你可以直接通过 req.body 来获取表单 POST 请求数据
		// parse application/x-www-form-urlencoded
		app.use(bodyParser.urlencoded({ extended: false }))
		//
		// parse application/json
		app.use(bodyParser.json())
		//使用
		app.use(function (req, res) {
		  res.setHeader('Content-Type', 'text/plain')
		  res.write('you posted:\n')
		  res.end(JSON.stringify(req.body, null, 2))
		})`
	 + 
 - 自己编写的步骤
 	+ 处理模板
 	+ 配置开放静态资源
 	+ 配置模板引擎
 	+ 简单路由：/students 渲染静态页面出来
 	+ 路由设计
 	+ 提取路由模块
 	+ 由于接下来一系列的业务操作都需要处理文件数据，所以我们需要封装 student.js
 	+ 先写好 student.js 文件结构
 		+ 查询所有学生列表的 API find
 		+ findById
 		+ sava
 		+ updateById
 		+ deleteById
	+ 实现具体功能
		+ 通过路由收到请求
		+ 接受请求中的数据（get、post）
			+ req.query
			+ req.body
		+ 调用数据操作 API 处理数据
		+ 根据操作结果给客户端发送响应