$(document).ready(function() {
	$('.phyllum').each(function() {
		$(this).click(function() {
			$(this).toggleClass('move-up');
			$currentDiv = $(this);
			$('.phyllum').not('.move-up').toggleClass('move-out');
		});
	});
});