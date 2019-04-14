var fs = require('fs');
fs.readdir('E:/about-font-end/NODEJS/NODE-excercise/02', function (err, files) {
	if(err){
		return console.log('目录不存在');
	}
	console.log(files);
})