var fn={
	fn1:function(){
		console.log("这是第一个函数");
	},
	fn2:function(){
		console.log("今天有点热");
	},
	name:"大傻帽",
	fun:function(){
		console.log(this.name);
	}
}

//exports.fn=fn;

module.exports=fn;
