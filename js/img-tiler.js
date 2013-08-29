$(document).ready(function() {

	var ct1 = new fabric.Canvas("c1", {
		containerClass: "canvas"
	});
	var imgSrc = $("#img").attr("src");

	var w0 = ct1.getWidth();
	var h0 = ct1.getHeight();
	
	ct1.setBackgroundImage(imgSrc, function() {
	  ct1.renderAll();
	});
	
	$("#preview").click( function(){

		var ct2 = new fabric.StaticCanvas("c2");
		ct2.clear();

		var w1 = $("#img").width();
		var h1 = $("#img").height();
		var w2 = ct2.getWidth();
		var h2 = ct2.getHeight();

		var rows = $("#rows").val();
		var cols = $("#cols").val();
		
		var wstep1 = w1 / cols;
		var hstep1 = h1 / rows;

		var wstep2 = w2 / cols;
		var hstep2 = h2 / rows;

		var ofs = 5;

		
		var imgInstClip = new fabric.Image(img, {
			originX: "left",
			originY: "top",
			top: 0,
			left: 0,
			height: ct2.getHeight(),
			width: ct2.getWidth(),
			clipTo: function (ctx) {
				for (var i = 0; i <= cols; i++) {
					for (var j = 0; j <= rows; j++) {
						var l = (-ct2.getWidth()/2) + (i*wstep2) + ofs/2;
						var t = (-ct2.getHeight()/2) + (j*hstep2) + ofs/2;
			      		ctx.rect(l, t, wstep2-ofs, hstep2-ofs);
		    		}
				}
			}
		});
		ct2.add(imgInstClip).renderAll();
		//ct2.drawImage(img1, i*wstep1, j*hstep1, wstep1, hstep1, i*wstep2, j*hstep2, wstep2-ofs, hstep2-ofs);
	
		//ct2.renderAll();
	});

});
