var GELModal = (function () {
	var module = {};

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

	module.toggle = function modalToggle(modal, mode) {
		var $modal = modal instanceof jQuery ? modal : $('#' + modal);
		if (!$modal.length) return;
		mode = typeof mode !== 'undefined' ? mode : 'toggle';

		var classes = $modal.children().first().attr('class').split(/\s+/);
		var baseClass = classes
			.filter(function (el) {
				return /dialog$/.test(el);
			})[0]
			.replace('-dialog', '');
		var openClass = baseClass + '-open';
		var isOpen = $modal.hasClass(openClass);

		var backdropClass = baseClass + '-backdrop';
		var $backdrop = $('<div class="' + backdropClass + '" />');

		if (mode === 'open' || (mode === 'toggle' && !isOpen)) {
			$('body').addClass('isModalOpen');
			$modal.attr('aria-hidden', 'false').css('opacity', 0).fadeTo(150, 1, 'linear');
			$backdrop.css('opacity', 0).appendTo('body').fadeTo(150, 0.5, 'linear');
			$modal.addClass(openClass).find('[data-js="modal-heading__version__"]').trigger('focus');
		} else if (mode === 'close' || (mode === 'toggle' && isOpen)) {
			$('body').removeClass('isModalOpen');
			$modal.attr('aria-hidden', 'true').fadeTo(150, 0, 'linear', function () {
				$(this).css({ display: '', opacity: '' });
			});
			$modal.removeClass(openClass).prev('[data-modal]').trigger('focus');
			$('.' + backdropClass).fadeTo(150, 0, 'linear', function () {
				$(this).remove();
			});
		}
	};

	module.init = function modalInit() {
		var $modal = $('[data-js="modal__version__"]');
		if (!$modal.length) return;

		if ($modal.length) {
			trapFocus($modal[0]);
		}

		$('[data-modal]').on('click', function () {
			var modalID = $(this).data('modal');
			var $modal = $('#' + modalID);

			GELModal.toggle($modal);
		});

		$('[data-js="modal-closeBtn__version__"]').on('click', function () {
			GELModal.toggle($(this).closest('[data-js="modal__version__"]'), 'close');
		});

		$('[data-js="modal__version__"]')
			.on('click', function (e) {
				if (e.target != this) {
					return false;
				}
				GELModal.toggle($(this), 'close');
			})
			.on('keyup', function (e) {
				if (e.key === 'Escape' || e.keyCode === 27) {
					GELModal.toggle($(this), 'close');
				}
			});
	};

	return module;
})();

$(function () {
	GELModal.init();
});
