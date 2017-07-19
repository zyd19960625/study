var fs=require("fs");
var fsWays={
	readFile1:function(file){
		fs.readFile(file,"utf-8",function(err,data){
			if(err){
				console.log(err);
			}else{
				console.log(data);
			}
		})
	},
	writeFile1:function(file,content){
		fs.writeFile(file,content,function(err){
			if(err) throw err;
			console.log("覆盖式写入成功！")
		})
	},
	writeFile2:function(file,content){
		fs.writeFile(file,content,{flag:"a+"},function(err){
			if(err) throw err;
			console.log("非覆盖式写入成功！")
		})
	},
	appendFile1:function(file,content){
		fs.appendFile(file,content,function(err){
			if(err) throw err;
			console.log("非覆盖式写入成功！")
		})
	},
	copyFile1:function(oldfile,newfile){
		fs.readFile(oldfile,"utf-8",function(err,data){
			fs.writeFile(newfile,data,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("覆盖式复制成功");
				}
				
			})
		})
	},
	copyFile2:function(oldfile,newfile){
		fs.readFile(oldfile,"utf-8",function(err,data){
			fs.appendFile(newfile,data,function(err){
				if(err){
					console.log(err);
				}else{
					console.log("非覆盖式复制成功");
				}
				
			})
		})
	},
	unlink1:function(file){
		fs.unlink(file,function(err){
			if(err) throw err;
			console.log("成功删除文件");
		})
	},
	rename1:function(file,newfile){
		fs.rename(file,newfile,function(err){
			if(err) throw err;
			console.log("成功修改名字");
		})
	},
	mkdir1:function(file){
		fs.mkdir(file)
		console.log("成功创建文件夹");
	},
	exists1:function(file){
		fs.exists(file,function(result){
			if(result==true){
				console.log("该文件存在");
				
			}else{
				console.log("该文件不存在");
			}
		})
	},
	stat1:function(file){
		fs.stat(file,function(err,data){
			if(err){
				console.log(err);
			}else{
				if(data.isDirectory()){
					console.log("这是个文件夹");
				}else{
					console.log("这是个文件");
				}
			}
		})
	}
}
module.exports=fsWays;
