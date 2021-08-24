(function ($, GEL) {
	var module = {};

	module.open = function formCheckOpen($trigger) {
		if (!$trigger.length) return;

		var $panel = $trigger.prev('[data-js="formCheckReveal-panel__version__"]');

		$trigger.css('display', 'none').attr({ 'aria-expanded': 'true', 'aria-hidden': 'true' });
		$panel.css('display', 'inline-block').attr('aria-hidden', 'false');
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
