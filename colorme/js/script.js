$(document).ready(function(){

	for (var i = 1; i <= 2000; i++){
		$('#color_area').append('<div class = "small_box" />');
	}
	
	var currColor;

	$("#erase").click(function(){
		currColor = "white";
	});
	
	$(".swatch").click(function(){
		currColor = $(this).text();
	});

	$("#clear").click(function(){
		$(".small_box").css("background-color", "white");
		currColor = "white";
	});	

	
	$(".small_box").mousedown(function(){
		$(".small_box").on("mouseover", this, function(){
			$( this ).css("background-color", currColor);
		});
	});

	$(".small_box").mouseup(function(){
		$(".small_box").off("mouseover");
	});


		
});
