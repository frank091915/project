require(["../require-config"],function(){
	require(["jquery","header","footer","bootstrap","cookie"],function(){
		$('#myModal').modal();
		
		$("#demo").on("submit",function(e){
			//首先阻止默认事件
			e.preventDefault();
			$.ajax({
				url:"http://localhost/api/v1/signIn.php",
				type:"post",
				data:{
					username:$("#username").val(),
					password:$("#password").val()
				},
				success:function(res){
					
					if(res.res_code){
					//是否记住我
					if($("#rememberMe").checked){
						//把用户名和用户id存cookie
						$.cookie(
							"userinfo", 
							JSON.stringify({
								id:res.res_body.id, 
								name:res.res_body.username
							}),
							{expires:3,path:"/"}
						);
					}else{
						//把用户名和用户id存cookie
						$.cookie(
							"userinfo", 
							JSON.stringify({
								id:res.res_body.id, 
								name:res.res_body.username
							}),
							{path:"/"}
						);
					}
					
					if(confirm("登录成功，去首页")){
						window.location.href = "/index.html";
					}
				}
				console.log(res);	
					
				},
				dataType:"json"
			});
		})
	})
})