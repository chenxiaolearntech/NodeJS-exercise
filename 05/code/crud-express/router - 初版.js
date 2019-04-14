var fs = require('fs')
module.exports = function (app) {	
	app.get('/students', function (req, res) {
		// readFile 的第二个参数还是可选的，传入 utf-8 是告诉他把读取的文件直接按照utf-8编码
		fs.readFile('./db.json','utf8', function (err, data) {
			if(err) {
				return res.status(500).send('Server error.')
			}
			//文件中读取到的数据一定是字符串，所以一定要手动转成对象才可以使用
			res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子'
			],
			students: JSON.parse(data).students
		})
		})
	})

	app.get('/students/new', function (req, res) {

	})


	app.get('/students/new', function (req, res) {
		
	})

	app.get('/students/new', function (req, res) {
		
	})

	app.get('/students/new', function (req, res) {
		
	})

	app.get('/students/new', function (req, res) {
		
	})
}
