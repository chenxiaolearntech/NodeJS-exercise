//require
//端口号

var http = require("http");

var server = http.createServer();
//在服务端默认发送的数据，其实是utf8编码的内容
//但是浏览器不知道你的内容是按照utf8编码的
//浏览器在不知道服务器相应内容的编码的情况下会按照当前操作系统的默认编码去解析
//中文操作系统默认是gbk
//解决方法就是正确的告诉浏览器我给你发送的内容是什么编码类型的
//在http协议中，Content-Type就是用来告知对方我给你发送的数据内是什么内容


server.on('request',function(req,res){
	var url = req.url;
	if(url === '/plain'){
		//text/plain就是普通文本
		res.setHeader('Content-type','text/plain; charset=utf-8');
		res.end('hello world 你好世界');
	}else if(url === '/html'){
		//如果你发送的是html格式的字符串，则也要告诉浏览器我给你发送的是text/html格式的内容
		res.setHeader('Content-type','text/html; charset=utf-8');
		res.end('<p>hello html<a>点我</a></p>')
	}	
})

server.listen(3002,function(){
	console.log('Server is running...');
})