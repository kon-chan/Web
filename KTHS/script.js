$(function(){



	$('#top-btn').click(function(){
		$('html,body').animate({
			'scrollTop':0
		},'slow')
	});

	$('#motto').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#school-motto').offset().top
		},'slow')
	});

	$('#classes').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#school-intro').offset().top
		},'slow')
	});

	$('#accsess').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#school-accsess').offset().top
		},'slow')
	});

});