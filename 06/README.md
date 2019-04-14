 - MongoDB 数据库
 	+ 灵活
 	+ 不用设计数据表
 	+ 业务的改动不需要关心数据表结构
 	+ DBA 架构师  级别的工程师都需要掌握这项技能
 		* 设计
 		* 维护
 		* 分布式计算
 - mongoose
 	+ mongodb 官方包也可以操作 MongoDB数据库
 	+ 第三方包：WordPress 项目开发团队
 	+ 设计 Schema
 	+ 发布 Model（得到模型构造函数）
 		* 查询
 		* 增加
 		* 修改
 		* 剔除
 - Promise
 	+ http://es6.ruanyifeng.com/   电子书链接
 	+ callback hell 回调地域
 	+ 回调函数中套了回调函数
 	+ Promise（EcmaScript 6 中新增了一个语法 API）
 	+ 容器
 		* 异步任务（pending）
 		* resolve
 		* reject
	+ then 方法获取容器的结果（成功的，失败的）
	+ then 方法支持链式调用
	+ 可以在 then 方法中返回一个 promise 对象，然后在后面的 then 方法中获取一个then返回的 promise 对象的状态结果

- git init 可将文件更新到git仓库
- path 路径操作模块
  -参考文档：https://nodejs.org/dist/latest-v11.x/docs/api/path.html
 	+ path.basename    # 获取一个路径的文件名（默认包含扩展名）
 	+ path.dirname    # 获取一个路径中的目录部分
 	+ path.extname    # 获取路径中的扩展名部分
 	+ path.parse    #  把路径转换为对象：
 		+ root 根路径、dir 目录、base 包含后缀名的文件名、ext后缀名、name 不包含后缀名的文件名
	+ path.join    #  当你需要进行路径拼接的时候，推荐使用这个方法
	+ path.isAbsolute  # 判断一个路径是否是绝对路径

- Node 中的其他成员
	+ 在每个模块中，除了 require、exports 等模块相关 API 之外，还有两个特殊的成员；
	+ `__dirname`: 动态获取，可以用来获取当前文件模块所属目录的绝对路径
	+ `__filename`: 动态获取 可以用来获取当前文件的绝对路径
	+ `__dirname` 和 `__filename` 是不受执行 node 命令所属路径影响的
	+ 在文件操作中，使用相对路径是不可靠的，因为在Node中文件操作的路径被设计为相对于执行node的命令所处的路径（不是bug，让你家这样设计是有使用场景）
	+ 所以为了解决这个问题 ，很简单，只需要把相对路径改为绝对路径就可以了
	+ 那这里我们可以使用 `__dirname` 和`__filename` 来帮助我们解决这个问题
	+ 在拼接路径的 过程中，为了避免手动拼接带来的一些低级错误，所以推荐多使用： path.join()来辅助拼接
	+ 所以为了尽量避免刚才所描述的这个问题，大家以后在文件中使用的相对路径都统一转换为 `动态的绝对路径`
	+ 模块中的路径标识和这里的路径没有关系， 不受影响（相对于文件模块）
 - Node 综合 Web 案例
 	+ 目录结构
 		* app.js 			   项目的入口文件
 		* controllers
 		* models
 		* node_modules         第三方包
 		* package.json         包描述文件
 		* package-lock.json    第三方包版本锁定文件（npm 5 以后才有）
 		* public               公共的静态资源
 		* README.md            项目说明文档
 		* routes			   如果有任务比较多，代码量大，最好把路由按照业务的分类存储到 routes 目录中
 		* router.js 		   简单一点把所有的路由都放到这个文件
 		* views                存储视图目录
	+ 模板页
		+ art-template 子模版
		+ art-template 模板继承
	+ 路由设计
+ | 路径 | 方法    |post参数|         post参数       |     备注   |是否需登陆| 
+ |  /   |  GET    |        |                        |  渲染首页  |
+ | /register| GET |        |mail、nickname、password|处理注册页面|          |
+ |/register | Post|        |                        |处理注册请求|          |
+ | /login   | GET |        |                        |渲染登陆界面|          |
+ | /login   | POST|        |                        |处理登陆请求|          | 
+ |  /logout | GET |        |                        |处理推出请求|          |

- 书写步骤
	+ 创建目录结构
	+ 整合静态页-模板页
		* include
		* block
		* extend
- 表单同步提交和异步提交区别
	+ 字符串交互
	+ 请求（报文、具有一定格式得字符串）
	+ HTTP 就是 Web 中得沟通语言
	+ 服务器响应（字符串）
	+ 01
	+ 服务器端重定向针对异步请求无效
- Express 中配置使用 express-session 插件
	+ 插件也是工具
	+ 我们最终得目标是使用 Session 来帮我们管理一些敏感信息数据状态，例如保存登陆状态
	+ 写 Session、
		* req.session.xxx = null
	+ 读 Session、
		* req.session.xxx = null
	+ 删除 Session
		* req.session.xxx = null
		* 更严谨的做法是 `delete` 语法
		* delete req.session.xxx
	+ 设计用户登陆、退出、注册的路由
	+ 用户注册
		* 先处理好客户端页面的内容（表单控件的name、收集表单数据、发起请求）
		* 服务端
			* 获取客户端表单请求数据
			* 操作数据库
			* 如果有错，发送500告诉客户端服务器错了
			* 其他的根据你的业务发送不同的响应数据
	+ 用户登陆
	+ 用户退出

 - 在 Express 配置使用 express-session 插件
 	+ 参考文档：https://www.npmjs.com/package/express-session
 	+ 配置：
 	`// 该插件会为 req 请求对象添加一个成员：req.session 默认是一个对象
 	// 这是最简单的配置方式，暂且先不用关心里面参数的含义
 	app.use(session({
  // 配置加秘密字符串，它会在原有加密的基础之上和这个字符串拼接起来去加密
  // 目的是为了增加安全性，为防止客户端恶意伪造
  secret: 'test',  
  resave: false,
  saveUninitialized: true  // 无论你是否使用 Session，我都默认直接给你分配一把钥匙
}))`
	+ 使用：
	`// 添加 Session 数据
	req.sesseion.foo = 'bar'
	// 获取 Session 数据
	req.session.foo`
	+ 提示：默认Session 数据是内存存储的，服务器一旦重启就丢失，真正的生产环境会把Session进行持久化存储。
