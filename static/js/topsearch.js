"use strict";
$(document).ready(function() {
	$('li.withpopup').on('mouseenter', function(){
		$(this).siblings().find(".popup").hide();
		$(this).find(".popup").fadeIn();
	});
	$('.popup').on('mouseleave', function(){
       	$(this).fadeOut();
	});
	
	$('#cart').on('mouseenter', function(){
		$("#cartpopup").fadeIn(200);
	});
	$('#cartpopup').on('mouseleave', function(){
       	$(this).fadeOut(200);
	});
});