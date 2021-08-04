(function ($, GEL) {
	var module = {};

	module.open = function formCheckOpen($trigger) {
		if (!$trigger.length) return;

		var $formCheck = $trigger.closest('[data-js="formCheck__version__"]');
		if (!$formCheck.length) return;

		var $panel = $trigger.prev('[data-js="formCheckReveal-panel__version__"]');
		var classes = $formCheck.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /formCheck$/.test(el);
		})[0];
		var openClass = baseClass + '-open';

		$trigger.attr('aria-expanded', 'true');
		$panel.attr('aria-hidden', 'false');
		$formCheck.addClass(openClass);
	};

	module.init = function () {
		$('[data-js="formCheckReveal-trigger__version__"]').on('click', function () {
			GEL.formCheck.open($(this));
		});
	};

	GEL.formCheck = module;

	$(function () {
		GEL.formCheck.init();
	});
})(jQuery, GEL);
