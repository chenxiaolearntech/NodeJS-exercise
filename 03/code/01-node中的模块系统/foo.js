var foo = 'bar';

function add(x, y) {
	return x + y;
}

//模块需要直接导出某个成员， 而非挂载的方式
//这个时候必须使用下面这种方式
//module.exports = add;


module.exports = {
	add: function (x, y) {
	return x + y;
    },
	str: 'hello'
	    }

// 只能得到我想要给你的成员
// 这样做的目的是为了解决变量名冲突的问题
//exports.add = add;


// exports 是一个对象
//可以通过多次为这个变量添加新成员实现对外导出多个内部成员


//exports.str = 'hello';


//现在有一个需求：
//希望加载直接得到一个

