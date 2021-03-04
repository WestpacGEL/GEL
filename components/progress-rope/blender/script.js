(function ($, GEL) {
	var module = {};

	module.toggle = function progressRopeToggle(groupList, mode) {
		mode = typeof mode !== 'undefined' ? mode : 'toggle';

		var $groupList = groupList instanceof jQuery ? groupList : $('#' + groupList);
		if (!$groupList.length) return;

		var $progressRope = $groupList.closest('[data-js="progressRope__version__"]');
		if (!$progressRope.length) return;

		var $groupBtn = $(
			'[data-js="progressRope-groupBtn__version__"][aria-controls="' + $groupList.attr('id') + '"]'
		);
		if (!$groupBtn.length) return;

		var classes = $groupList.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /groupList$/.test(el);
		})[0];
		var groupListShowClass = baseClass + '-show';

		switch (mode) {
			case 'open':
				/* $progressRope
					.find('[data-js="progressRope-groupBtn__version__"]')
					.attr('aria-expanded', 'false');
				$progressRope
					.find('[data-js="progressRope-groupList__version__"]')
					.attr('aria-hidden', 'true')
					.removeAttr('data-open')
					.hide('fast'); */

				$groupBtn.attr('aria-expanded', 'true');
				$groupList.attr('aria-hidden', 'false').slideDown(200, function () {
					$(this).addClass(groupListShowClass);
				});
				// .attr('data-open', '')
				break;
			case 'close':
				$groupBtn.attr('aria-expanded', 'false');
				$groupList.attr('aria-hidden', 'true').slideUp('fast', function () {
					$(this).removeClass(groupListShowClass);
				});
				// .removeAttr('data-open')
				break;
			case 'toggle':
				var isShow = $groupList.hasClass(groupListShowClass);
				GEL.progressRope.toggle($groupList, isShow ? 'close' : 'open');
			default:
		}
	};

	module.init = function progressRopeInit() {
		var $progressRope = $('[data-js="progressRope__version__"]');
		if (!$progressRope.length) return;

		// $('[data-js="progressRope-groupList__version__"]:not([data-open])').hide();

		// Bind groupBtn click event
		$('[data-js="progressRope-groupBtn__version__"]').on('click', function () {
			var groupListID = $(this).attr('aria-controls');
			GEL.progressRope.toggle(groupListID, 'toggle');
		});
	};

	GEL.progressRope = module;

	$(function () {
		GEL.progressRope.init();
	});
})(jQuery, GEL);
