$(function () {
	$('[data-js="progressRope-group-btn__version__"]').on('click', function () {
		$(this)
			.closest('[data-js="progressRope-group__version__"]')
			.find('[data-js="progressRope-group-list__version__"]')
			.slideToggle('fast');
	});
});
