define(["jquery","cookie"],function($){
	function Sum(){
		
	}
	Sum.prototype.init=function(cookie){
		let payCookie=JSON.parse($.cookie(cookie+""));
		var totals=0;
		$(payCookie).each(function(i,item){
//			console.log(item);
			//判断该商品是否选中
			let checked=$("#"+item.id).parent().prev().children().prop("checked");
			if(checked){
				totals+=Number(item.price)*Number(item.amount);
			}
		});
//		console.log(totals);
		$("#totals").html("¥&nbsp"+totals.toFixed(2));
		
		
	}
	return new Sum();
})