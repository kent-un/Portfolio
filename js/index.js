
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