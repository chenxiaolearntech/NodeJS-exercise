var http = require("http");
var server = http.createServer();
var fs = require('fs');
var dir = 'E:/about-font-end/NODEJS/NODE-excercise/02';
var template = require('art-template');
server.on('request', function (req,res) {
	var url = req.url;
	fs.readFile('./template-apache.html', function (err, data) {
		if (err) {
		return res.end('404 not found');
	}
	//1.如何得到fir目录列表中的文件名和目录名   fs.readdir
	//2.如何将得到的文件名和目录名替换到template.html中
	//  模板引擎 
	//	2.1在template.html中需要替换的位置预留一个特殊的标记（就像以前使用模板引擎的标记一样）
	//	2.2根据files生成需要的HTML内容
	//只要你做了这两件事，那问题就解决
	fs.readdir(dir, function (err, files) {
		if(err) {
			return res.end('Can not find www dir.')
		}
		
		var htmlStr = template.render(data.toString(), {
			title: '哈哈'
		});
		//3.发送解析替换过后的响应数据
		res.end(htmlStr);
	})
	
	});
})

server.listen(3000,function () {
	console.log('server is running....');
})