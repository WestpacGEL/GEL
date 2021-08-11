(function ($, GEL) {
	var module = {};

	module.toggle = function collapsibleToggle($trigger, mode) {
		if (!$trigger.length) return;
		mode = typeof mode !== 'undefined' ? mode : 'toggle';

		var $collapsible = $trigger.closest('[data-js="collapsible__version__"]');
		if (!$collapsible.length) return;

		var $content = $trigger.next('[data-js="collapsible-content__version__"]');
		var classes = $collapsible.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /collapsible$/.test(el);
		})[0];
		var openClass = baseClass + '-open';
		var isOpen = $collapsible.hasClass(openClass);

		if (mode === 'open' || (mode === 'toggle' && !isOpen)) {
			$trigger.attr('aria-expanded', 'true');
			$content.attr('aria-hidden', 'false').css('opacity', 0).fadeTo(150, 1, 'linear');
			$collapsible.addClass(openClass);
		} else if (mode === 'close' || (mode === 'toggle' && isOpen)) {
			$trigger.attr('aria-expanded', 'false');
			$content.attr('aria-hidden', 'true').fadeTo(150, 0, 'linear', function () {
				$(this).css({ display: '', opacity: '' });
			});
			$collapsible.removeClass(openClass);
			$trigger.trigger('focus');
		}
	};

	module.init = function () {
		$('[data-js="collapsible-trigger__version__"]')
			.on('click', function () {
				GEL.collapsible.toggle($(this));
			})
			.parent()
			.on('keyup', function (e) {
				if (e.key === 'Escape' || e.keyCode === 27) {
					GEL.collapsible.toggle(
						$(this).find('[data-js="collapsible-trigger__version__"]'),
						'close'
					);
				}
			});
	};

	GEL.collapsible = module;

	$(function () {
		GEL.collapsible.init();
	});
})(jQuery, GEL);
