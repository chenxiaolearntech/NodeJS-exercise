app
	.get ('/', function (req, res) {
	// res.write('hello')
	// res.write('world')
	// res.end('hello world')
	res.send('hello world')
})

	.get ('/login', function (req, res) {
	// res.write('hello')
	// res.write('world')
	// res.end('hello world')
	res.send('login page')
})