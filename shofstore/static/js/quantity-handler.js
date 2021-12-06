"use strict";
$(document).ready(function(){
	$(".quantity > a.minus").on("click", function(e){
		var elem = $(this).parent().find("span");
		var value = parseInt(elem.html());
		if(value>1){
			value--;
			elem.html(value); 
			}
		e.preventDefault();
	});


	$(".quantity > a.plus").on("click", function(e){
		var elem = $(this).parent().find("span");
		var value = parseInt(elem.html());
		value++;
		elem.html(value); 
		e.preventDefault();
	});
});