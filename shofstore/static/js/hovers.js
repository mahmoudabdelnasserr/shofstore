"use strict";
$(document).ready(function(){
	$(".row.icons > .col-sm-1").hover(function(){
		$(this).find(".iconcaption").animate({ opacity : 1});
		$(this).css("background","#fff");
	},function(){
		$(this).find(".iconcaption").animate({ opacity : 0});
		$(this).css("background","url('assets/images/latest-news/icon-bg.jpg')");
	});

	$(".row.icons > .col-sm-2").hover(function(){
		$(this).find(".iconcaption").animate({opacity : 1 });
	},function(){
		$(this).find(".iconcaption").animate({opacity : 0 });
	});

	$(".withaddtocart .col-sm-3").hover(function(){
		$(this).find(".addtocart").fadeIn();
	},function(){
		$(this).find(".addtocart").fadeOut(50);
	});

	$(".withaddtocart .col-sm-6").hover(function(){
		$(this).find(".addtocart").fadeIn();
	},function(){
		$(this).find(".addtocart").fadeOut(50);
	});

	
	$(".withaddtocart .col-sm-2").hover(function(){
		$(this).find(".addtocart").fadeIn();
	},function(){
		$(this).find(".addtocart").fadeOut(50);
	});
});