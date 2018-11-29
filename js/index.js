
var activated= false;

$('#burgerButton').click(function(){
	if(!activated){
	$('#hamburger').css('display', 'block');
	activated=true;}
	else{$('#hamburger').css('display', 'none');
	activated=false;
	}
})
$('#prog').click(function(){
		$("#hoverProg").fadeIn();
		$('#hoverProg').css('display', 'flex');
		$('.modalHover').click(function(){
			$("#hoverProg").fadeOut();
			$('#hoverProg').css('display', 'none');
		})
})
$('#proj').click(function(){
	$("#hoverProj").fadeIn();
	$('#hoverProj').css('display', 'flex');
	$('.modalHover').click(function(){
		$("#hoverProj").fadeOut();
		$('#hoverProj').css('display', 'none');
	})
})
$('#log').click(function(){
	$("#hoverLog").fadeIn();
	$('#hoverLog').css('display', 'flex');
	$('.modalHover').click(function(){
		$("#hoverLog").fadeOut();
		$('#hoverLog').css('display', 'none');
	})
})
$('#com').click(function(){
	$("#hoverCom").fadeIn();
	$('#hoverCom').css('display', 'flex');
	$('.modalHover').click(function(){
		$("#hoverCom").fadeOut();
		$('#hoverCom').css('display', 'none');
	})
})
var filterVal = 'blur(0px)';
$('.one').mouseenter(function (){
	$('.projects').not(document.getElementById('one')).css('filter', 'blur(5px)');
})
$('.one').mouseleave(function (){
	$('.projects').css('filter', filterVal);
})
//
$('.two').mouseenter(function (){
	$('.projects').not(document.getElementById('two')).css('filter', 'blur(5px)');
})
$('.two').mouseleave(function (){
	$('.projects').css('filter', filterVal);
})
//
$('.three').mouseenter(function (){
	$('.projects').not(document.getElementById('three')).css('filter', 'blur(5px)');
})
$('.three').mouseleave(function (){
	$('.projects').css('filter', filterVal);
})
//
$('.four').mouseenter(function (){
	$('.projects').not(document.getElementById('four')).css('filter', 'blur(5px)');
})
$('.four').mouseleave(function (){
	$('.projects').css('filter', filterVal);
})
//
$('.five').mouseenter(function (){
	$('.projects').not(document.getElementById('five')).css('filter', 'blur(5px)');
})
$('.five').mouseleave(function (){
	$('.projects').css('filter', filterVal);
})
//
$('.six').mouseenter(function (){
	$('.projects').not(document.getElementById('six')).css('filter', 'blur(5px)');
})
$('.six').mouseleave(function (){
	$('.projects').css('filter', filterVal);
})


$(function Sliding() {
	$(".slide1").swipe( {
	  //Generic swipe handler for all directions
	  swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
		$(".slide-radio2").prop("checked", true);  
	  }
	});
	$(".slide2").swipe( {
		//Generic swipe handler for all directions
		swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
		  $(".slide-radio3").prop("checked", true);  
		},
		swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
			$(".slide-radio1").prop("checked", true);  
		}
	  });
	$(".slide3").swipe( {
		//Generic swipe handler for all directions
		swipeLeft:function(event, direction, distance, duration, fingerCount, fingerData) {
		  $(".slide-radio4").prop("checked", true);  
		},
		swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
			$(".slide-radio2").prop("checked", true);  
		}
	});
	$(".slide4").swipe( {
		//Generic swipe handler for all directions
		swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
		  $(".slide-radio3").prop("checked", true);  
		}
	  });
  });