



var fs=require("fs");

fs.readFile("../01.txt","utf-8",function(err,data){   //异步
	if (err) {
		throw err;
	}else{
		console.log(data);
	}
})


console.log(__dirname);
console.log(__filename);