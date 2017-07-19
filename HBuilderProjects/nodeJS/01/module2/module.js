

function fn1(){
	console.log("你好1");
}

function fn2(){
	console.log("你好2");
}

function fn3(){
	console.log("你好3");
}
//暴露     module.exports

exports.say1=fn1;
exports.say2=fn2;
exports.say3=fn3;

//使用的是exports进行的暴露   给它起了个名字

//功能相同

//区别     暴露的结构不一样   替换   赋值
