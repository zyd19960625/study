


//关于文件状态




/*
 
 * 
 * 1、确定文件是否存在        exists
 * 2、获取文件信息       （  状态 ===》是个文件还是文件夹  ）
 * 
 * */

var fs=require("fs");
fs.exists("fs2.js",function(result){
	if(result) {
		console.log("文件存在")
		fs.stat("fs2.js",function(err,data){
			//如果目标不存在    err
			//如果不报错     返回一个文件的信息   data   （stats   文件的所有信息）
//			console.log(data)
			if(data.isDirectory()){
				//idDirectory()   他是nodeJS封装的一个方法  用来判断是否为文件夹
				console.log("这是个文件夹");
			}else{
				console.log("这是个文件")
			}
		})
	}
	//result   得到的结果     文件存在true   文件不存在false   
})
