var fs=require("fs");
var data='';  //使用流的方式读取文件的时候   用来收集每次读取的内容的容器
//创建一个可读流
var readStream=fs.createReadStream("01.txt");
readStream.setEncoding("utf-8");
readStream.on("data",function(chunk){      //监听   data  事件  ==》有数据流入里面
	data+=chunk;   //chunk  流入的数据
})
readStream.on("end",function(){           //end    代表流里面没有数据了   ===》   数据读取完成的时候
	console.log("数据读取完毕");
	console.log(data);
})
console.log('代码执行完毕')



var data="";
var liu=fs.createReadStream("../01/01.txt");
liu.on("data",function(chunk){
	data+=chunk;
})
liu.on("end",function(){
	console.log(data);
})
