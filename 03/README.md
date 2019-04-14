# Node.js 第三部分课堂笔记

#知识点

- 模块系统
	+ 核心模块
	+ 第三方模块
	+ 自己写的模块
-npm
-package.json
-Express
	+ 第三方 Web 开放框架
	+ 高度封装了 http 模块
	+ 更加专注于业务， 非底层细节
- 增删改查
	+ 使用文件来保存数据（锻炼异步编码）
- MongaDB
	+（所有方法都封装好了）

## art-template中的 each，JQuery中的forEach的用法
	+ art-template（模板引擎）和JQuery（增强DOM操作的库）没有任何关系
	* each 是 art-template 的模板语法，专属的
	+ {{each 数组}}
	+ <li>{{ $value}}</li>
	+ {{/each}}   这是art-template 模板引擎支持的语法， 只能在模板字符串中使用
	* each 在JQuery中的应用
	+ $.each(数组, function)或者 
	+ $('div').each(function) 一般用于 Jquery 选择器选择到的伪数组实例对象
	* forEach 是EcmaScript 5 中的一个数组遍历函数，是 javaScript 生支持的遍历方法，能够遍历任何可以被遍历的成员
	+forEach

	+网页中的路径其实都是url路径吗，不是文件路径

- 在Node中使用 art-temolate 模板引擎
	+ 安装  在需要安装的目录下建立node_modules文件夹，cmd窗口输入npm install art-template命令
	+加载
	+ template.render()
- 客户端渲染与服务端渲染的区别
	+ 最少请求两次， 发起 ajax 在客户端使用模板引擎渲染
- 处理留言本案例首页数据列表渲染展示
- 处理留言本案例发表留言功能
	+ 路径
	+ 设计好的请求路径
	+ $GET 直接或查询字符串数据
	+ Node 中需要自己手动解析
		* url.parse()
	+ split() 方法用于把一个字符串分割成字符串数组。
	+ stringObject.split(separator,howmany)
- 掌握如何解析请求路径中的查询字符串
	+ url.parse()
- 如何在 Node 中实现服务器重定向
	+ header('location')
		* 301 永久重重定向 浏览器会记住
			- 假如在浏览器中打开a.com 在打开b.com
			- 下次打开 a.com, 浏览器将直接跳转并访问 b.com
		* 302 临时定向 浏览器不记住
			- 假如在浏览器中打开a.com 在打开b.com
			- 下载再打开a.com, 浏览器不会打开b.com


Node 中的模块系统
- 使用 Node 编写应用程序主要就是在使用：
	+ EcmaScript 语言
		* 和浏览器不一样， 在Node中没有BOM， DOM
	+ 核心模块
		* 文件操作的 fs
		* http 服务的http
		* url 路径操作模块
		* path 路径处理模块
		* os 操作系统信息
	+ 第三方模块
		* art-template
		* 必须通过np 下载才可以使用
	+ 自己写的模块
		* 自己创建的文件

什么是模块化
- 文件作用域
- 通信规则
	+ 加载 require
	+ 导出

CommonJS模块规范
在Node 中的 JavaScript 还有一个很重要的概念：模块系统。
- 模块作用域
- 使用 require 方法用来加载模块
- 使用 exports 接口对象来导出模块中成员

加载 require
语法：
``` var 自变量名 = require('模块')
```
- 两个作用：
	+ 执行被加载模块中的代码
	+ 得到被加载模块中的 exports 导出接口对象
导出 exports
	+ Node 中是模块作用域，默认文件中所有的成员只在当前文件模块有效
	+ 每个模块中都有一个module对象， 每个module对象中都有一个exports 对象
	+ 对于希望可以被其他模块访问的成员，我们需要把这些公开的成员挂载到 exports 接口对象中就可以了
	+ 也就是：`module.exports.xxx = xxx` 的方式
	+ 但是每次都 `module.exports.xxx = xxx` 很麻烦
	+ 所有 Node为了方便，同时在每一个模块中都提供一个成员叫：`exports`
	+ `module.exports.xxx = xxx` 结果为 `true`
	+ 所以对于 `module.exports.xxx = xxx` 的方式 完全可以:`exports.xxx = xxx`的方式
	+ 不要使用 `exports = xxx` 
	+ 因为每个模块最终向外`return` 的是 `module.exports`
	+ 而 `exports` 只是 `module.exports` 的一个引用
	+ 所以即便你为 `exports = xx` 重新赋值， 也不会影响`module.exports`
	+ 但是有一种复制方式比较特殊：`exports = module.exports` 这个用来重新定义引用关系的
- 导出多个成员
	```exports.a = 123
		exports.b = 'hello'
		exports.c = function () {
			console.log('ccc')
		}
		exports.d = {
			foo = 'bar'
		}
		```
- 导出单个成员（拿到的就是：函数、字符串）
```module.exports = 'hello'
```
	+ 以下情况会覆盖：
		``` module.exports = 'hello'
		// 以这个为准，后者会覆盖前者
		module.exports = function (x, y) {
		return x + y;
	    }
	     ```
	+ 也可以这样导出多个成员
		``` module.exports = {
			add: function (x, y) {
			return x + y;
		    },
			str: 'hello'
	    }```
原理解析
	exports 和 module.exports 的一个引用：
	console.log(exports === module.exports) // ==> true
	export.foo = 'bar'
	// 等价于
	module.exports.foo = 'bar'

```javascript
Array.prototype.mySlice = function () {
	var start = 0;
	var end = this.length
	if (arguments.length === 1) {
		// 如果有一个参数
		start = arguments[0]
	}else if (arguments === 2) {
		// 如果有两个参数
		start = arguments[0];
		end = arguments[1];
	}

	var tmp =[];
	for (var i = start; i < end; i++) {
		//将伪数组转化为数组
		tmp.push(this[i]);
	}
	return tmp;
}

var fakeArr = {
	0: 'abc',
	1: 'efg',
	2: 'hahhha',
	length: 3
}

[].mySlice.call(fakeArr);
// 上面的this就指的是fakeArr
// 所以就得到真正的数组
```

npm
- node package manager
- npm install art-template jquery bootstrap 像这样直接空格加包名就可以直接加在多个包
- 我们建议每个项目都要有一个 package.json 文件（包描述文件，就像产品的说明书一样），给人踏实的感觉
- 这个文件可以通过 npm init 的方式自动初始化出来
npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (04-require标识符分析)
Sorry, name can only contain URL-friendly characters.
package name: (04-require标识符分析)
Sorry, name can only contain URL-friendly characters.
package name: (04-require标识符分析) 04-demo
version: (1.0.0)
description: 这是一个测试项目
entry point: (main.js) index.js
test command:
git repository:
keywords:
author: chenxiao
license: (ISC)
About to write to E:\about-font-end\NODEJS\NODE-excercise\03\code\04-require标识符分析\package.json:

{
  "name": "04-demo",
  "version": "1.0.0",
  "description": "这是一个测试项目",
  "main": "index.js",
  "dependencies": {
    "art-template": "^4.13.2",
    "jquery": "^3.3.1"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "chenxiao",
  "license": "ISC"


-  建议执行 npm install 报名的时候 都加上 --save这个选项目的是用来保存依赖信息
- 对于我们目前来讲，最有用的是那个 'depenedncies' 选项，可以用来帮我们保存第三方包的依赖信息
-  如果你的 'node_modules' 删除了也不用担心，我们只需要：'npm install' 就会把package.json 中的 'dependencies' 中所有的依赖项都下载回来
	+ 建议每个项目的根目录下都有一个 'package.json' 文件
	+ 建议执行 'npm install xxx' 都加上 '--save' 这个选项，目的就是用来保存依赖信息
- npm 网站：https://www.npmjs.com/
- npm命令行工具  npm的第二层含义就是一个命令工具，只要你安装了node就已经安装了 npm。
- npm也有版本概念。
- 可以通过命令行中输入：
	+ npm --version  
	+ npm install --global npm  升级npm（自己升级自己）
- 常用命令
	+ npm init
		+ npm init -y 可以跳过向导，快速生成
	+ npm install
		+ 一次性把 dependencies选项中的依赖项全部安装
		+ npm i
	+ npm install 包名
		+ 只下载
		+ npm i 包名
	+ npm install ---save
		+ 下载并保存依赖项（package.json 文件中的 dependencies选项）
		+ npm i -S 包名
	+ npm uninstall 包名
		+ 只删除，如果叫依赖项依然会保存
		+ npm un 包名
	+ npm uninstall --save 包名
		+ 删除的同时也会把依赖信息也去除
		+ npm un -S 包名
	+ npm --help
		+ 查看使用帮助
	+ npm 命令 --help
		+ 查看指定命令的使用帮助
		+ 例如，如果忘记uninstall命令的简写，这个时候，可以输入 npm uninstall --help 来查看使用帮助
+ 解决 npm 被墙问题
	+ npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以需要解决这个问题
	+ 淘宝开发团队把npm在国内做了一个备份（镜像）：http://npm.taobao.org/
	+ 镜像就是备份，官方文档就是国外的
	+ 安装淘宝的cnpm：
	# 在任意目录下执行都可以
	# --global 表示安装到全局，而非当前目录
	# --global 不能省略，否则不管用
	npm install --global cnpm
	接下来你安装的时候把之前的npm替换成cnpm
	举个例子：
		# 这里还是走国外的npm服务器，速度比较慢
		npm install jquery
		# 使用cnpm 就会通过淘宝的服务器下载jquery
		cnpm install jquery
	+ 如果不想安装cnpm 又想使用淘宝的服务器来下载：
		+ cnpm install jquery --registry=https://npm.taobao.org/
		+ 但是每次这样手动参加数据很麻烦，所以我们可以把这个选项加入配置文件中：
		npm config set registry https://registry.npm.taobao.org/
		+ 只要经过了上面的命令，则你以后所有的 npm install 都会默认通过淘宝的服务请求来下载
		+ # 查看npm配置信息
		+ npm config list
		+ # 配错也没关系，再次执行上面命令就行
		《深入浅出的NodeJS》对于Node的学习非常有帮助