function GELPopoverToggle($el, mode) {
	mode = typeof mode !== 'undefined' ? mode : 'toggle';

	var $panel = $el.next('[data-js="popover-panel__version__"]');
	var classes = $panel.attr('class').split(/\s+/);
	var baseClass = classes.filter(function (el) {
		return /panel$/.test(el);
	})[0];
	var openClass = baseClass + '-open';
	var isOpen = $panel.hasClass(openClass);

	if (mode === 'open' || (mode === 'toggle' && !isOpen)) {
		$el.attr('aria-expanded', 'true');
		$panel.addClass(openClass);
	} else if (mode === 'close' || (mode === 'toggle' && isOpen)) {
		$el.attr('aria-expanded', 'false');
		$panel.removeClass(openClass);
		$el.trigger('focus');
	}
}

$(function () {
	$('[data-js="popover__version__"]')
		.on('click', function () {
			GELPopoverToggle($(this));
		})
		.parent()
		.on('keyup', function (e) {
			if (e.keyCode === 27) {
				GELPopoverToggle($(this).find('[data-js="popover__version__"]'), 'close');
			}
		});

	$('[data-js="popover-closeBtn__version__"]').on('click', function () {
		GELPopoverToggle(
			$(this)
				.closest('[data-js="popover-panel__version__"]')
				.prev('[data-js="popover__version__"]'),
			'close'
		);
	});
});
