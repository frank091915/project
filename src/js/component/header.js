define(["jquery","cookie"],function(){
	class Header{
		constructor(){
			this.init();
		}
		//初始化，加载header的html
		init(){
			var _this=this;
			$("header").load("/html/component/header.html",function(){
				$(".hide_wraper").hide();
				let li=$(".header_wraper2 ul li");
				li.hover(function(e){
					$(this).children(".hide_wraper").stop().show("slow");
				},
					function(){
						$(this).children(".hide_wraper").stop().hide("slow");
					});
					_this.show()	//！！！在插入header后执行这个方法,需要等header渲染完成以后才进行相关操作
			});

		}
		show(){
			this.hello();
			$("#show-ul").hide();
			$("#header-form").on("submit",function(e){
					e.preventDefault();
					//利用表格的序列化，得到key=value的字符串
					var str=$("#header-form").serialize();
					//Jsonp要传递一个回调函数
					$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&"+str,
					function(res){
						var content=res.s;
						$("#show-ul").empty().show().addClass("ac");
						content.forEach(function(item,i){
							$("<li>").html(item).addClass("li").appendTo($("#show-ul"));
						})
					});
				});
				$("#show-ul").mouseleave(function(){
					$(this).hide("slow");
				})
				
				//给li添加点击事件
				$("#show-ul").on("click","li",function(){
					//给input赋值
					$("input").val($(this).html());
					//点击完以后，让ul消失
					$("#show-ul").hide("slow");
				})
		}
		hello(){
			if($.cookie("userinfo")){
				$("#hello").html(JSON.parse($.cookie("userinfo")).name);
			}
		}
		
		
	}
	return new Header();
})