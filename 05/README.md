# NodeJS第五部分

- 函数功能
	+ 是一种数据类型 可当参数 可作返回值 相当灵活
	+ 一般情况下，把函数作为参数的目的就是为了获取函数内部的异步操作结果
- JavaScript 单线程、事件循环
	+ 注意：凡是需要一个函数内部异步操作的结果，例如
	+ setTimeout
	+ readFile
	+ writeFile
	+ ajax
	+ 这些情况，必须通过回调函数，例如
	+ `function add (x, y, callback) {
		// callback 就是回调函数
		// var x = 10
		// var y = 20
		// var callback = function (ret) { console.log(ret) }
		console.log(1)
		setTimeout(function () {
			var ret = x + y
			callback(ret)
			}, 1000)
		}
		add(10, 20, function (ret) {
			console.log(ret)
		})`

		+ 基于原声XMLHttpRequest封装 get 方法
		+ `<script type="text/javascript">
	//setTimeout
	//readFile
	//writeFile
	//readdir
	//ajax
	// 往往异步API 都伴随着一个回调函数
	function get (url, callback) {
		var oReq = new XMLHttpRequest()
		// 当请求加载成功之后要调用指定的函数
		oReq.onload = function () {
			callback(oReq.responseText)
		}
		oReq.open("get", url, true)
		oReq.send()
	}
	get('db.json', function (data) {
		console.log(data)
	})`
	+ 而在 PHP中当初在设计的时候就加入了`require` `include`功能，生来就支持模块化
	+ 模块作用域
	+ 可以使用API 来进行文件与文件之间的依赖加载
	+ 在Node这个环境中对JavaScript 进行了特殊的模块化支持
	+ JavaScript 天生不支持模块化
		+ require
		+ exports
		+ Node.js才有的
	+ 在浏览器中也可以像在 Node中的模块一样来进行编程
		+ require.js  第三方库  AMD
		+ sea.js      第三方库  CMD
	+ 无论是 CommonJS、AMD、CMD、UMD、EcmaScript 6 Modules 官方规范
		+ 都是为了解决 JavaScript 的模块化问题
		+ CommonJs、AMD、CMD 是非官方的
		+ EcmaScript 是官方规范定义
		+ 开发人员为了在不同的环境使用不同的 JavaScript模块化解决方案，在2015年发布了EcmaScript 2016官方标准，其中就包含了官方对 Javascript模块化的支持
		+ 虽然虽然标准已经发布了，但是很多 JavaScript 运行转换还不支持
		+ Node 也只是在8.5版本之后才对 EcmaScript 6 module 进行了支持
		+ less 编译器 > css
		+ EcmaScript 6 -> 编译器 -> EcmaScript 5
		+ 目前的前端情况都是使用了很多新技术，然后利用编译工具打包可以在低版本浏览器中运行
		+ 使用新技术的目的就是为了提高效率，增加可维护性
	+ app.use 不仅仅是用来处理静态资源的，还可以做很多工作
		+ 配置 body-parse 也是通过 app.use 来配置的，这也叫中间件，其中有一套规则
	+ npm init --yes 生成一个package.json文件 npm --save 文件名 又生成一个packag-lock.json
	+ package.json 和 package-lock.json
		+ npm 5 以前不会有package.json 这个文件， npm 5 以后才加入这个文件
		+ 当安装包的时候，npm都会生成或更新 package.json 这个文件
			+ npm 5 以后的版本安装包不需要加 --save参数，他会自动保存依赖信息
			+ 当你安装包的时候，会自动创建或者是更新package-lock.json这个文件
			+ package-lock.json 这个文件会保存 node_modules中所有包的信息（版本、下载地址）
			+ 这样的话重新 npm install 的时候速度就会提升
			+ 从文件来看，有一个lock称之为锁
				+ 这个lock是用来锁定版本的
				+ 如果项目依赖了1.1.1版本，如果你重新install棋诗画下载最新版本，而不是1.1.1，我们的目的就是希望可以锁定1.1.1这个版本
				+ 所以这个package-lock.json文件的另一个作用就是锁定版本号，防止自动升级新版
- MongoDB
	+ 关系型数据和非关系数据
	+ 表就是关系， 或者说表与表之间存在关系
		+ 所有的关系型数据库都需要通过sql语言来操作
		+ 所有的关系型数据库在操作之前都需要设计表结构
		+ 而且数据表还支持约束
			+ 唯一的
			+ 主键
			+ 非空
		+ 非关系型数据库非常灵活
		+ 有的非关系型数据库就是 key-value 对
		+ 但是MongoDB是长得最像关系型数据库的非关系型数据库
			+ 数据库 -》 数据库
			+ 数据表 -》 集合（数组）
			+ 表记录 -》（文档对象）
		+ 安装地址： https://www.mongodb.com/download-center/community?jmp=docs

- 回调函数
	+ 异步编程
	+ 如果需要得到一个函数内部异步操作的结果，这时候必须通过回调函数来获取
	+ 在调用的位置传递一个函数进来
	+ 在封装的函数内部调用传递进来的函数
- find、findIndex、forEach
	+ 数组的遍历方法，都是对函数作为参数的一种运用
	+ every
	+ some
	+ includes
	+ map
	+ reduce 功能很强大
	+ [1,2,3].reduce(function (pre, cur) { return pre  cur})
- 在Node中如何操作 MongoDB数据
	+ 使用官方的 mongodb 来操作：https://github.com/mongodb/node-mongodb-native
	+ 使用第三方库 mongoose：https://mongoosejs.com/
	+ 安装： npm i mongoose
	+ `// 引入需要的包
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
mongoose.Promise = global.Promise;
var Cat = mongoose.model('Cat', { name: String });
for (var i = 0; i < 10; i++) {
	var kitty = new Cat({ name: 'Zildjian' });
	kitty.save(function (err) {
		if(err) {
			console.log(err)
		} else {
			console.log('meow')
		}
	});
}`
	+ MongoDB 数据库的基本概念
		+ 可以有多个数据库  （MySQL叫表，，这里叫集合）
		+ 一个集合中可以有多个文档（表记录）
		+ 文档结构很灵活，没有任何限制
		+ MongoDB 非常灵活，不需要像 MySql 一样先创建数据库、表、设计表结构
			+ 在这里只需要：当你需要插入数据的时候，只需要指定哪个数据库的哪个集合操作就可以
			+ 一切都由MongoDB来帮你自动完成建库建表这件事
- 官方指南
	+ 设计Schema 发布Model
	+ `var mongoose = require('mongoose')
		var Schema = mongoose.Schema
		// 1.连接 MongoDB 数据库,localhost代表本机数据库，
		// test是数据库的名字，它可以是还未存在的
		// 当你插入第一条数据之后就会被自动创建出来
		mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
		// 2.设计集合结构（表结构）
		// 字段名称就是表结构中的属性名称
		// 约束的目的是为了保证数据的完整性，不要有脏数据
		var userSchema = new Schema({
			username: {
				type: String,
				require: true    // 必须有
			},
			password: {
				type: String,
				require: true
			},
			email: {
				type: String
			}
		});
		// 3. 将文档结构发布为模型
		// 	  	mongoose.model 方法就是用来将一个架构发布为 model
		//		第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
		//		mongoose 会自动将大写名词的字符串生成 小写复数 的集合名
		//		例如这里的User最终会变为users集合名称
		//		第二个参数：架构 Schema
		// 返回值：，模型构造函数
		var User = mongoose.model('User', userSchema)
		//4. 当我们有了模型构造函数之后，就可以使用这个构造函数对users集合中的数进行操作（增删改查）
		`
		+ 增加数据
		+ `var admin = new User({
		username: 'admin',
		password: '123456',
		email: '2352404495@qq.com'
	})
	admin.save(function (err, ret) {
		if (err) {
			console.log('保存失败')
		} else {
			console.log('保存成功')
			console.log(ret)
		}
	})`
	+ 查询：
	+ 查全部：
	`User.find(function (err, ret) {
	if (err) {
		console.log('failed')
	} else {
		console.log(ret)
	}
})`
	+ 按条件查一个，条件可以有多个：
	`User.findOne({
		username: 'chenxiao'
	}, function (err, ret) {
		if (err) {
			console.log('failed')
		} else {
			console.log(ret)
		}
	})`    //返回的是对象，如果把findOne换成find则会返回数组
	+ 无条件查询一个，结果是第一条：
	`User.findOne(function (err, ret) {
	if (err) {
		console.log('failed')
	} else {
		console.log(ret)
	}
})`
	+ 删除数据
	`User.remove({
	username: 'admin'
}, function (err, ret) {
	if (err) {
		console.log('删除失败')
	} else {
		console.log('success')
		console.log(ret)
	}
})`
	+ 更新数据
	`User.findByIdAndUpdate('5ca44683632b0b27c8dacf0c', {
	password: '154822'
}, function (err, ret) {
	if (err) {
		console.log('failed');
	} else {
		console.log('success');
	}
})`
	+ 操作指南：https://mongoosejs.com/docs/guide.html

 Promise
	+ callback hell：回调地域
	+ 读取文件是异步进行，无法保证文件读取顺序，现在可以通过回调嵌套的方式来保证顺序
	+ 为了解决回调地域嵌套方式带来的问题，所以在 EcmaScript 6 中新增了一个 API：Promise。
	+ Promise 的英文就是承诺、保证的意思
	