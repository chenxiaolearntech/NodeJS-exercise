var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
mongoose.Promise = global.Promise;


var Schema = mongoose.Schema

var studentSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	gender: {
		type: Number,
		enum: [0,1],   //限定他只能在这两个中间选
		default: 0
	},
	age: {
		type: Number
	},
	hobbies: {
		type: String
	}
})

// 直接导出构造模型函数
module.exports = mongoose.model('Stutent', studentSchema)