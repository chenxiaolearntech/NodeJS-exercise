//art-template
//art-template 不仅在可以在浏览器中使用，也可以在node中使用

//安装：
// npm install art-template
//该命令在哪执行就会把包下载到哪里。默认会下载到 node_moules目录中
//node_moudles不要改，也不支持改

//在node中使用art-template 模板引擎
//模板引擎最早就是诞生于服务器领域，后来才发展到前端

//1.安装  npm install art-template
//2.在需要使用的文件模块中加载art-template
//	只需要使用require方法加载就可以了，require('art-template')
//3.查文档，使用模板引擎的API

var fs = require('fs');
var tplStar = `<!DOCTYPE html>
			<html>
			<head>
			<title></title>
			</head>
			<body>
				大家好 我叫{{ name }}
				今年 {{ age }} 岁
				来自 {{ province }}
				喜欢：{{ each hobbies }} {{ $value }} {{/each}}
			</body>
		</html>`;

var template = require('art-template');
fs.readFile('./tpl.html', function (err, data) {
	if(err) {
		return console.log('读取文件失败了')
	}

	//默认读取到的data是二进制数据
	//而模板引擎的render方法需要接受的是字符串
	//所以我们在这里需要把data二进制数据转为 字符串 才可以给模板引擎使用
	var ret = template.render(data.toString(), {
	name: 'jack',
	age: 18,
	province: '北京市',
	hobbies: [
		'写代码',
		'唱歌',
		'看书'
	],
	title:'个人信息'
})
	console.log(ret);
})

