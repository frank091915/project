define(["jquery","cookie"],function($){
	function AddCart(){

	}
	AddCart.prototype.init=function(){
		this.add_cart=$(".add-to-cart-btn");
		this.qty_add=$(".qty-add");
		this.qty_cut=$(".qty-cut");
		this.qty_input=$(".qty-input");
		this.click();
	}
	AddCart.prototype.click=function(e){
		var _this=this;
		//给按钮添加功能
		//数量加
		this.qty_add.on("click",function(){
			_this.amount=_this.qty_input.val();
			_this.qty_input.val(((Number(_this.amount)+1)+"")); 
		});
		//数量减
		this.qty_cut.on("click",function(){
			_this.amount=_this.qty_input.val();
			let amount=(Number(_this.amount)-1)<=1?1:(Number(_this.amount)-1);
			_this.qty_input.val((amount+"")); 
		});
		//购物车按钮来了
		this.add_cart.on("click",function(){
			//获取id（location.search中获取）、数量（amount-input的value）、价格（从api相应内容中获取）、图片路径
			let cart_obj={},
				cart_arr=[];
			cart_obj.id=window.location.search.slice(4);
			cart_obj.price=$(".product-price")[0].innerHTML;
			cart_obj.src=$(".singleProduct").attr("src");
			cart_obj.amount=_this.qty_input.val();
			console.log(cart_obj);
			//判断cookie中是否有值。
			if($.cookie("cart")===undefined){
				cart_arr.push(cart_obj);
				console.log(cart_arr);
			}else{
				//将先前的信息放进arr中
				cart_arr=JSON.parse($.cookie("cart"));
				//判断现在添加的商品是否已包含在cookie中，有的话就加amount，没有加push进arr
				let flag=true;//里个flag，默认值为true，如果cart_obj的id存在cart_arr中，id++；否则push进cart_arr中。
				cart_arr.forEach(function(item,i){
					if(item.id==cart_obj.id){
						item.id++;
						flag=false;
					}
				});
				if(flag===false){
					cart_arr.push(cart_obj);
				}
				
			}
			//将cart_arr存入cookie
			$.cookie("cart",JSON.stringify(cart_arr),{path:"/"});
			console.log(JSON.parse($.cookie("cart")));
			//添加以后，提醒用户
			if(confirm("添加成功，去结算？")){
				window.location.href="/html/component/pay.html";
			}
		
			
		})
		
	}
	return new AddCart();
})