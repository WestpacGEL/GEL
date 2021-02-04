(function ($, GEL) {
	var module = {};

	module.init = function progressRopeInit() {
		$('[data-js="progressRope-group-list__version__"]:not([data-open])').hide();

		$('[data-js="progressRope-group-btn__version__"]').on('click', function () {
			var $button = $(this);
			var $group = $button.closest('[data-js="progressRope-group__version__"]');
			var $list = $group.find('[data-js="progressRope-group-list__version__"]');

			if ($button.attr('aria-expanded') === 'true') {
				$button.attr('aria-expanded', 'false');
				$list.attr('aria-hidden', 'true').removeAttr('data-open').hide('fast');
			} else {
				var $rope = $group.closest('[data-js="progressRope__version__"]');
				$rope.find('[data-js="progressRope-group-btn__version__"]').attr('aria-expanded', 'false');
				$rope
					.find('[data-js="progressRope-group-list__version__"]')
					.attr('aria-hidden', 'true')
					.removeAttr('data-open')
					.hide('fast');

				$button.attr('aria-expanded', 'true');
				$list.attr('aria-hidden', 'false').attr('data-open', '').show(200);
			}
		});
	};

	GEL.progressRope = module;

	$(function () {
		GEL.progressRope.init();
	});
})(jQuery, GEL);
