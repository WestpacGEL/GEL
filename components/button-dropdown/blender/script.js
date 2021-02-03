var GELButtonDropdown = (function () {
	var module = {};

	module.toggle = function buttonDropdownToggle($btn, mode) {
		if (!$btn.length) return;
		mode = typeof mode !== 'undefined' ? mode : 'toggle';

		var $panel = $btn.next('[data-js="buttonDropdown-panel__version__"]');
		if (!$panel.length) return;

		var classes = $panel.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /panel$/.test(el);
		})[0];
		var openClass = baseClass + '-open';
		var isOpen = $panel.hasClass(openClass);

		if (mode === 'open' || (mode === 'toggle' && !isOpen)) {
			$btn.attr('aria-expanded', 'true');
			$panel.addClass(openClass);
		} else if (mode === 'close' || (mode === 'toggle' && isOpen)) {
			$btn.attr('aria-expanded', 'false');
			$panel.removeClass(openClass);
			$btn.trigger('focus');
		}
	};

	module.init = function buttonDropdownInit() {
		$('[data-js="buttonDropdown-btn__version__"]')
			.on('click', function () {
				GELButtonDropdown.toggle($(this));
			})
			.parent()
			.on('keyup', function (e) {
				if (e.key === 'Escape' || e.keyCode === 27) {
					GELButtonDropdown.toggle(
						$(this).find('[data-js="buttonDropdown-btn__version__"]'),
						'close'
					);
				}
			});
	};

	return module;
})();

$(function () {
	GELButtonDropdown.init();
});
