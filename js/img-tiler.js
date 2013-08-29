$(document).ready(function() {

	var ct1 = new fabric.Canvas("c1");
	var cropper = new fabric.Rect({
		originX: "left", //coordinate base is at top-left
		originY: "top",
		width:ct1.getWidth()/2,
		height:ct1.getHeight()/2,
		top:ct1.getHeight()/4,
		left:ct1.getWidth()/4,
		opacity: 0.3,
		hasRotatingPoint:false,
		lockRotation:true,
		lockUniScaling:true,
		fill:"white"
	});

	ct1.add(cropper);

	var imgSrc = $("#img").attr("src");

	ct1.setBackgroundImage(imgSrc, function() {
	  ct1.renderAll();
	});
	
	$("#preview").click( function(){

		var ct2 = new fabric.StaticCanvas("c2");
		ct2.clear();
		cropper.saveState();

		var w = ct2.getWidth();
		var h = ct2.getHeight();

		var rows = $("#rows").val();
		var cols = $("#cols").val();

		var ofs = 5; //spacing between tiles
		
		var imgInstClip = new fabric.Image("img");

		//Compute relative cropping
		var cropTop = cropper.top / ct1.getHeight(); //lol @ var name
		var cropLeft = cropper.left / ct1.getWidth();
		var cropW = cropper.getWidth() / ct1.getWidth();
		var cropH = cropper.getHeight() / ct1.getHeight();

		var nTop = -(cropTop * ct2.getHeight() * 2);
		var nLeft = -(cropLeft * ct2.getWidth() * 2);
		var nHeight = ct2.getHeight() / cropH;
		var nWidth = ct2.getWidth() / cropW;

		var wstep = w / cols;
		var hstep = h / rows;

		imgInstClip.set({
			originX: "left", //coordinate base is at top-left
			originY: "top",
			top: nTop,
			left: nLeft,
			height: nHeight,
			width: nWidth,
			clipTo: function (ctx) { //clip image to a grid of spaced rectangles
				for (var i = 0; i <= cols; i++) {
					for (var j = 0; j <= rows; j++) {
						var l = (-nWidth/2) + (i*wstep) + ofs/2 - nLeft;
						var t = (-nHeight/2) + (j*hstep) + ofs/2 - nTop;
						var w = (wstep-ofs);
						var h = (hstep-ofs);
			      		ctx.rect(l, t, w, h);
		    		}
				}
			}
		});

		ct2.add(imgInstClip).renderAll();
	});
});
