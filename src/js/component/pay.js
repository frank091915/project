require(["../require-config"],function(){
	require(["jquery","payModle","cookie","header","footer"],function($,payModle){
		payModle.init();
		//操作按钮
		//全选按钮
		let allCheck=$("#allCheck");
		$("#username").on("blur",function(){
			var uPattern = /^[a-zA-Z0-9_]{3,16}$/ ;
			//输出 true
			
			if(!uPattern.test($(this).val())){
				alert("小老弟，认真一点嘛");
				$(this).val("");
			}
		});
		$("#e-mail").on("blur",function(){
			var uPattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ ;
			//输出 true
			
			if(!uPattern.test($(this).val())){
				alert("小老弟，认真一点嘛");
				$(this).val("");
			}
		});
		$("#phone-number").on("blur",function(){
			var uPattern =/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/ ;
			//输出 true
			
			if(!uPattern.test($(this).val())){
				alert("小老弟，认真一点嘛");
				$(this).val("");
			}
		});

		
		
	})
})