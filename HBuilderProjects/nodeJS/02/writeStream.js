var fs=require("fs");
var writeStream=fs.createWriteStream("02.txt");
writeStream.on("open",function(){
	console.log("流的水龙头已经打开");
});
writeStream.write("我要好好学习了","utf-8");
writeStream.end("end",function(){
	console.log("写入成功")
});    //没有数据的时候   写完了  关闭水龙头
//监听事件   finish
writeStream.on("finish",function(){     //数据流不存在了
	console.log("水龙头已经关闭");     
});
