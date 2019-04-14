//app application 应用程序
//把当前模块所有的依赖都声明在文件模块最上面
//为了让目录结构保持统一清晰，所以我们约定，把所有HTML文件都放到 views（视图）目录中
//我们为了方便的统一处理这些静态资源，所以我们约定把所有的静态资源都存放在 pubilc目录中
//lib文件夹中存放第三方的资源
//哪些资源 能被用户访问，哪些资源不能被用户访问，可以通过代码来进行非常灵活的控制
//  /index.html
//   /public  整个public 目录中的资源都允许被访问
//  前后端融会贯通了，为所欲为
//   '/' 就是url的标识

var http = require('http');
var fs = require('fs');
var template = require('art-template');
var url = require('url');
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
];

// /pinglun?name=xxxxx&message=xxxx
//对于这种表单提交的请求路径，由于其中具有用户动态填写的内容
//所以不能通过去判断完整的url路径来处理这个请求
//结论：对于我们来讲，如果你的请求路径是 /pinglun的时候，那就认为提交表单的请求过来了

http
	.createServer(function (req, res) {
		//使用url.parse() 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转换为一个对象（通过query属性来访问）
		var parseObj = url.parse(req.url, true);

		//单独获取不包含查询字符串的路径部分（该路径不包含 ？ 之后的内容）
		var pathname = parseObj.pathname;

		if(pathname === '/'){
			fs.readFile('./views/index.html', function (err, data) {
				if (err) {
					return res.end('404 not found.')
				}
				var htmlStr = template.render(data.toString(), {
					conmments: conmments
				})
				res.end(htmlStr);
			});  
		} else if(pathname === '/post') {
			fs.readFile('./views/post.html', function (err,data) {
				if(err) {
					return res.end('404 not found');
				}
				res.end(data);
			})
		} else if (pathname.indexOf('/public/') === 0) {
			// /public/css/main.css
			// /public/js/main.js
			// /public/lib/jquery.js
			//统一处理：
			//    如果请求路径是以/public/ 开头的，则认为要获取public中的某个资源
			//    所以我们就直接可以把请求路径当作文件路径来直接进行读取

			fs.readFile('.' + pathname, function (err, data) {
				if(err) {
					return res.end('404 not found.')
				}
				res.end(data);
			})
		} else if (pathname === '/pinglun') {
			//不论 /pinglun？xxx 之后是什么，都不用担心，因为pathname 是不包含？之后的路径
			console.log('收到表单请求了', parseObj.query);
			res.setHeader('Content-type','text.plain;charset=utf-8')
			/*res.end(JSON.stringify(parseObj.query));*/
				//一次请求对应一次响应，响应结束这次请求也就结束了

			//我们已经使用url模块的parse方法把请求路径中的查询字符串给解析成一个对象
			// 所以接下来要做的就是：
			//	1.获取表单提交的数据 parseObj.query
			//	2.将当前日期添加到数据对象中，然后储存到数组中
			//	3.让用户重新定向跳转到首页 /
			//	当用户重更新请求 / 的时候，我数组中的数据已经发生变化了，所以用户看到的页面也就变了

			var conmment = parseObj.query;
			conmment.dateTime = '2019-03-23';
			//conmments.push(conmment);  //在数组后面添加
			conmments.unshift(conmment);  //在数组前面添加
			// 服务端这个时候已经把数据存储好了，接下来就是让用户重新请求 / 首页，就可以看到最新的留言内容

			// 如何通过服务器让客户端重定向？
			//	1.状态码设置为 302 临时重定向（永久重定向是 301， 默认状态码是200）
			//		statusCode
			//	2.在响应头中通过 Location 告诉客户端往哪定向
			//		setHeader
			//如果客户端发现收到服务器响应的状态码是 302 就会自动去响应头中找 Location， 然后对该地址发送新的请求
			//所以就能看到客户端自动跳转了

			res.statusCode = 302;
			res.setHeader('Location', '/');  //这里 ’/‘ 就是url的根路径
			res.end();   //这回没有响应数据
		} else {
			//其他的都处理成404
			fs.readFile('./views/404.html', function (err,data) {
				if(err) {
					return res.end('404 not found');
				}
				res.end(data);
			})
		}

	})
	.listen(3000, function () {
		console.log('running...');
	})

	//该案例思想步骤
	//1. /index.html
	//2. 开放 public 目录中的静态资源
	//		当请求 /public/xxx  的时候，读取响应 public 目录中的具体资源
	//3. /post post.html
	//4. /pinglun
	//		4.1 接受表单提交数据
	//		4.2 存储表单提交的数据
	//		4.3 让表单重新定向到 /
	//				statusCode
	//				setHeader