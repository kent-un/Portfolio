$(".slider").mousewheel(function(event, delta, deltaX, deltaY) {
		var o = '';
		if (deltaY > 0){
		                  $(".slider").animate({scrollLeft : '-=200'}, 'slow');
                                  }
		else if (deltaY < 0){
                          $(".slider").animate({scrollLeft :'+=200'}, 'slow');
				     }
						
	});