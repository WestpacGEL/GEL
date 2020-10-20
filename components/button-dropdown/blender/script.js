$(function () {
	$('[data-js="buttonDropdown-btn__version__"]').on('click keyup', function (e) {
		var $this = $(this);

		if (e.type === 'click' || (e.type === 'keyup' && e.keyCode === 27)) {
			var $panel = $this.next('[data-js="buttonDropdown-panel__version__"]');
			var classes = $panel.attr('class').split(/\s+/);
			var baseClass = classes.filter(function (el) {
				return /panel$/.test(el);
			})[0];
		}
		if (e.type === 'click') {
			$this.attr('aria-expanded', function (_, val) {
				return val === 'true' ? 'false' : 'true';
			});
			$panel.toggleClass(`${baseClass}-open`);
		}
		if (e.type === 'keyup' && e.keyCode === 27) {
			$this.attr('aria-expanded', false);
			$panel.removeClass(`${baseClass}-open`);
		}
	});
});
