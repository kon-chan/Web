$(function(){



	$('#top-btn').click(function(){
		$('html,body').animate({
			'scrollTop':0
		},'slow')
	});

	$('#info-btn').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#info').offset().top
		},'slow')
	});

	$('#special-btn').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#special').offset().top
		},'slow')
	});

	$('#rab-btn').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#rab').offset().top
		},'slow')
	});

	$('#concept-btn').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#event').offset().top
		},'slow')
	});

	$('#team-btn').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#team').offset().top
		},'slow')
	});

	$('#access-btn').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#map').offset().top
		},'slow')
	});

	$('#caution-btn').click(function(){
		$('html,body').animate({
			scrollTop:-70 + $('#caution').offset().top
		},'slow')
	});

});