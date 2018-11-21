
var activated= false;
$('#burgerButton').on('tap',function(){
	if(!activated){
	$('#hamburger').css('display', 'block');
	$('#burgerButton').css('background', 'white');
	activated=true;}
	else{$('#hamburger').css('display', 'none');
	$('#burgerButton').css('background', 'black');
	activated=false;
	}
})
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


