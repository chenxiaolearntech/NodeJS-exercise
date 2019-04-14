var fs = require('fs');

// 在 Ecmascript 6 中新增一个 API Promise
// Promise 是一个构造函数

// 创建 Promise 容器
// 1. 给别人一个承诺
//	Promise 容器一旦创建，就开始执行里面代码
// Promise 里面的任务是异步的
var p1 =  new Promise(function (resolve, reject) {
	fs.readFile('./data/a.txt', 'utf8', function (err, data) {
		if (err) {
			// 失败了，承诺在容器中的任务失败了
			//console.lolg(err)
			// 把容器的 Pending 状态变为 Rejected
			// 调用 reject 就相当于调用了 then 方法的第二个参数函数
			reject(err)
		} else {
			// 承诺在容器中的任务成功了
			//console.log(data)
			// 把容器的 Pending 状态更改为 Resolved
			// 也就是说这里调用的 resolve 方法实际上就是 then 方法传递的那个function
			resolve(data)
		}
	})
})

var p2 =  new Promise(function (resolve, reject) {
	fs.readFile('./data/b.txt', 'utf8', function (err, data) {
		if (err) {
			// 失败了，承诺在容器中的任务失败了
			//console.lolg(err)
			// 把容器的 Pending 状态变为 Rejected
			// 调用 reject 就相当于调用了 then 方法的第二个参数函数
			reject(err)
		} else {
			// 承诺在容器中的任务成功了
			//console.log(data)
			// 把容器的 Pending 状态更改为 Resolved
			// 也就是说这里调用的 resolve 方法实际上就是 then 方法传递的那个function
			resolve(data)
		}
	})
})

var p3 =  new Promise(function (resolve, reject) {
	fs.readFile('./data/c.txt', 'utf8', function (err, data) {
		if (err) {
			// 失败了，承诺在容器中的任务失败了
			//console.lolg(err)
			// 把容器的 Pending 状态变为 Rejected
			// 调用 reject 就相当于调用了 then 方法的第二个参数函数
			reject(err)
		} else {
			// 承诺在容器中的任务成功了
			//console.log(data)
			// 把容器的 Pending 状态更改为 Resolved
			// 也就是说这里调用的 resolve 方法实际上就是 then 方法传递的那个function
			resolve(data)
		}
	})
})

p1
	.then(function (data) {
		console.log(data)
		// 当 p1 读取成功的时候
		// 当前函数中 return 的结果就可以在后面的 then 中 function 接收到
		// 当你在 return 123 后面就接收到 123
		//	return 'hello' 后面就接收到 'hello'
		//	没有 return 后面接收到的就是 undefined
		// 我们可以return一个Promise 对象
		// 当 return 一个 Promise 对象的时候，后续的 then 中的方法的第一个参数会作为p2的resolve返回
		return p2
	}, function (err) {
		console.log('读取文件失败了', err)
	})
	.then(function (data) {
		console.log(data)
		return p3
	})
	.then(function (data) {
		console.log(data)
		return p3
	})