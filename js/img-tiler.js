$(document).ready(function() {

	var c1=document.getElementById("c1");
	var ct1=c1.getContext("2d");
	var img1=new Image();

	img1.onload = function() {
		ct1.drawImage(img1,0,0,500,400);	
	}
	img1.src = "img/space.jpg";
	
	$("#preview").click( function(){

		var c2=document.getElementById("c2");
		var ct2=c2.getContext("2d");

		var w1 = $("#img1").width();
		var h1 = $("#img1").height();
		var w2 = $("#c2").width();
		var h2 = $("#c2").height();

		ct2.clearRect(0,0,w1,w2);

		var rows = $("#rows").val();
		var cols = $("#cols").val();
		
		var wstep1 = w1 / cols;
		var hstep1 = h1 / rows;

		var wstep2 = w2 / cols;
		var hstep2 = h2 / rows;

		var ofs = 5;

		for (var i = 0; i <= rows; i++) {
			for (var j = 0; j <= cols; j++) {
				ct2.drawImage(img1, i*wstep1, j*hstep1, wstep1, hstep1, i*wstep2, j*hstep2, wstep2-ofs, hstep2-ofs);
			}
		}
	});

});
