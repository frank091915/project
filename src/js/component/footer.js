define(["jquery"],function(){
	class Footer{
		constructor(){
			this.init();
		}
		init(){
			$("footer").load("/html/component/footer.html",function(){
				$(".footer-erweima").hide();
				//二维码的隐藏与显现
				$(".fw-top-logo").hover(function(){
					$(".footer-erweima").stop().show("slow");	
				},
				function(){
					$(".footer-erweima").stop().hide("slow");
				})
				})
			}
			
		}
	
	return new Footer();//怎么会在构造函数中用new运算符呢？
})
