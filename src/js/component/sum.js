define(["jquery","cookie"],function($){
	function Sum(){
		
	}
	Sum.prototype.init=function(){
		let payCooke=$.cookie("pay");
	}
	return new Sum();
})