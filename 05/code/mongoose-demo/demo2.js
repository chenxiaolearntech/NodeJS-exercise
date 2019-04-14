var mongoose = require('mongoose')

var Schema = mongoose.Schema

// 1.连接 MongoDB 数据库,localhost代表本机数据库，
// test是数据库的名字，它可以是还未存在的
// 当你插入第一条数据之后就会被自动创建出来
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

// 2.设计集合结构（表结构）
// 字段名称就是表结构中的属性名称
// 约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
	username: {
		type: String,
		required: true    // 必须有
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
});

// 3. 将文档结构发布为模型
// 	  	mongoose.model 方法就是用来将一个架构发布为 model
//		第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//		mongoose 会自动将大写名词的字符串生成 小写复数 的集合名
//		例如这里的User最终会变为users集合名称
//		第二个参数：架构 Schema

// 返回值：，模型构造函数
var User = mongoose.model('User', userSchema)

//4. 当我们有了模型构造函数之后，就可以使用这个构造函数对users集合中的数进行操作（增删改查）
//*****#region /新增数据*******
/*var admin = new User({
	username: 'admin',
	password: '123456',
	email: '2352404495@qq.com'
})

admin.save(function (err, ret) {
	if (err) {
		console.log('保存失败')
	} else {
		console.log('保存成功')
		console.log(ret)
	}
})
*/
// #region /查询数据
//*********************
User.find(function (err, ret) {
	if (err) {
		console.log('failed')
	} else {
		console.log(ret)
	}
})


// #region /删除数据
//******************
/*User.remove({
	username: 'admin'
}, function (err, ret) {
	if (err) {
		console.log('删除失败')
	} else {
		console.log('success')
		console.log('success')
		console.log(ret)
	}
})*/
// #region /更新数据
//******************
/*User.findByIdAndUpdate('5ca44683632b0b27c8dacf0c', {
	password: '154822'
}, function (err, ret) {
	if (err) {
		console.log('failed');
	} else {
		console.log('success');
	}
})*/