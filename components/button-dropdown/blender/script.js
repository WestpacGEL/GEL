$(function () {
	$('[data-js="buttonDropdown-btn__version__"]')
		.on('click', function () {
			var $panel = $(this).next('[data-js="buttonDropdown-panel__version__"]');
			var classes = $panel.attr('class').split(/\s+/);
			var baseClass = classes.find((el) => /panel$/.test(el));
			$panel.toggleClass(`${baseClass}-open`);
		})
		.keyup(function (event) {
			if (event.keyCode === 27) {
				var $panel = $(this).next('[data-js="buttonDropdown-panel__version__"]');
				var classes = $panel.attr('class').split(/\s+/);
				var baseClass = classes.find((el) => /panel$/.test(el));
				$panel.removeClass(`${baseClass}-open`);
			}
		});
});
