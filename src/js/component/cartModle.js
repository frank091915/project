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

			console.log($.cookie("cart"));			
			let data=JSON.parse($.cookie("cart"));
			let html =tem("cartModle-temp",{list:data});
			$("#cart-template").html(html);
			
			
			//购物车操作
			//给全选按钮绑定事件
//			$(".singleCheck").prop("checked",$("#allCheck").prop("checked"));
//			$("#allCheck").prop("checked",true);
			$("#allCheck").on("click",function(){
				$(".singleCheck").prop("checked",$("#allCheck").prop("checked"));
				sum.init("cart");
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
				sum.init("cart");
			});
			//先存sum的cookie
			
			
			
			let payCookie=$.cookie("cart");
			$.cookie("pay",payCookie,{path:"/"});
			
			
//			??
			
			//进购物车页面时，默认全部选中所有商品。
			sum.init("cart");
			
			
			//删除按钮
			$(".delete-btn").on('click',function(){
				let deleteId = $(this).prop("id");

				let cartCookie =JSON.parse($.cookie("cart"));
				//修改cookie
				let arr=[];
				$(cartCookie).each(function(i,item){
//					console.log(item);
					if(item.id==deleteId){
						console.log(i);
						cartCookie.splice(i,1);
						console.log(cartCookie);
					}
				});
				$(this).parent().parent().remove();
				$.cookie("cart",JSON.stringify(cartCookie),{path:"/"});
				console.log(JSON.parse($.cookie("cart")));
				sum.init("cart");
				
			});
			//改变数量
			$(".cart-quantity-box-number").change(function(){
				let _this=this;
				let changeId= $(this).parent().next().next().children().prop("id");
					console.log(changeId);
				let cartCookie =JSON.parse($.cookie("cart"));
				//修改cookie
				$(cartCookie).each(function(i,item){
//					console.log(item);
					if(item.id==changeId){
						item.amount=$(_this).val();
						console.log(_this);
					}
				});
				console.log(cartCookie);
				$.cookie("cart",JSON.stringify(cartCookie),{path:"/"});
				sum.init("cart");
				
			});

			//转到支付页之前，把选中的商品信息存好
			$("#cart-submit").on("click",function(){

				//就在cartcookie的基础上选择。
				let checkedId=[];
				let payCookie =JSON.parse($.cookie("cart"));
				let payArr=[];
				//要得到购物车中所选商品的id
				$(".singleCheck").each(function(i,item){
					if($(item).prop("checked")){
						checkedId.push($(item).parent().next().children().prop("id"));
					}
					
				});
				//找到选中商品的id后，开始生成结算cookie
				let cartCookie=JSON.parse($.cookie("cart"));
				$(cartCookie).each(function(i,item){
					$(checkedId).each(function(i,id){
						if(item.id==id){
							payArr.push(item);
						}
					})
//					console.log(item.id+"");
//					console.log($(checkedId).index(item.id+""));
				});
				//正式存结算页的cookiele
				$.cookie("pay",JSON.stringify(payArr),{path:"/"});
				console.log(JSON.parse($.cookie("pay")));
				if($.cookie("cart")){
					location.href="/html/component/pay.html";	
				}else{
					alert("小老弟，啥都还没选呢");
				}

			})


			
			
		})
		
		
		
		
	}
	return new Item();
})
