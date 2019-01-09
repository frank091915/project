define(["jquery","template"],function($,tem){
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
			console.log(JSON.parse($.cookie("cart")));
			let data=JSON.parse($.cookie("cart"));
			let html =tem("cartModle-temp",{list:data});
			$("#cart-template").html(html);
			
			
			//购物车操作
			//给全选按钮绑定事件
			$("#allCheck").on("click",function(){
				$(".singleCheck").prop("checked",$("#allCheck").prop("checked"));
			
			});
			//给单选按钮添加事件
			$(".singleCheck").on("click",function(){
				let checkedAmount=$(".singleCheck:checked").length,
					checkedLen=$(".singleCheck").length;
				if(checkedAmount==checkedLen){
					$("#allCheck").prop("checked","checked");
				}

			});
			
			//删除按钮
			$(".delete-btn").on('click',function(){
				$(this).parent().parent().remove();
			})



			
			
		})
		
		
		
		
	}
	return new Item();
})
