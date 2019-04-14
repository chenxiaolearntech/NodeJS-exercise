var http = require('http'); 
//1、创建Server
var server = http.createServer();

//2、监听request请求事件，设置请求处理函数
server.on('request',function(req,res){
	console.log('收到请求，青求路径是' + req.url);
	console.log("请求我的客户端号是：",req.socket.remoteAddress,req.socket.remotePort);

	/*res.write('hello');
	res.write('nodejs');
	res.end();*/
	//上面方式比较麻烦，推荐使用更简单的方式
	//res.end('hello hello');

	//根据不同的请求路径发送不同的响应结果
	//1、获取请求路径
	//  req.url获取到的是端口号之后的那一部分路径
	//  也就是说所有的url都是以/开头的
	//2、判断路径处理响应
	var url = req.url;

	/*if(url === '/'){
		res.end('index page');
	}else if(url === '/login'){
		res.end('login page');
	}else{
		res.end('404 Not Found');
	}*/


	if(url === '/products'){
		var products = [
		{
			name:'小米 X',
			price: 8888
		},{
			name:'华为 X',
			price: 9999
		},{
			name:'vivo X',
			price: 6666
		}
		]
		res.end(JSON.stringify(products));   //将数组转化为字符串
	}else{
		res.end(1111);
	}

//相应内容只能是二进制数据或者字符串
//数字、对象、数组、布尔值都不可以



})
//3、绑定端口号，启动服务
server.listen(3001,function(){
	console.log('服务器启动成功，可以访问');
})