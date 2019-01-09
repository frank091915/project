require.config({
	baseUrl:"/",
	
	paths:{
		"jquery":"/libs/jquery/jquery-1.11.3",
		"cookie":"/libs/jquery/jquery-plugins/jquery.cookie",
		"header":"/js/component/header",
		"footer":"/js/component/footer",
		"bootstrap":"/libs/bootstrap/js/bootstrap",
		"demo":"/libs/jquery/jquery-plugins/demo",
		"validate":"/libs/jquery/jquery-plugins/validate-1.14.0.min",
		"lunbo":"/js/component/lunbo",
		"item":"/js/component/item",
		"url":"/js/component/url",
		"template":"/libs/template-web",
		"fdj":"/libs/jquery/jquery-plugins/xq_bigimg",
		"addCart":"/js/component/addCart"
	},
	shim:{
		"cookie":{
			deps:["jquery"]	
		},
		"bootstrap":{
			deps:["jquery"]	
		},
		"validate":{
			deps:["jquery"]	
		},
		"demo":{
			deps:["jquery"]	
		},
		"fdj":{
			deps:["jquery"]
		}
	}
})
