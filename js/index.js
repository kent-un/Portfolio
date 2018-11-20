$(".slider").mousewheel(function(event, delta, deltaX, deltaY) {
		var o = '';
		if (deltaY > 0){
		                  $(".slider").animate({scrollLeft : '-=200'}, 'slow');
                                  }
		else if (deltaY < 0){
                          $(".slider").animate({scrollLeft :'+=200'}, 'slow');
				     }
						
	});
var activated= false;
$('#burgerButton').click(function(){
	if(!activated){
	$('#hamburger').css('display', 'block');
	$('#burgerButton').css('background', 'white');
	activated=true;}
	else{$('#hamburger').css('display', 'none');
	$('#burgerButton').css('background', 'black');
	activated=false;
	}
})
