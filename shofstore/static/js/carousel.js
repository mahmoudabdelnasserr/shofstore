"use strict";
$(document).ready(function(){
	
    // Activate Carousel 1
    var car1 = $(".container-fluid.withaddtocart.related.carousel.slide");
    car1.carousel();
    // Enable Carousel Controls
    $(".left1").on("click",function(e){
        car1.carousel("prev");
        e.preventDefault();
    });
    $(".right1").on("click",function(e){
        car1.carousel("next");
        e.preventDefault();
    });

    // Activate Carousel 2
    var car2 = $("#myCarousel2");
    car2.carousel();
    // Enable Carousel Controls

    $(".left2").on("click",function(e){
        car2.carousel("prev");
        e.preventDefault();
    });
    $(".right2").on("click",function(e){
        car2.carousel("next");
        e.preventDefault();
    });
});