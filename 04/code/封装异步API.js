function fn (callback) {
	setTimeout(function ()  {
		var data = 'data'
		callback(data)
	}, 1000)
}
// 回调函数：获取异步操作的结果

// 调用 fn， 得到内部的 data
// console.log(fn))


// 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取 
fn(function () {
	console.log(data)
})