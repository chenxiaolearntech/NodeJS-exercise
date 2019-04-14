//require方法有两个作用：
//   加载文件模块并执行里面的代码
//   拿到被加载文件模块导出的接口对象：exports
//   默认是一个空对象
//你需要做的是把所有被外部访问的成员挂载到这个exports对象中
var bex = require('./b');
var fs = require('fs');
console.log(bex.foo);  //hello
console.log(bex.add(10,100));  //110
console.log(bex.age);  //undefined
bex.readFile('./a.js');
fs.readFile('./a.js',function(err,data){
	if(err){
		console.log('读取文件失败');
	}else{
		console.log(data.toString());
	}
})   //输出文件的所有内容