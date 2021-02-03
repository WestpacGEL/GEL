var GELTabcordion = (function () {
	var module = {};

	function throttle(func, wait) {
		wait || (wait = 250);
		var last;
		var deferTimer;

		return function () {
			var context = this;
			var now = +new Date();
			var args = arguments;

			if (last && now < last + wait) {
				clearTimeout(deferTimer);

				deferTimer = setTimeout(function () {
					last = now;
					func.apply(context, args);
				}, wait);
			} else {
				last = now;
				func.apply(context, args);
			}
		};
	}

	function tabBtnToggle(tabBtn) {
		var $tabBtn =
			tabBtn instanceof jQuery
				? tabBtn
				: $('[data-js="tabcordion-tabBtn__version__"][aria-controls="' + tabBtn + '"]');
		if (!$tabBtn.length) return;

		var $tabcordion = $tabBtn.closest('[data-js="tabcordion__version__"]');
		if (!$tabcordion.length) return;

		var classes = $tabBtn.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /tabBtn$/.test(el);
		})[0];
		var tabBtnActiveClass = baseClass + '-active';
		var isActive = $tabBtn.hasClass(tabBtnActiveClass);

		if (!isActive) {
			// Reset currently active tabBtn
			var $tabBtnActive = $tabcordion.find('.' + tabBtnActiveClass);
			$tabBtnActive.removeClass(tabBtnActiveClass).attr('aria-expanded', 'false');

			// Set active tabBtn
			$tabBtn.addClass(tabBtnActiveClass).attr('aria-expanded', 'true');
		}
	}

	function accordionBtnToggle(accordionBtn, closeOthers, mode) {
		closeOthers = typeof closeOthers !== 'undefined' ? closeOthers : false;
		mode = typeof mode !== 'undefined' ? mode : 'toggle';

		var $accordionBtn =
			accordionBtn instanceof jQuery
				? accordionBtn
				: $('[data-js="tabcordion-accordionBtn__version__"][aria-controls="' + accordionBtn + '"]');
		if (!$accordionBtn.length) return;

		var classes = $accordionBtn.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /accordionBtn$/.test(el);
		})[0];
		var accordionBtnActiveClass = baseClass + '-active';

		if (closeOthers) {
			var $tabcordion = $accordionBtn.closest('[data-js="tabcordion__version__"]');
			var $accordionBtnActive = $tabcordion.find('.' + accordionBtnActiveClass).not($accordionBtn);
			$accordionBtnActive.removeClass(accordionBtnActiveClass).attr('aria-hidden', 'true');
		}

		switch (mode) {
			case 'open':
				$accordionBtn.addClass(accordionBtnActiveClass).attr('aria-expanded', 'true');
				break;
			case 'close':
				$accordionBtn.removeClass(accordionBtnActiveClass).attr('aria-expanded', 'false');
				break;
			case 'toggle':
			default:
				var isActive = $accordionBtn.hasClass(accordionBtnActiveClass);
				accordionBtnToggle($accordionBtn, false, isActive ? 'close' : 'open');
		}
	}

	function panelToggle(panel, closeOthers, mode) {
		var $panel = panel instanceof jQuery ? panel : $('#' + panel);
		if (!$panel.length) return;

		var $tabcordion = $panel.closest('[data-js="tabcordion__version__"]');
		if (!$tabcordion.length) return;

		var isTabs = $tabcordion.hasClass('GEL-tabcordion__version__-tabs');
		closeOthers = typeof closeOthers !== 'undefined' ? closeOthers : isTabs;
		mode = typeof mode !== 'undefined' ? mode : 'toggle';

		var classes = $panel.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (c) {
			return /panel$/.test(c);
		})[0];
		var panelShowClass = baseClass + '-show';

		if (closeOthers) {
			var $panelShow = $tabcordion.find('.' + panelShowClass).not($panel);
			$panelShow.removeClass(panelShowClass).attr('aria-hidden', 'true');
		}

		switch (mode) {
			case 'open':
				$panel.addClass(panelShowClass).attr('aria-hidden', 'false');

				// Store as last active
				$tabcordion.data('lastActivePanelID', $panel.attr('id'));
				break;
			case 'close':
				if (!isTabs) {
					$panel.removeClass(panelShowClass).attr('aria-hidden', 'true');
				}
				break;
			case 'toggle':
			default:
				var isShow = $panel.hasClass(panelShowClass);
				panelToggle($panel, false, isShow ? 'close' : 'open');
		}
	}

	function setMode($responsiveTabcordion, tabs, tabsClass, accordionClass) {
		$responsiveTabcordion.each(function () {
			var $this = $(this);
			var isTabs = $this.hasClass(tabsClass);
			var isAccordion = $this.hasClass(accordionClass);

			// Mode is not yet set, or is to change
			if ((!isTabs && !isAccordion) || tabs !== isTabs) {
				// Set responsive tabcordion mode
				$this.toggleClass(tabsClass, tabs).toggleClass(accordionClass, !tabs);
			}

			// Mode is to change
			if (tabs !== isTabs) {
				// Reset tabcordion to show last active only
				var lastActivePanelID = $this.data('lastActivePanelID');
				if (lastActivePanelID) {
					GELTabcordion.toggle(lastActivePanelID, true, 'open');
				}
			}
		});
	}

	module.toggle = function tabcordionToggle(panel, closeOthers, mode) {
		tabBtnToggle(panel);
		accordionBtnToggle(panel, closeOthers, mode);
		panelToggle(panel, closeOthers, mode);
	};

	module.init = function tabcordionInit() {
		var $tabcordion = $('[data-js="tabcordion__version__"]');
		if (!$tabcordion.length) return;

		// Set tabs/accordion class depending on viewport width
		var tabsClass = 'GEL-tabcordion__version__-tabs';
		var accordionClass = 'GEL-tabcordion__version__-accordion';
		var $responsiveTabcordion = $tabcordion.not(
			[tabsClass, accordionClass]
				.map(function (c) {
					return '.' + c;
				})
				.join(', ')
		);

		$(window)
			.on(
				'resize',
				throttle(function () {
					setMode(
						$responsiveTabcordion,
						window.matchMedia('(min-width: 768px)').matches,
						tabsClass,
						accordionClass
					);
				})
			)
			.trigger('resize');

		// Bind tabBtn click
		$('[data-js="tabcordion-tabBtn__version__"]').on('click', function () {
			var panelID = $(this).attr('aria-controls');
			GELTabcordion.toggle(panelID, true);
		});

		// Bind accordionBtn click
		$('[data-js="tabcordion-accordionBtn__version__"]').on('click', function () {
			var panelID = $(this).attr('aria-controls');
			GELTabcordion.toggle(panelID, false);
		});
	};

	return module;
})();

$(function () {
	GELTabcordion.init();
});
