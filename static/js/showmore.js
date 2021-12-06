"use strict";
$(document).ready(function(){
	$("#showmoretrigger").on("click",function(e){
		$(this).animate({ opacity : 0 },500);
		$(".showmore").slideDown(500);
		e.preventDefault();
	});
});