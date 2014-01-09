$(document).ready(function(){

	for (var i = 1; i <= 4536; i++){
		$('#color_area').append('<div class = "small_box" />');
	}
	
	$(".swatch").each(function(){
		$( this ).css("background-color", $(this).text()).empty();
	});
	
	
	var currColor;
	
	$(".swatch").click(function(){
		currColor = $(this).css("background-color");
	});

	$("#erase").click(function(){
		currColor = "white";
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
