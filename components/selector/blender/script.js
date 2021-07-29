(function ($, GEL) {
	var module = {};

	module.init = function () {
		$('button[data-js="selector-optionBtn__version__"]').on('click', function () {
			var $this = $(this);
			var $selector = $this.closest('[data-js="selector__version__"]');
			var $input = $selector.find('input[type="hidden"]');

			$selector.find('[data-js="selector-optionBtn__version__"]').attr('aria-pressed', 'false');
			$this.attr('aria-pressed', 'true');

			$input.val($this.data('value'));
		});
	};

	GEL.selector = module;

	$(function () {
		GEL.selector.init();
	});
})(jQuery, GEL);
