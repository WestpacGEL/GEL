$(function () {
	$('[data-js="buttonDropdown-btn__version__"]').on('click keyup', function (e) {
		var event = e.type === 'keyup' && e.keyCode === 27 ? 'esc' : 'click';
		var $this = $(this);

		if (event === 'click' || event === 'esc') {
			var $panel = $this.next('[data-js="buttonDropdown-panel__version__"]');
			var classes = $panel.attr('class').split(/\s+/);
			var baseClass = classes.filter(function (el) {
				return /panel$/.test(el);
			})[0];
		}
		if (event === 'click') {
			$this.attr('aria-expanded', function (_, val) {
				return val === 'true' ? 'false' : 'true';
			});
			$panel.toggleClass(`${baseClass}-open`);
		}
		if (event === 'esc') {
			$this.attr('aria-expanded', false);
			$panel.removeClass(`${baseClass}-open`);
		}
	});
});
