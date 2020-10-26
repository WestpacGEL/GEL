function GELModalWrapperToggle($el, mode) {
	mode = typeof mode !== 'undefined' ? mode : 'toggle';

	var classes = $el.attr('class').split(/\s+/);
	var baseClass = classes.filter(function (el) {
		return /wrapper$/.test(el);
	})[0];
	var openClass = baseClass + '-open';
	var isOpen = $el.hasClass(openClass);

	if (mode === 'open' || (mode === 'toggle' && !isOpen)) {
		$el.addClass(openClass);
		$el.find('[data-js="modal-heading__version__"]').trigger('focus');
	} else if (mode === 'close' || (mode === 'toggle' && isOpen)) {
		$el.removeClass(openClass);
		$el.prev('[data-modal]').trigger('focus');
	}
}

$(function () {
	$('[data-modal]').on('click', function () {
		var modalID = $(this).data('modal');
		var $modal = $('#' + modalID);

		GELModalWrapperToggle($modal.closest('[data-js="modal-wrapper__version__"]'));
	});

	$('[data-js="modal-closeBtn__version__"]').on('click', function () {
		GELModalWrapperToggle($(this).closest('[data-js="modal-wrapper__version__"]'), 'close');
	});

	$('[data-js="modal-wrapper__version__"]')
		.on('click', function (e) {
			if (e.target != this) {
				return false;
			}
			GELModalWrapperToggle($(this), 'close');
		})
		.on('keyup', function (e) {
			if (e.keyCode === 27) {
				console.log('esc', $(this));
				GELModalWrapperToggle($(this), 'close');
			}
		});
});
