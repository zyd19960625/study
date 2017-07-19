var fs=require("fs");
//var rs=fs.createReadStream("main.js");
//rs.setEncoding("utf-8");
//var data="";
//rs.on("data",function(chunk){
//	data+=chunk;
//})
//rs.on("end",function(){
//	console.log(data);
//	console.log("读取完成")
//})


//var ws=fs.createWriteStream("01.txt");
//ws.on("open",function(){
//	
//});
//ws.write("123456","utf-8");
//ws.end();
//ws.on("finish",function(){
//	console.log("写入完成")
//})

var rs=fs.createReadStream("02.txt");
rs.setEncoding("utf-8");
var ws=fs.createWriteStream("遇见你.avi");
rs.on('data',function(chunk){
	ws.write(chunk,"utf-8");
})
rs.on("end",function(){
	ws.end();
	ws.on("finish",function(){
		console.log("复制成功")
	})
})
