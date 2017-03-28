$(document).ready(function(){
	$('.nav-links a').on('click', function() {
		var section = $(this).attr('href');
		var speed = 1000;
		$('html, body').animate( { scrollTop: $(section).offset().top }, speed );
		return false;
	});

	$('.grid').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 200
	});
});