"use strict";
$(document).ready(function(){
	$(".filter.linethrough").on("click",function(e){
		if($(this).attr("id")=="filter-office"){
				$("#myCarousel-chaires").siblings().fadeOut();
				setTimeout( function(){ 
					$("#myCarousel-chaires").fadeIn();
 				} , 400 );
		}else if($(this).attr("id")=="filter-living"){
				$("#myCarousel-living").siblings().fadeOut();
				setTimeout( function(){ 
					$("#myCarousel-living").fadeIn();
 				} , 400 );
		}else if($(this).attr("id")=="filter-storage"){
				$("#myCarousel-storage").siblings().fadeOut();
				setTimeout( function(){ 
					$("#myCarousel-storage").fadeIn();
 				} , 400 );
		}else if($(this).attr("id")=="filter-mattresses"){
				$("#myCarousel-mattresses").siblings().fadeOut();
				setTimeout( function(){ 
					$("#myCarousel-mattresses").fadeIn();
 				} , 400 );
		}else if($(this).attr("id")=="filter-interiors"){
				$("#myCarousel-interiors").siblings().fadeOut();
				setTimeout( function(){ 
					$("#myCarousel-interiors").fadeIn();
 				} , 400 );
		}else if($(this).attr("id")=="filter-decor"){
				$("#myCarousel-decor").siblings().fadeOut();
				setTimeout( function(){ 
					$("#myCarousel-decor").fadeIn();
 				} , 400 );

		}
		e.preventDefault();
	});
});