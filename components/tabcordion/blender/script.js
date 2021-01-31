$(function () {
	// Tab button click toggle
	$('[data-js="tabcordion-tabBtn__version__"]').on('click', function () {
		var $tabBtn = $(this);
		var panelID = $tabBtn.attr('aria-controls');
		var $panel = $('#' + panelID);
		var isOpen = $tabBtn.attr('aria-expanded');

		if (isOpen === 'false') {
			var $tabBtnOpen = $tabBtn.siblings('[aria-expanded="true"]');
			var panelOpenID = $tabBtnOpen.attr('aria-controls');
			var $panelOpen = $('#' + panelOpenID);

			var tabBtnSelectedClass = $tabBtnOpen.attr('class').match(/GEL[^\s]*active/g)[0];
			var panelSelectedClass = $panelOpen.attr('class').match(/GEL[^\s]*show/g)[0];

			$tabBtnOpen.removeClass(tabBtnSelectedClass).attr('aria-expanded', 'false');
			$panelOpen.removeClass(panelSelectedClass).attr('aria-hidden', 'true');

			$tabBtn.addClass(tabBtnSelectedClass).attr('aria-expanded', 'true');
			$panel.addClass(panelSelectedClass).attr('aria-hidden', 'false');
		}
	});

	// Accordion button click toggle
	$('[data-js="tabcordion-accordionBtn__version__"]').on('click', function () {
		const $button = $(this);
		const $responsiveTabcordion = $button.closest('[data-mode="responsive"]');
		const panelID = $button.attr('aria-controls');
		const $panel = $(`#${panelID}`);
		const isOpen = $button.attr('aria-expanded');

		if (isOpen === 'true') {
			$button.attr('aria-expanded', 'false').removeClass(function (index, css) {
				return css.match(/GEL[^\s]*active/g) || [].join(' ');
			});
			$panel.attr('aria-hidden', 'true').removeClass(function (index, css) {
				return css.match(/GEL[^\s]*show/g) || [].join(' ');
			});
		} else {
			const btnBaseClass = $button.attr('class').match(/GEL[^\s]*btn(?!.)/g)[0];
			const panelBaseClass = $panel.attr('class').match(/GEL[^\s]*panel(?!.)/g)[0];

			$button.attr('aria-expanded', 'true').addClass(`${btnBaseClass}-active`);
			$panel.attr('aria-hidden', 'false').addClass(`${panelBaseClass}-show`);
		}

		if ($responsiveTabcordion.length) {
			$responsiveTabcordion.data('active', panelID);
		}
	});

	// Set tabs/accordion class depending on viewport width
	var tabsClass = 'GEL-tabcordion-tabs__version__';
	var accordionClass = 'GEL-tabcordion-accordion__version__';
	var $responsive = $('.GEL-tabcordion__version__').not(
		[tabsClass, accordionClass]
			.map(function (c) {
				return '.' + c;
			})
			.join(',')
	);
	var setMode = function ($el, tabs) {
		$el.toggleClass(tabsClass, tabs).toggleClass(accordionClass, !tabs);
	};

	$(window)
		.on('resize', function () {
			setMode($responsive, window.matchMedia('(min-width: 768px)').matches);
		})
		.trigger('resize');
});
