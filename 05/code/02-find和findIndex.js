// EcmaScript 6 对数组新增了很多方法
// find
// findIndex

// find 接受一个方法作为参数，方法内部返回一个条件
// find 会便利所有元素，执行你给定的带有条件返回值的函数
// 符合该条件的元素会作为 find 方法的返回值
// 如果遍历结束还没有符合 该条件的元素则返回undefined、

var users = [
	{id: 1, name: '张三'},
	{id: 2, name: '张三'},
	{id: 3, name: '张三'},
	{id: 4, name: '张三'}
	]

Array.prototype.myFind = function (conditionFunc) {
	for (var i = 0; i < this.length; i++) {
		if (conditionFunc(this[i], i)) {
			return this[i]
		}
	}
}

var ret = users.myFind(function (item, index) {
	return item.id === 4
})

console.log(ret)