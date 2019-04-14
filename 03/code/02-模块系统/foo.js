// 在 Node 中，每个模块内部都一个有自己的module
//该 module 对象中，有一个成员叫：exports

/*var module = {
	exports: {

	}
}*/  //每个module都会有这样的代码，但是看不见
// 默认在代码的最后有一句：
// return module.exports
//但是看不见
//Node 为了简化操作， 专门提供一个exports= module.exports
console.log(exports === module.exports) //true

/*exports.foo = 'foo';
module.exports.add = function (x, y) {
	return x + y;
}*/

// 当一个模块需要导出单个成员的时候
// 就直接给 exports 赋值是不管用的
exports = 'hello'

// 谁require 这个文件， 谁就得到 module.exports
// 默认在代码的最后有一句：
// 一定要记住， 最后return 的是 module.exports
// 不是exports
//所以给 exports 重新赋值不管用
// return module.exports

// 给 exports 赋值会断开和 module.exports之间的联系
// 同理，给module.exports 重新赋值也会断开

/*module.exports = {
	foo: 'bar'
}
// 但是这里又重新建立两者的引用关系
exports = module.exports
exports.foo = 'hello'*/

exports.foo = 'bar';//{foo: bar}

module.exports.a = 123;//{foo: bar, a:123}

exports = {
	a: 456
}
//此时 exports != module,exports
// 最终 return 的是 module.exports
// 无论是exports的什么成员都没有用
module.exports.foo = 'haha'
//{foo: haha, a:123}

exports.c = 456
// 已经无关，不能混淆
exports = module.exports;
// 重新建立了和module.exports 之间的引用关系
// 下面语句生效 
exports.a = 789;

// 前面无论写的什么，这里全部推翻，重新赋值
// 最终得到的是function
module.exports = function () {
	console.log('hello');
}

// 真正去使用的时候：
//	导出多个成员：exports.xxx = xxx
//	导出多个成员也可以： module.exports = {
//	}
//	导出单个成员：module.exports = xxx