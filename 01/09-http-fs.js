//1、结合fs发送文件中的数据
//2、Content-type
//http://tool.oschina.net/commons  content-type类型查询地址
//不同的资源对应的Content-type是不一样的
//图片不需要指定编码
//一般字符数据才制定编码
var http = require("http");
var server = http.createServer();
var fs = require('fs');
server.on('request',function(req,res){
	var url = req.url;

	if(url == '/'){
		/*res.end('<!DOCTYPE html><html><head><title></title></head><body><h1>首页</h1></body></html>')*/
		fs.readFile('./resource/index.html',function(err,data){
			if(err){
				res.setHeader('Content-type','text/plain;charset=utf-8')
				res.end('文件读取失败，请稍后重试！');
			}else{
				res.setHeader('Content-type','text/html;charset=utf-8')
				res.end(data);
			}
		})
	}else if(url === '/a.jpg'){
		fs.readFile('./resource/a.jpg',function(err,data){
			if(err){
				res.setHeader('Content-type','text/plain;charset=utf-8')
				res.end('文件读取失败，请稍后重试！');
			}else{
				//data默认是二进制数据，可以通过.toString()转为我们能识别的字符串
				//res.end()支持两种数据类型，一种是二进制，一种是字符串
				//图片就不需要制定编码了，因为我们常说的编码一般指的是：字符编码
				res.setHeader('Content-type','image/jpeg;charset=utf-8')
				res.end(data);
			}
		})
	}
	
})
server.listen(3002,function(){
	console.log('Server is running...');
})