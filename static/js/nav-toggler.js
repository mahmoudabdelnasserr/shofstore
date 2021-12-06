"use strict";
$(document).ready(function(){
	
	var social = $("#menu-social");
	var overlay = $("#overlay");
	var sidenav = $(".sidenav");

	$("#nav-toggle > a").on("click",function(){
		document.getElementById("mySidenav").style.width = "300px";
		sidenav.css("overflow","auto");
		social.fadeToggle(300 , "swing");
		overlay.fadeToggle(400);
	});

	$("a.closebtn").on("click",function(){
		document.getElementById("mySidenav").style.width = "0";
		sidenav.css("overflow","hidden");
		social.fadeToggle(300 , "swing");
		overlay.fadeToggle(400);
	});

	$("#overlay").on("click",function(){
		document.getElementById("mySidenav").style.width = "0";
		sidenav.css("overflow","hidden");
		social.fadeToggle(300 , "swing");
		overlay.fadeToggle(400);
	});
});

