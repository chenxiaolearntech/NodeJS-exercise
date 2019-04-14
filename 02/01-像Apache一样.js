var http =  require('http');
var fs = require('fs');

var server = http.createServer();

var dir = "E:/about-font-end/NODEJS/NODE-excercise/02";

server.on('request',function (req, res) {
	var url = req.url;

	if(url === '/'){
		fs.readFile(dir + '/a.txt',function (err,data) {
			if(err){
				return res.end('404 not found');
			}
			res.end(data);
		});
	} else if (url === '/index.html'){
		fs.readFile(dir + '/index.html', function (err,data) {
			if(err){
				return res.end('404 not found');
			}
			res.end(data);
		})
	} else if (url === '/login.html'){
		fs.readFile(dir + '/login.html', function (err,data) {
			if(err){
				return res.end('404 not found');
			}
			res.end(data);
		})
	}
})

server.listen(3000,function () {
	console.log('server is running....');
})