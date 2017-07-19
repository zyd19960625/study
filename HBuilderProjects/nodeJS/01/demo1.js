console.log("英雄不问出处，流氓不问岁数")

console.log(__dirname);//文件所在文件夹路径

console.log(__filename);//文件路径


var a=6;
function fun(){
	console.log(a);
	a+=1;
}
var time=setTimeout(fun,0);//先打印下面的console.log()值再执行定时器
console.log(1);
console.log(2);

