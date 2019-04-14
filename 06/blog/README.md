 - path 路径操作模块
  -参考文档：https://nodejs.org/dist/latest-v11.x/docs/api/path.html
 	+ path.basename    # 获取一个路径的文件名（默认包含扩展名）
 	+ path.dirname    # 获取一个路径中的目录部分
 	+ path.extname    # 获取路径中的扩展名部分
 	+ path.parse    #  把路径转换为对象：
 		+ root 根路径、dir 目录、base 包含后缀名的文件名、ext后缀名、name 不包含后缀名的文件名
	+ path.join    #  当你需要进行路径拼接的时候，推荐使用这个方法
	+ path.isAbsolute  # 判断一个路径是否是绝对路径

- path 模块
-  `__dirname` 和 `__filename` 两个属性
	+ **动态** 获取当前文件或者文件所处目录的绝对路径
	+ 用来解决文件操作路径的相对路径问题
	+ 因为在文件按操作中，相对路径对于执行`node` 命令所得目录
	+ 所以为了尽量避免这个问题，都建议文件操作的相对路径都转为：**动态获取目录**
	+ 方式：`path.jion(__dirname, '文件名')`
- art-template 模板引擎高级语法
	+ include
	+ extend
	+ block
- 表单同步提交和异步提交
	+ 以前没有 ajax 都是这么干的，甚至有些直接就是渲染了提示信息出来了
- Express 中配置使用 express-session 插件

 - Node 中的其他成员
 	