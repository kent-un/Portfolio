
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
		$('#hoverProg').css('display', 'flex');
		$('.modalHover').click(function(){
			$('#hoverProg').css('display', 'none');
		})
})
$('#proj').click(function(){
	$('#hoverProj').css('display', 'flex');
	$('.modalHover').click(function(){
		$('#hoverProj').css('display', 'none');
	})
})
$('#log').click(function(){
	$('#hoverLog').css('display', 'flex');
	$('.modalHover').click(function(){
		$('#hoverLog').css('display', 'none');
	})
})
$('#com').click(function(){
	$('#hoverCom').css('display', 'flex');
	$('.modalHover').click(function(){
		$('#hoverCom').css('display', 'none');
	})
})