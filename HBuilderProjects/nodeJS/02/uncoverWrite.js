var fs=require("fs");
//appendFile    非覆盖式在末未追加
fs.appendFile("02.txt","123456,")


function uncoverCopy(oldfile,newfile){
	fs.readFile(oldfile,"utf-8",function(err,datas){
		fs.appendFile(newfile,datas,function(err){
			if(err) throw err;  //throw 抛出    中断当前的程序   抛出err  很容易造成程序崩溃    
//				如果我不想因为一个写入的代码让我的整个程序崩溃
//				那么console.log("你出错了");
			console.log("复制成功！");
		})
	})
}
module.exports=uncoverCopy;


//appendFile  只有一个参数   代表意思就是   err
//流氓性质       appendFile  写入文件  如果找不到写入的文件  ===》自己创建一个文件    然后写入
//流氓              如果第二个参数不是我要去写入的内容    
//           它不会去管第二个参数是不是我要写入的内容
//           只会认定第二个参数就是我要写入的内容