define(["jquery","template","sum"],function($,tem,sum){
	function Item(){
		
	}
	Item.prototype.init=function(url){
//		$("#pay-template").load("/html/component/payModle.html");
//
//		console.log(JSON.parse($.cookie("cart")));
//		let data=JSON.parse($.cookie("cart"));
//		let html =tem("payModle-temp",{list:data});
//		$("#pay-template").html(html);
		
		
		
		
		
		
		new Promise((resolve, reject) => {
			$("#cart-template").load("/html/component/cartModle.html", () => {
				resolve();
			})
		}).then(() => {
		let data=JSON.parse($.cookie("cart"));
			let html =tem("cartModle-temp",{list:data});
			$("#cart-template").html(html);
			
			
			//购物车操作
			//给全选按钮绑定事件
//			$(".singleCheck").prop("checked",$("#allCheck").prop("checked"));
//			$("#allCheck").prop("checked",true);
			$("#allCheck").on("click",function(){
				$(".singleCheck").prop("checked",$("#allCheck").prop("checked"));
			
			});
			$("#allCheck").trigger("click");
			//给单选按钮添加事件
			$(".singleCheck").on("click",function(){
				let checkedAmount=$(".singleCheck:checked").length,
					checkedLen=$(".singleCheck").length;
				if(checkedAmount==checkedLen){
					$("#allCheck").prop("checked","checked");
				}else{
					$("#allCheck").prop("checked",false);
				}

			});
			//先存sum的cookie
			let payCookie=$.cookie("cart");
			$.cookie("pay",payCookie,{path:"/"});
			console.log(JSON.parse($.cookie("pay")))
			
			//进购物车页面时，默认全部选中所有商品。
			sum.init();
			
			
			//删除按钮
			$(".delete-btn").on('click',function(){
				
				$(this).parent().parent().remove();
				
			})



			
			
		})
		
		
		
		
	}
	return new Item();
})
