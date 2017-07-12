


//		使用angularjs实现数据变换
angular.module("app",["ng"]).controller("Mc1",function($http,$scope){
	$http.get("js/data.json").success(function(data){
		var datas=data.goods;
		$scope.arr=[];	
		
		//封装一个函数，后面直接调用
		Goods=function(){
			i=2;
			$scope.arr=arrhuoguo.slice(0,2);
			$scope.hid1=true;
			$scope.hid2=false;
			$scope.next=function(){
				$scope.hid1=false;
				$scope.arr=arrhuoguo.slice(i,i+2);
				i+=2;
				if (i>=arrhuoguo.length) {
					$scope.hid2=true;
				}else{
					$scope.hid2=false;
				}
			}
			$scope.prev=function(){
				$scope.hid2=false;
				i-=2;
				$scope.arr=arrhuoguo.slice(i-2,i);
				if (i==2) {
					$scope.hid1=true;
				}else{
					$scope.hid1=false;
				}
			}
		}
		
		var arrhuoguo=datas.slice(0);
		Goods();
		$scope.all=function(){
			arrhuoguo=datas.slice(0);
			Goods();
		}	
		$scope.huoguo=function(){
			arrhuoguo=datas.slice(0,15);
			Goods();
		}
		$scope.difangcai=function(){
			arrhuoguo=datas.slice(15,25);
			Goods();
		}
		$scope.xican=function(){
			arrhuoguo=datas.slice(25,32);
			Goods();
		}
		$scope.kuaican=function(){
			arrhuoguo=datas.slice(32,50);
			Goods();
		}
		$scope.tese=function(){
			arrhuoguo=datas.slice(12,30);
			Goods();
		}
		$scope.tuijian=function(){
			arrhuoguo=datas.slice(28,40);
			Goods();
		}
		$scope.jingpin=function(){
			arrhuoguo=datas.slice(30,50);
			Goods();
		}
	})
	
})
$(document).on("click",".ck",function(){
	var zh=$(this).find(".liang").html();
	var zhi=parseInt(zh);
	if ($(this).find("i").hasClass("ckl")) {
		$(this).find(".liang").html(zhi-1);
		$(this).find("i").removeClass("ckl")
	}else{
		$(this).find("i").addClass("ckl")
		$(this).find(".liang").html(zhi+1);
	}
	
})



