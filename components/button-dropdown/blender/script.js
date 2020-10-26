function GELButtonDropdownToggle($el, mode) {
	mode = typeof mode !== 'undefined' ? mode : 'toggle';

	var $panel = $el.next('[data-js="buttonDropdown-panel__version__"]');
	var classes = $panel.attr('class').split(/\s+/);
	var baseClass = classes.filter(function (el) {
		return /panel$/.test(el);
	})[0];
	var openClass = baseClass + '-open';

	if (mode === 'open') {
		$el.attr('aria-expanded', 'true');
		$panel.addClass(openClass);
	} else if (mode === 'close') {
		$el.attr('aria-expanded', 'false');
		$panel.removeClass(openClass);
	} else {
		$el.attr('aria-expanded', function (_, val) {
			return val === 'true' ? 'false' : 'true';
		});
		$panel.toggleClass(openClass);
	}
}

$(function () {
	$('[data-js="buttonDropdown-btn__version__"]')
		.on('click', function () {
			GELButtonDropdownToggle($(this));
		})
		.parent()
		.on('keyup', function (e) {
			if (e.keyCode === 27) {
				GELButtonDropdownToggle($(this).find('[data-js="buttonDropdown-btn__version__"]'), 'close');
			}
		});
});
