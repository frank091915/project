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
			//小计
			let smallSum=$(".small-sum");
			smallSum.each(function(i,item){
				let amount= $(item).parent().prev().children().html();
				let price=$(item).parent().prev().prev().children().html().slice(7);
				console.log(amount,price);
				$(this).html("¥&nbsp;" +(amount*price).toFixed(2));
			});
			
			
			
			
			
		})
		
		
		
		
	}
	return new Item();
})