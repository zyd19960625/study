

//fs   模块===》 引入
var fs=require("fs");

function read(){
	fs.readFile("01.txt","utf-8",function(err,data){      //异步的操作
		//readFile  用来读取文件的(目标文件，编码格式，回调函数)
		//第一个参数 ===》储存     报错的         可以理解为一个容器       如没有错误   是为null而不是undefined
		//第二个参数 ===》储存     读取文件的结果的
		//回调函数   参数：（err：当出现错误的时候，data：当我读取成功的之后得到的结果）
		console.log(err);
		if (err) {
			throw err;  //将错误抛出
		}else{
			console.log(data);
		}
	})
}
//module.exports=read;
exports.readFile1=read;