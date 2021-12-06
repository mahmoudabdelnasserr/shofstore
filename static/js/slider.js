"use strict";
$(document).ready(function(){
	$(".rslides").responsiveSlides({
		prevText: "<img src='http://placehold.it/23x40' alt='Previous' style='width:25%;height:auto;'><span class='bolder'>PREV</span>", 
		nextText: "<span class='bolder'>NEXT</span><img src='http://placehold.it/23x40' alt='Next' style='width:25%;height:auto;'>",         
		nav: true,             
		maxwidth: "1920px"           
	});
});
