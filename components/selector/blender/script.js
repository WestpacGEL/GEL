(function ($, GEL) {
	var module = {};

	module.init = function () {
		$('[data-js="selector__version__"]').on(
			'click',
			'button[data-js="selector-optionBtn__version__"]',
			function (e) {
				var $this = $(this);
				var $input = $(e.delegateTarget).find('input[type="hidden"]');

				$('[data-js="selector-optionBtn__version__"]').attr('aria-pressed', 'false');
				$this.attr('aria-pressed', 'true');

				$input.val($this.data('value'));
			}
		);
	};

	GEL.selector = module;

	$(function () {
		GEL.selector.init();
	});
})(jQuery, GEL);
