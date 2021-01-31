$(function () {
	// Tab button toggle
	$('[data-js="tabcordion-tabBtn__version__"]').on('click', function () {
		var $tabBtn = $(this);
		var panelID = $tabBtn.attr('aria-controls');
		var $panel = $('#' + panelID);

		var classes = $tabBtn.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /tabBtn$/.test(el);
		})[0];
		var tabBtnActiveClass = baseClass + '-active';
		var isActive = $tabBtn.hasClass(tabBtnActiveClass);

		if (!isActive) {
			var $tabBtnOpen = $tabBtn.siblings('.' + tabBtnActiveClass);
			var panelOpenID = $tabBtnOpen.attr('aria-controls');
			var $panelOpen = $('#' + panelOpenID);
			var panelShowClass = $panelOpen.attr('class').match(/GEL[^\s]*show/g)[0];

			$tabBtnOpen.removeClass(tabBtnActiveClass).attr('aria-expanded', 'false');
			$panelOpen.removeClass(panelShowClass).attr('aria-hidden', 'true');

			$tabBtn.addClass(tabBtnActiveClass).attr('aria-expanded', 'true');
			$panel.addClass(panelShowClass).attr('aria-hidden', 'false');
		}
	});

	// Accordion button toggle
	$('[data-js="tabcordion-accordionBtn__version__"]').on('click', function () {
		var $accordionBtn = $(this);
		// var $responsiveTabcordion = $accordionBtn.closest('[data-mode="responsive"]');
		var panelID = $accordionBtn.attr('aria-controls');
		var $panel = $('#' + panelID);

		var classes = $accordionBtn.attr('class').split(/\s+/);
		var baseClass = classes.filter(function (el) {
			return /accordionBtn$/.test(el);
		})[0];
		var accordionBtnActiveClass = baseClass + '-active';
		var isActive = $accordionBtn.hasClass(accordionBtnActiveClass);

		if (isActive) {
			$accordionBtn.attr('aria-expanded', 'false').removeClass(function (_, css) {
				return css.match(/GEL[^\s]*active/g) || [].join(' ');
			});
			$panel.attr('aria-hidden', 'true').removeClass(function (_, css) {
				return css.match(/GEL[^\s]*show/g) || [].join(' ');
			});
		} else {
			var panelBaseClass = $panel.attr('class').match(/GEL[^\s]*panel/g)[0];
			var panelShowClass = panelBaseClass + '-show';

			$accordionBtn.attr('aria-expanded', 'true').addClass(accordionBtnActiveClass);
			$panel.attr('aria-hidden', 'false').addClass(panelShowClass);
		}

		/* if ($responsiveTabcordion.length) {
			$responsiveTabcordion.data('active', panelID);
		} */
	});

	// Set tabs/accordion class depending on viewport width
	var $tabcordion = $('[data-js="tabcordion__version__"]');
	if ($tabcordion.length) {
		var tabcordionClasses = $tabcordion.attr('class').split(/\s+/);
		var tabcordionBaseClass = tabcordionClasses.filter(function (el) {
			return /tabcordion$/.test(el);
		})[0];
		var tabsClass = tabcordionBaseClass + '-tabs';
		var accordionClass = tabcordionBaseClass + '-accordion';
		var $responsive = $tabcordion.not(
			[tabsClass, accordionClass]
				.map(function (c) {
					return '.' + c;
				})
				.join(',')
		);

		// Set responsive tabcordion mode
		function GELTabcordionInit($el, tabs) {
			$el.each(function () {
				$(this).toggleClass(tabsClass, tabs).toggleClass(accordionClass, !tabs);
			});
		}

		$(window)
			.on('resize', function () {
				GELTabcordionInit($responsive, window.matchMedia('(min-width: 768px)').matches);
			})
			.trigger('resize');
	}
});
