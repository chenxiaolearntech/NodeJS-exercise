var fs = require('fs');

fs.readFile('./data/a.txt', 'utf8', function (err, data) {
	if (err) {
		// return console.log('读取失败')
		// 抛出异常
		//	1. 阻止程序的进行
		//	2. 把错误消息打印到控制台
		throw err
	}
	console.log(data)
	fs.readFile('./data/b.txt', 'utf8', function (err, data) {
		if (err) {
			// return console.log('读取失败')
			// 抛出异常
			//	1. 阻止程序的进行
			//	2. 把错误消息打印到控制台
			throw err
		}
		console.log(data)
		fs.readFile('./data/c.txt', 'utf8', function (err, data) {
			if (err) {
				// return console.log('读取失败')
				// 抛出异常
				//	1. 阻止程序的进行
				//	2. 把错误消息打印到控制台
				throw err
			}
			console.log(data)
		})
	})
})
// 异步代码，文件越大，读取速度会相对慢一些，无法决定读取文件按的顺序，操作系统的调动机制
// 以上嵌套方式的读取文件，确定了文件读取的顺序，这就是回调地域