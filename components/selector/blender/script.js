(function ($, GEL) {
	var module = {};

	module.init = function () {
		$('[data-js="selector-optionBtn__version__"]').on('click', function () {
			var $this = $(this);
			var value = $this.data('value');

			$('[data-js="selector-optionBtn__version__"]').attr('aria-pressed', 'false');
			$this.attr('aria-pressed', 'true');

			$this.closest('[data-js="selector__version__"]').find('input[type="hidden"]').val(value);
		});
	};

	GEL.selector = module;

	$(function () {
		GEL.selector.init();
	});
})(jQuery, GEL);
