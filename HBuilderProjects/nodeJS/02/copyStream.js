var fs=require("fs");
var rs=fs.createReadStream("01.txt");
var ws=fs.createWriteStream("03.txt");
rs.on("data",function(chunk){
	ws.write(chunk);
});
rs.on("end",function(){
	ws.end("完成",function(){
		console.log("数据写入完毕");
	});
	console.log("数据复制完毕");
})
