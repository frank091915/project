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
			$("#pay-template").load("/html/component/payModle.html", () => {
				resolve();
			})
		}).then(() => {
			console.log(JSON.parse($.cookie("cart")));
			let data=JSON.parse($.cookie("cart"));
			let html =tem("payModle-temp",{list:data});
			$("#pay-template").html(html);
		})
		
		
		
		
	}
	return new Item();
})