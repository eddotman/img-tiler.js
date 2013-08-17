$(document).ready(function() {

	var c1=document.getElementById("c1");
	var ct1=c1.getContext("2d");
	var img1=document.getElementById("img1");
	ct1.drawImage(img1,0,0,500,400);

	$("#test").html("test1");

	$("#preview").click( function(){

		$("#test").html("test2");

		var c2=document.getElementById("c2");
		var ct2=c2.getContext("2d");

		var w1 = $("#c1").width();
		var h1 = $("#c1").height();
		var rows = $("#rows").val();
		var cols = $("#cols").val();

		var wstep = w1 / cols;
		var hstep = h1 / rows;

		//ct2.drawImage(img1,0,0,w,h,0,0,w,h);

		for (var i = 0; i < rows; i++) {
			for (var j = 0; j < cols; j++) {
				ct2.drawImage(img1,i*hstep,j*wstep,(i+1)*hstep,(j+1)*hstep,i*hstep*1.1,j*wstep*1.1,(i+1)*hstep,(j+1)*hstep);
			}
		}

		$("#test").text(hstep + " " + wstep);

	});

});
