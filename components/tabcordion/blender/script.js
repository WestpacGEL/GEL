(function ($, GEL) {
	var module = {};

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
			panelToggle($panelShow, false, 'close');
		}

		switch (mode) {
			case 'open':
				$panel.attr('aria-hidden', 'false');
				if (isTabs) {
					$panel.addClass(panelShowClass);
				} else {
					$panel.slideDown({
						duration: 200,
						start: function () {
							$(this).prev('[data-js="tabcordion-accordionBtn__version__"]').addClass('collapsing');
						},
						complete: function () {
							$(this)
								.css('display', '')
								.addClass(panelShowClass)
								.prev('[data-js="tabcordion-accordionBtn__version__"]')
								.removeClass('collapsing');
						},
					});
				}

				// Store as last active
				$tabcordion.data('lastActivePanelID', $panel.attr('id'));
				break;
			case 'close':
				$panel.attr('aria-hidden', 'true');
				if (isTabs) {
					$panel.removeClass(panelShowClass);
				} else {
					$panel.slideUp({
						duration: 'fast',
						start: function () {
							$(this).prev('[data-js="tabcordion-accordionBtn__version__"]').addClass('collapsing');
						},
						complete: function () {
							$(this)
								.css('display', '')
								.removeClass(panelShowClass)
								.prev('[data-js="tabcordion-accordionBtn__version__"]')
								.removeClass('collapsing');
						},
					});
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
					GEL.tabcordion.toggle(lastActivePanelID, true, 'open');
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
				GEL.throttle(function () {
					setMode(
						$responsiveTabcordion,
						window.matchMedia('(min-width: 768px)').matches,
						tabsClass,
						accordionClass
					);
				})
			)
			.trigger('resize');

		// Bind tabBtn click event
		$('[data-js="tabcordion-tabBtn__version__"]').on('click', function () {
			var panelID = $(this).attr('aria-controls');
			GEL.tabcordion.toggle(panelID, true, 'open');
		});

		// Bind accordionBtn click event
		$('[data-js="tabcordion-accordionBtn__version__"]').on('click', function () {
			var panelID = $(this).attr('aria-controls');
			GEL.tabcordion.toggle(panelID, false, 'toggle');
		});
	};

	GEL.tabcordion = module;

	$(function () {
		GEL.tabcordion.init();
	});
})(jQuery, GEL);
