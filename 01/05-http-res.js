var http = require('http');  


var server = http.createServer();
// request请求对象处理函数，需要接收两个参数；
// request请求对象，请求对象可以用来获取客户端的一些请求信息，例如请求路径
// response响应对象
// 响应对象可以用来给客户端发送相应消息

server.on('request',function(request,response){
	console.log('收到客户端的请求了,请求路径是' + request.url);
	//这里可以通过if条件句来判断响应回应的东西

	//response对象有一个方法：write可以用来给客户端发送响应数据
	//write可以写很多次，但最后一定要用end来结束，否则客户端会一直等待

	response.write('hello');
	response.write(' nodejs');

	//告诉客户端，我的话说完了，可以关闭了
	response.end();

	//由于现在我们的服务的能力还非常的弱，无论什么请求都只能相应hello nodejs

})
server.listen(3000,function(){
	console.log('服务器启动成功了，可以通过http://127.0.0.1:3000来访问');
});