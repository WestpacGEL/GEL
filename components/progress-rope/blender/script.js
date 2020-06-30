$(function () {
	$('[data-js="group-button__version__"]').on('click', function () {
		$(this)
			.closest('[data-js="group__version__"]')
			.find('[data-js="group-list__version__"]')
			.slideToggle('fast');
	});
});
