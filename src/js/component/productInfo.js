require(["../require-config"],function(){
	require(["jquery","url","header","footer","fdj"],function($,url){
		
		$.ajax({
			url:url.apiUrl+"/singleProduct",
			type:"get",
			success:function(res){
				if(res.res_code==1){
					console.log(res);
					$(".singleProduct").attr({src:res.res_body.img});
					$(".productTitle").html(res.res_body.title);
					$(".price").html(res.res_body.price);
					$(".product-description").html(res.res_body.description);
				}

			}
		});
		
		
	})
})