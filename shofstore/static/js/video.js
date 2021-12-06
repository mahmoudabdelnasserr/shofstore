"use strict";
$(document).ready(function(){
	$("#playvideo").on("click",function(){
		$(".jumbotron.latest.centered").html('<iframe width="100%" height="500px" src="https://www.youtube.com/embed/Q9NxvZt_nfo?autoplay=1" frameborder="0" allowfullscreen></iframe>');
	});
});