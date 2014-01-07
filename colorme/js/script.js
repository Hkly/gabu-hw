$(document).ready(function(){

	for (var i = 1; i <= 2000; i++){
		$('#color_area').append('<div class = "small_box" />');
	}
	
	var currColor;

	$("#erase").click(function(){
		currColor = "white";
	});
	
	$("#red").click(function(){
		currColor = "red";
	});
	
	$("#orange").click(function(){
		currColor = "orange";
	});
	
	$("#yellow").click(function(){
		currColor = "yellow";
	});
	
	$("#green").click(function(){
		currColor = "green";
	});
	
	$("#blue").click(function(){
		currColor = "blue";
	});
	
	$("#purple").click(function(){
		currColor = "purple";
	});
    
	$(".small_box").mouseover(function(){
		$( this ).removeClass().addClass("small_box " + currColor);
		});
  
  $("#clear").click(function(){
    $(".small_box").removeClass().addClass("small_box");
	currColor = "white";
	});	
		
});
