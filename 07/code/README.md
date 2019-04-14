 - 应用程序级别中间件
 	+ 万能匹配（不关心任何请求路径和请求方法）
	+ `app.use(function (req, res, next) 	{
		  console.log('haha')
		  next()
		})`
	+ 只要是以'/xxx/'开头的：
	+ `app.use('/a', function (req, res, next) {
  			console.log('/a')
			})`

 - 路由级别中间件
 	+ get：
 	+ `app.get('/a', function (req, res, next) {
			  console.log('/a')
			})`
	+ post：
 	+ `app.post('/a', function (req, res, next) {
			  console.log('/a')
			})`
	+ put：
 	+ `app.put('/a', function (req, res, next) {
			  console.log('/a')
			})`

	+ delete：
 	+ `app.delete('/a', function (req, res, next) {
			  console.log('/a')
			})`