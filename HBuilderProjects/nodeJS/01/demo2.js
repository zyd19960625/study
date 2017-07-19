var a=0;
//function func(){
//	console.log("Hello"+a++);
//}
//var t=setInterval(func,1000);  

function time(){
	setInterval(function func(){
		console.log("Hello"+a++);
	},1000);
}

//module.exports=time;

exports.t=time;