$(document).ready(function() {
	$('.element').hover(
		function() {
			$(this).addClass("hover");
		}, function() {
			$(this).removeClass("hover");
		}
	);

	// $('.lie').on('click', function() {
	// 	$('.element').removeClass("truth1");
	// 	var lieText = "Wrong Answer"
	// 	$(this).addClass("lie1");
	// 	$('p').html(lieText).removeClass("greenText");
	// 	$('p').html(lieText).addClass("redText");

	// });

	// $('.truth').on('click', function() {
	// 	$('.element').removeClass("truth1 lie1");
	// 	var correctText = "Correct"
	// 	$(this).addClass("truth1");
	// 	$('p').html(correctText).removeClass("redText");
	// 	$('p').html(correctText).addClass("greenText");
			
	// })

	$('.lie').on('click', function() {
		$('.element').removeClass("truth1");
		var lieText = "Correct"
		$(this).addClass("lie1");
		$('p').html(lieText).removeClass("redText");
		$('p').html(lieText).addClass("greenText");

	});

	$('.truth').on('click', function() {
		$('.element').removeClass("truth1 lie1");
		var correctText = "Wrong Answer"
		$(this).addClass("truth1");
		$('p').html(correctText).removeClass("greenText");
		$('p').html(correctText).addClass("redText");
			
	})
	
	$('button').on('click', function() {
		
	})

});