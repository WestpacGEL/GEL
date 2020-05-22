$(function () {
	$('[data-js="buttonDropdown-btn__version__"]')
		.on('click', function () {
			var $panel = $(this).next('[data-js="buttonDropdown-panel__version__"]');
			var className = $panel.attr('class');
			var classBits = className.split('-open');

			if (classBits.length > 1) {
				$panel.attr('class', classBits.join(''));
			} else {
				$panel.attr('class', className + '-open');
			}
		})
		.keyup(function (event) {
			if (event.keyCode === 27) {
				var $panel = $(this).next('[data-js="buttonDropdown-panel__version__"]');
				$panel.attr('class', $panel.attr('class').split('-open').join(''));
			}
		});
});
