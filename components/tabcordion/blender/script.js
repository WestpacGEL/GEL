function GELThrottle(func, wait) {
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

function GELTabcordionTabBtnToggle(tabBtn) {
	var $tabBtn =
		tabBtn instanceof jQuery
			? tabBtn
			: $('[data-js="tabcordion-tabBtn__version__"][aria-controls="' + tabBtn + '"]');

	var $tabcordion = $tabBtn.closest('[data-js="tabcordion__version__"]');

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

function GELTabcordionAccordionBtnToggle(accordionBtn, closeOthers, mode) {
	closeOthers = typeof closeOthers !== 'undefined' ? closeOthers : false;
	mode = typeof mode !== 'undefined' ? mode : 'toggle';

	var $accordionBtn =
		accordionBtn instanceof jQuery
			? accordionBtn
			: $('[data-js="tabcordion-accordionBtn__version__"][aria-controls="' + accordionBtn + '"]');

	var classes = $accordionBtn.attr('class').split(/\s+/);
	var baseClass = classes.filter(function (el) {
		return /accordionBtn$/.test(el);
	})[0];
	var accordionBtnActiveClass = baseClass + '-active';

	if (closeOthers) {
		var $tabcordion = $accordionBtn.closest('[data-js="tabcordion__version__"]');
		var $accordionBtnActive = $tabcordion.find('.' + accordionBtnActiveClass);
		$accordionBtnActive.removeClass(accordionBtnActiveClass).attr('aria-hidden', 'true');
	}

	switch (mode) {
		case 'open':
			$accordionBtn.attr('aria-expanded', 'true').addClass(accordionBtnActiveClass);
			break;
		case 'close':
			$accordionBtn.attr('aria-expanded', 'false').removeClass(accordionBtnActiveClass);
			break;
		case 'toggle':
		default:
			var isActive = $accordionBtn.hasClass(accordionBtnActiveClass);
			if (isActive) {
				GELTabcordionAccordionBtnToggle($accordionBtn, closeOthers, 'close');
			} else {
				GELTabcordionAccordionBtnToggle($accordionBtn, closeOthers, 'open');
			}
	}
}

function GELTabcordionPanelToggle(panel, closeOthers, mode) {
	closeOthers = typeof closeOthers !== 'undefined' ? closeOthers : true;
	mode = typeof mode !== 'undefined' ? mode : 'toggle';

	var $panel = panel instanceof jQuery ? panel : $('#' + panel);
	var classes = $panel.attr('class').split(/\s+/);
	var baseClass = classes.filter(function (c) {
		return /panel$/.test(c);
	})[0];
	var panelShowClass = baseClass + '-show';
	var $tabcordion = $panel.closest('[data-js="tabcordion__version__"]');

	if (closeOthers) {
		var $panelShow = $tabcordion.find('.' + panelShowClass);
		$panelShow.removeClass(panelShowClass).attr('aria-hidden', 'true');
	}

	switch (mode) {
		case 'open':
			$panel.addClass(panelShowClass).attr('aria-hidden', 'false');

			// Store as last active
			$tabcordion.data('lastActivePanelID', $panel.attr('id'));
			break;
		case 'close':
			$panel.removeClass(panelShowClass).attr('aria-hidden', 'true');
			break;
		case 'toggle':
		default:
			var isShow = $panel.hasClass(panelShowClass);
			if (isShow) {
				GELTabcordionPanelToggle($panel, closeOthers, 'close');
			} else {
				GELTabcordionPanelToggle($panel, closeOthers, 'open');
			}
	}
}

function GELTabcordionSetMode($responsiveTabcordion, tabs, tabsClass, accordionClass) {
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
			// Reset tabcordion to show last active
			var lastActivePanelID = $this.data('lastActivePanelID');
			if (lastActivePanelID) {
				GELTabcordionAccordionBtnToggle(lastActivePanelID, true, 'open');
				GELTabcordionTabBtnToggle(lastActivePanelID);
				GELTabcordionPanelToggle(lastActivePanelID, true, 'open');
			}
		}
	});
}

function GELTabcordionInit() {
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
			GELThrottle(function () {
				GELTabcordionSetMode(
					$responsiveTabcordion,
					window.matchMedia('(min-width: 768px)').matches,
					tabsClass,
					accordionClass
				);
			})
		)
		.trigger('resize');
}

$(function () {
	// Initialise tabcordion
	GELTabcordionInit();

	// Bind tabBtn click
	$('[data-js="tabcordion-tabBtn__version__"]').on('click', function () {
		var $tabBtn = $(this);
		var panelID = $tabBtn.attr('aria-controls');

		GELTabcordionTabBtnToggle($tabBtn);
		GELTabcordionPanelToggle(panelID, true);
	});

	// Bind accordionBtn click
	$('[data-js="tabcordion-accordionBtn__version__"]').on('click', function () {
		var $accordionBtn = $(this);
		var panelID = $accordionBtn.attr('aria-controls');

		GELTabcordionAccordionBtnToggle($accordionBtn);
		GELTabcordionPanelToggle(panelID, false);
	});
});
