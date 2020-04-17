$(function() {
	$('[data-js="alert-closebtn"]').on('click', function() {
		$(this)
			.closest('[data-js="alert"]')
			.fadeOut();
	});
});
