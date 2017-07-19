var fs=require('fs');
var streams={
	readStream:function(file){
		var rs=fs.createReadStream(file);
		var data="";
		rs.setEncoding("utf-8");
		rs.on("data",function(chunk){
			data+=chunk;
		});
		rs.on("end",function(){
			console.log(data);
		})
	},
	writeStream:function(file,content){
		var ws=fs.createWriteStream(file);
		ws.on('open',function(){
			console.log("写入的开关已打开");
		});
		ws.write(content);
		ws.end();
		ws.on("finish",function(){
			console.log("已经写入成功");
		})
	},
	copyStream:function(oldfile,newfile){
		var rs=fs.createReadStream(oldfile);
		var ws=fs.createWriteStream(newfile);
		rs.on("data",function(chunk){
			ws.write(chunk);
		});
		rs.on("end",function(){
			ws.end();
			ws.on("finish",function(){
				console.log("复制完成");
			})
		});
		
	}
}
module.exports=streams;