$(document).ready( function () {

	// create a wrapper around native canvas element (with id="c")
	var canvas = new fabric.Canvas('c');

	// create a rectangle object
	var rect = new fabric.Rect({
	  left: 200,
	  top: 200,
	  fill: 'gray',
	  width: 200,
	  height: 200,
	  opacity: 0.3,
	});

	// "add" rectangle onto canvas
	canvas.add(rect);

	canvas.setBackgroundImage('space.jpg', canvas.renderAll.bind(canvas));

});