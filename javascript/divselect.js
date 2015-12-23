jQuery.func = {
		block : function(a){
				a.find('cite').click(function(){
				var cur = a.children("ul");
				$(".divselect ul").not(cur).hide();
				if(cur.css("display")=="none"){
					cur.show();
				}else{
					cur.hide();
				}
				$.func.selected(a);
			});
			return;
		},
		slide : function(a){
				a.find('cite').click(function(){
					var cur = a.children("ul");
					$(".divselect ul").not(cur).slideUp(100);
					if(cur.css("display")=="none"){
						cur.slideDown(100);
					}else{
						cur.slideUp(100);
					}
					$.func.selected(a);
				});
				return false;
		},
		selected:function(a){
				var $a = a.find('ul li a');				
				var cite = a.find("cite");
				$a.click(function(){
					var obj = $(this).clone();
					var sid = obj.attr('selectid');
					cite.html(obj);
					cite.attr("selectid",sid);
					a.find('ul').css("display","none");
				});
				return false;
		}
	}
	$.fn.hello = function(){
		this.show = function(a){
			switch(a){
				case 1:
						$.func.block(this);
						break;
				case 2:
						$.func.slide(this);
						break;
				//default:
			}
		}
		return this;
	}