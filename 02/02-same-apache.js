var http = require("http");
var server = http.createServer();
var fs = require('fs');
var dir = 'E:/about-font-end/NODEJS/NODE-excercise/02';
server.on('request', function (req,res) {
	var url = req.url;
	var filePath = '/index.html';
	if(url !== '/'){
		filePath = url;
	}
	console.log(filePath, dir + filePath);

	fs.readFile(dir + filePath, function (err, data) {
		if(err){
			return res.end('404 not found');
		}
		res.end(data);
	})
})

server.listen(3000,function () {
	console.log('server is running....');
})