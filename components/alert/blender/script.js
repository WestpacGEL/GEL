$(function() {
	$('[data-js="alert-closeBtn"]').on('click', function() {
		$(this)
			.closest('[data-js="alert"]')
			.fadeOut();
	});
});
