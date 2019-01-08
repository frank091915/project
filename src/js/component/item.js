define(["jquery","template"],function($,tem){
	function Item(){
		
	}
	Item.prototype.init=function(url){
		$("#list-template").load("/html/component/item.html");
		$.ajax({

			url:url,
			type:"get",
			success:function(res){
				if(res.res_code==1){
					let data=res.res_body.data;
					let html =tem("list-temp",{list:data})
					$("#list-template").html(html);
				}

			}
		});
	}
	return new Item();
})
