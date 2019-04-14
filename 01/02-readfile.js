//1。使用require方法加载fs核心模块
var fs = require('fs');

//2.读取文件
//   第一个参数就是尧读取的文件路径
//   第二个参数是一个回调函数
//     error
//       如果读取失败，error就是错误对象
//       如果读取成功，error就是null
//     data
//       如果读取成功，data就是读取到的数据
//       如果读取失败，error就是错误对象  data就是undefined
fs.readFile('hello1.txt',function(error,data){

	if(error){
		console.log('读取信息失败');
	}else{
		console.log(data.toString());
	}
	
	//返回 <Buffer 68 65 6c 6c 6f>
	//文件中储存的其实都是二进制数据0 1
	//这里看到的不是0和1，原因是二进制转换为16进制了
	//但无论是2二进制或16进制，人类都不认识，
	//因此通过toString方法将其转换为我们能认识的字符
});

