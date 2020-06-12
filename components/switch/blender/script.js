$(function () {
	$('[data-js="switch__version__"]').on('change', function () {
		var $toggle = $(this).siblings('[data-js="switch-toggle__version__"]');
		var className = $toggle.attr('class');
		var classBits = className.split('-checked');

		if (classBits.length > 1) {
			$toggle.attr('class', classBits.join(''));
		} else {
			$toggle.attr('class', className.replace('toggle', 'toggle-checked'));
		}
	});
});
