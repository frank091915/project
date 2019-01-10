define(["jquery","template","sum"],function($,tem){
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
			$("#pay-template").load("/html/component/payModle.html", () => {
				resolve();
			})
		}).then(() => {
			console.log(JSON.parse($.cookie("cart")));
			let data=JSON.parse($.cookie("pay"));
			let html =tem("payModle-temp",{list:data});
			$("#pay-template").html(html);
			//算总价
			let totals=0;
			$(data).each(function(i,item){
				totals+=Number(item.amount)*Number(item.price);
			});
			$("#pay-totals").html("¥&nbsp"+ totals.toFixed(2)); 
			$("#pay-btn").on("click",function(e){
				e.preventDefault();
			})
			
			
			
			
			
		})
		
		
		
		
	}
	return new Item();
})