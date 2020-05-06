$(function() {
	$('[data-js="alert-closeBtn__version__"]').on('click', function() {
		$(this)
			.closest('[data-js="alert__version__"]')
			.fadeOut();
	});
});
