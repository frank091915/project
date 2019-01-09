require(["../require-config"],function(){
	require(["jquery","url","addCart","header","footer","fdj"],function($,url,addCart){
		
		$.ajax({
			url:url.apiUrl+"/singleProduct",
			type:"get",
			success:function(res){
				if(res.res_code==1){
					console.log(res);
					$(".singleProduct").attr({src:res.res_body.img});
					$(".productTitle").html(res.res_body.title);
					$(".product-price").html(res.res_body.price);
					$(".product-description").html(res.res_body.description);
				};
				
				//ajax为异步请求，后续操作应在其回调函数中操作。
				addCart.init();
			}
		});
		
		
	})
})