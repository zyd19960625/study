

function fn1(){   //这个方法我想在其他文件里面使用的
	console.log("我是模块里面的内容1");
}
//fn1();

function fn2(){   //这个方法我想在其他文件里面使用的
	console.log("我是模块里面的内容2");
}

module.exports=fn1;

