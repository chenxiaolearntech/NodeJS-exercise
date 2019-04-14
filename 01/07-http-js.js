//用来获取机器信息的
var os = require('os');

var path = require('path');
//获取当前机器的CPU信息
console.log(os.cpus());

//memory内容
console.log(os.totalmem());

//extname  extension name  扩展名
console.log(path.extname('c:/a/b/c/d/helloMy.txt'));