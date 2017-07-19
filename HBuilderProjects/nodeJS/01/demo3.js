

//运行的这个js文件 当它退出（结束）的时候   使用了一个时间监听

process.on('exit',function(){		//回调函数 ===》异步
	console.log("我是退出的程序");
})
console.log("我是打印出来的程序");
