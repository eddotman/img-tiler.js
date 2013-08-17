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

		var w1 = $("#img1").width();
		var h1 = $("#img1").height();
		var w2 = $("#c1").width();
		var h2 = $("#c1").height();

		var rows = $("#rows").val();
		var cols = $("#cols").val();
		
		var wstep1 = w1 / cols;
		var hstep1 = h1 / rows;

		var wstep2 = w2 / cols;
		var hstep2 = h2 / rows;

		//ct2.drawImage(img1,0,0,w,h,0,0,w,h);

		for (var i = 0; i < cols; i++) {
			for (var j = 0; j < rows; j++) {
				ct2.drawImage(img1,i*hstep1,j*wstep1,(i+1)*hstep1,(j+1)*wstep1,i*hstep2+10,j*wstep2+10,(i+1)*hstep2+10,(j+1)*wstep2+10);
			}
		}

		$("#test").text(hstep1 + " " + wstep1 + " ");
		$("#test").append(hstep2 + " " + wstep2);

	});

});
