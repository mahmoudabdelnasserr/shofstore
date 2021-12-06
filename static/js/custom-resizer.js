"use strict";
window.onload = function(){
	var imgheight = $(".marged-cont.withaddtocart .col-sm-3 > a > img").height();
	$(".marged-cont.withaddtocart .col-sm-6 > a > img").height(imgheight);
}