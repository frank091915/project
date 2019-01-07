require.config({
	baseUrl:"/",
	
	paths:{
		"jquery":"/libs/jquery/jquery-1.11.3",
		"cookie":"/libs/jquery/jquery-plugins/jquery.cookie",
		"header":"/js/component/header",
		"footer":"/js/component/footer",
		"bootstrap":"/libs/bootstrap/js/bootstrap",
	},
	shim:{
		"cookie":{
			deps:["jquery"]	
		},
		"bootstrap":{
			deps:["jquery"]	
		},
	}
})
