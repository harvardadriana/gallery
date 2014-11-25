$(document).ready(function(){

    //    	alert('You can paint your own painting!');
	
	// add picture of canvas 1
	$('#canvas1').drawImage({
			source: 'img/otherartists/circlesandsquares.jpg',
			x: 150,
			y: 150
	});

	// add picture of canvas 3
	$('#canvas3').drawImage({
			source: 'img/otherartists/squares.jpg',
			x: 150,
			y: 150
	});

	// changing background of canvas 2
	$('#backgrounds').click(function(){
		var chooseimg = $('#backgrounds').val();
		switch(chooseimg){
			case 'white':
				chooseimg = "img/backgrounds/white.jpg";
				break;
			case 'orange':
				chooseimg = "img/backgrounds/orange.jpg";
				break;
			case 'purple':
				chooseimg = "img/backgrounds/purple.jpg";
				break;
			default: 
				chooseimg = "";
		} 
			
		$('#canvas2').drawImage({
			source: chooseimg,
			x: 150,
			y: 150
		});
	});

	// drawing circles in canvas 2
	$('#addCircles').click(function(){

		var xLocation = $('#xLocation').val();
		var yLocation = $('#yLocation').val();
		var circleRadius = $('#circleRadius').val();

		$('#canvas2').drawArc({
			strokeStyle: '#fff',
			strokeWidth: 5,
			x: xLocation,
			y: yLocation,
			radius: circleRadius,
			fillStyle: 'red'
		});
	});

	// drawing rectangles in canvas 2
	$('#addRectangles').click(function(){

		var xLocationRec = $('#xLocationRec').val();
		var yLocationRec = $('#yLocationRec').val();
		var widthRec = $('#widthRec').val();
		var heightRec = $('#heightRec').val();

		$('#canvas2').drawRect({
			strokeStyle: '#000',
			strokeWidth: 4,
			x: xLocationRec,
			y: yLocationRec,
			width: widthRec,
			height: heightRec,
			fillStyle: 'darkBlue'
		});
	});

	// add stars
	$('#addStars').click(function(){

		var xStars = $('#xStars').val();
		var yStars = $('#yStars').val();

		$('#canvas2').drawPolygon({
			fillStyle: 'yellow',
			shadowColor: 'red',
			shadowBlur: 7,
			x: xStars,
			y: yStars,
			radius: 50,
			sides: 5,
			concavity: 0.5
		})
		.drawPolygon({
			fillStyle: 'blue',
			x: xStars-40,
			y: yStars-40,
			radius: 20,
			sides: 5,
			concavity: 0.5
		});
	});

	//  add text
	$('#finish').click(function(){

		var painter = $('#painter').val();

		$('#canvas2').drawText({
			fillStyle: 'yellow',
			strokeStyle: '#000',
			strokeWidth: 4,
			x: 200,
			y: 285,
			fontSize: '2em',
			fontFamily: 'Impact, sans-serif',
			text: painter
		});
	});





	// clear canvas 2
	$('#clear').click(function(){
		$('#canvas2').clearCanvas();
	});



});