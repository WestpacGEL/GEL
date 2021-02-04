(function ($, GEL) {
	var module = {};

	module.toggle = function popoverToggle(popover, mode) {
		var $popover = popover instanceof jQuery ? popover : $('#' + popover);
		if (!$popover.length) return;
		mode = typeof mode !== 'undefined' ? mode : 'toggle';

		var $panel = $popover.next('[data-js="popover-panel__version__"]');
		if (!$panel.length) return;

		var classes = $panel.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /panel$/.test(el);
		})[0];
		var openClass = baseClass + '-open';
		var isOpen = $panel.hasClass(openClass);

		if (mode === 'open' || (mode === 'toggle' && !isOpen)) {
			$popover.attr('aria-expanded', 'true');
			$panel.addClass(openClass);
		} else if (mode === 'close' || (mode === 'toggle' && isOpen)) {
			$popover.attr('aria-expanded', 'false');
			$panel.removeClass(openClass);
			$popover.trigger('focus');
		}
	};

	module.init = function popoverInit() {
		$('[data-js="popover__version__"]')
			.on('click', function () {
				GEL.popover.toggle($(this));
			})
			.parent()
			.on('keyup', function (e) {
				if (e.key === 'Escape' || e.keyCode === 27) {
					GELPopover.toggle($(this).find('[data-js="popover__version__"]'), 'close');
				}
			});

		$('[data-js="popover-closeBtn__version__"]').on('click', function () {
			GEL.popover.toggle(
				$(this)
					.closest('[data-js="popover-panel__version__"]')
					.prev('[data-js="popover__version__"]'),
				'close'
			);
		});
	};

	GEL.popover = module;

	$(function () {
		GEL.popover.init();
	});
})(jQuery, GEL);
