require('./a');

//优先从缓存加载
//由于在a中已经加载过，所以这里不会重复加载
//可以拿到其中的接口对象，但是不会重复执行里面的代码
//目的是为了避免重复加载，提高模块加载效率
var fn = require('./b');

console.log(fn);