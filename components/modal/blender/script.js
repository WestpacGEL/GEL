function trapFocus(element) {
	var focusableEls = element.querySelectorAll(
		'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
	);
	var firstFocusableEl = focusableEls[0];
	var lastFocusableEl = focusableEls[focusableEls.length - 1];

	element.addEventListener('keydown', function (e) {
		var isTabPressed = e.key === 'Tab' || e.keyCode === 9;

		if (!isTabPressed) return;

		if (e.shiftKey) {
			if (document.activeElement === firstFocusableEl) {
				lastFocusableEl.focus();
				e.preventDefault();
			}
		} else {
			if (document.activeElement === lastFocusableEl) {
				firstFocusableEl.focus();
				e.preventDefault();
			}
		}
	});
}

function GELModalToggle($el, mode) {
	mode = typeof mode !== 'undefined' ? mode : 'toggle';

	var classes = $el.attr('class').split(/\s+/);
	var baseClass = classes.filter(function (el) {
		return /modal$/.test(el);
	})[0];
	var openClass = baseClass + '-open';
	var isOpen = $el.hasClass(openClass);

	var backdropClass = baseClass + '-backdrop';
	var $backdrop = $('<div class="' + backdropClass + '" />');

	if (mode === 'open' || (mode === 'toggle' && !isOpen)) {
		$('body').addClass('isModalOpen');
		$el.attr('aria-hidden', 'false').css('opacity', 0).fadeTo(150, 1, 'linear');
		$backdrop.css('opacity', 0).appendTo('body').fadeTo(150, 0.5, 'linear');
		$el.addClass(openClass).find('[data-js="modal-heading__version__"]').trigger('focus');
		// $el.find('[data-js="modal-content__version__"]').trap();
	} else if (mode === 'close' || (mode === 'toggle' && isOpen)) {
		$('body').removeClass('isModalOpen');
		$el.attr('aria-hidden', 'true').fadeTo(150, 0, 'linear', function () {
			$(this).css({ display: '', opacity: '' });
			// $el.find('[data-js="modal-content__version__"]').untrap();
		});
		$el.removeClass(openClass).prev('[data-modal]').trigger('focus');
		$('.' + backdropClass).fadeTo(150, 0, 'linear', function () {
			$(this).remove();
		});
	}
}

$(function () {
	trapFocus($('[data-js="modal__version__"]')[0]);

	$('[data-modal]').on('click', function () {
		var modalID = $(this).data('modal');
		var $modal = $('#' + modalID);

		GELModalToggle($modal);
	});

	$('[data-js="modal-closeBtn__version__"]').on('click', function () {
		GELModalToggle($(this).closest('[data-js="modal__version__"]'), 'close');
	});

	$('[data-js="modal__version__"]')
		.on('click', function (e) {
			if (e.target != this) {
				return false;
			}
			GELModalToggle($(this), 'close');
		})
		.on('keyup', function (e) {
			if (e.key === 'Escape' || e.keyCode === 27) {
				GELModalToggle($(this), 'close');
			}
		});
});
