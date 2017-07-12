window.onload=function(){
			document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";
			window.addEventListener("resize",function(){
			    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";	
			})
		}
		
		//		底部菜单隐藏与显示
		var foot_li=document.getElementsByClassName('footer1')[0].getElementsByTagName('li');
		var foot_chanpin=document.getElementsByClassName('footer1')[0].getElementsByClassName('caipin-hid');
		for(var i=0;i<foot_li.length;i++){
			foot_li[i].index=i;
			foot_li[i].onclick=function(ev){
				for(j=0;j<foot_chanpin.length;j++){
					foot_chanpin[j].style.display="none";
				}
				foot_chanpin[this.index-1].style.display="block";
				ev.stopPropagation();//阻止冒泡
			}
		}
		$("body").click(function(){
			$('.caipin-hid').css({"display":"none"});
		})
		
		$('.beVip').click(function(){
			$('.vip').css({"display":"block"})
		})
		$(".yinc").click(function(){
			$('.vip').css({"display":"none"})
		})
		
		//		使用angularjs实现数据变换
		angular.module("app",["ng","ngRoute"]).config(function($routeProvider){
			$routeProvider.when("/viewcaipin",{
				templateUrl:"temp/viewcaipin.html"
			}).when("/contentxq",{
				templateUrl:"temp/contentxq.html"
			}).when("/jifenduihuan",{
				templateUrl:"temp/jifenduihuan.html"
			}).when("/huiyuanzhongxin",{
				templateUrl:"temp/huiyuanzhongxin.html"
			}).when("/xiugaimima",{
				templateUrl:"temp/xiugaimima.html"
			}).when("/dingzhuo",{
				templateUrl:"temp/dingzhuo.html"
			}).when("/jifenjilu",{
				templateUrl:"temp/jifenjilu.html"
			}).otherwise({
				redirectTo:"/viewcaipin"
			})
		}).controller("xiugaimm",function($location,$scope){
			$scope.huihyzx=function(){
				$location.path("/huiyuanzhongxin");
			}
		}).controller("footCtrl",function($location,$scope){
			$scope.jump=function(){
				$location.path("/huiyuanzhongxin");
			}
		}).controller("Mc1",function($http,$scope){
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
			
			
			
		}).controller("conCtrl",function($scope,$routeParams){
			$scope.aid=$routeParams.mid;
			$scope.aprice=$routeParams.mprice;
			$scope.aimag=$routeParams.mimag;
			$scope.aVIP=$routeParams.mVIP;
			$scope.atime=$routeParams.mtime;
			$scope.ajifen=$routeParams.mjifen;
			$scope.atedian=$routeParams.mtedian;
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
		
		$(document).on("click",".navtab li",function(){
			$(this).siblings().removeClass("navtab1");
			$(this).addClass("navtab1");
		})
		
		$(document).on("click","body",function(){
			$(".caipin-hhh").css({"display":"none"});
		})
		
		$(document).on("click",".tijiao",function(){
			var time=new Date().toLocaleString();
			var val1=$('.pjname').val();
			var val2=$('.pjval').val();
			$(".pjcon").append("<p class='vvv'><i class='iconfont icon-pinglun'></i>"+"  "+val1+"    "+time+"</p><p class='vvv'>"+val2+"</p>")
		})
		
		$(document).on("click",".tj",function(){
			if ($(".newpassword").val()!="") {
					if($(".nowpassword").val()==$(".hiddd").val() && $(".newpassword").val()==$(".qrnewpassword").val()){
					var vvll=$(".hidddd").val();
					localStorage.setItem(vvll,$(".newpassword").val());
					$(".changetrue").css({"display":"block"})
				}
			}
			
		})
		
		$(".footer1 ul li").click(function(){
			$(".caipin-hhh").css({"display":"none"})
		})
		
		$(".caipin-hi1111").click(function(ev){
			var lujing="http://127.0.0.1:8020/HBuilderProjects/shibanyu/ng-view111.html#/viewcaipin";
			if (location.href==lujing) {
				$(".caipin-hhh").css({"color":"red"})
				ev.stopPropagation();
			}
		})
