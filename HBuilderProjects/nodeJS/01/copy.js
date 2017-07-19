var fs=require("fs");


fs.readFile("01.txt","utf-8",function(err,datas){
	fs.writeFile("02.txt",datas,function(err,data){
		if (err) {
			console.log(err);
		}else{
			console.log("写入成功");
		}
	})
})
