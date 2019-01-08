require(["../require-config"],function(){
	require(["jquery","item","url","header","footer"],function($,item,url){
		item.init(url.apiUrl+"/list");//把请求参数传到itemjs模块

})
	})