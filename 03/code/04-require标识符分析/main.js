//如果是非路径形式的模块标识符
// 路径形式的模块：
// ./ 当前目录，不可省略
// /xxx 几乎不用
// d:/a/b 绝对路径几乎不用，因为项目一旦提交，路径就会发生错误
// 首位的 / 在这里表示当前文件模块所属磁盘根路径
// .js 后缀名可以省略
//require('./foo.js')

// 核心模块的本质也是\
// 核心模块文件已经被编译到二进制文件中，我们只需要按照名字来加载
//require('fs')
//require('http')

// 第三方模块
// 凡是第三方模块都必须用npm下载
// 使用的时候就可以通过 require('包名') 的方式来进行加载才可以使用
//不可能有一个第三方包和核心模块的名字是一样的
//既不是核心模块，也不是路径形式的模块
// 先找到当前文件所处目录中的 node_modules目录
//   node_modules/art-template/package.json 文件中的main属性
//   main 属性中就记录了 art-template 的入口模块
//	 然后加载使用这个第三方包
//	 实际上最终加载的还是文件

//	如果 package.json 文件不存在或者 main 指定的入口模块也没有
//	则 node 会主动找该目录下的 index.js
//	也就是说 index.js 会作为一个默认备选项

//	如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_modules 目录查找
//	如果上一级还没有，则继续往上上级查找

//	 如果知道当前此盘根目录还找不到，最后报错：
//		can not find module xxx
//  注意：一个项目有且只有一个 node_modules，放在项目根目录中，这样项目中所有子目录都能加载到第三方包
// 模块查找机制
//	优先从缓存加载
//	核心模块
//	路径形式的文件模块
//	第三方模块
//		node_modules/art-template/package.json main
//		index.js 备选项
//		进入上一级目录找 node_modules
//		按照这个规则依次往上找，直到此盘根目录还找不到，最后报错：can not find module xxx
//		一个项目有且只有一个 node_modules，放在项目根目录中，这样项目中所有子目录都能加载到第三方包
var template = require('art-template')