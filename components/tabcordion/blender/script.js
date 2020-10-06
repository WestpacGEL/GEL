$(function () {
	$('[data-js="tabcordion-tab-btn__version__"]').on('click', function () {
		const $button = $(this);
		const panelID = $button.attr('aria-controls');
		const $panel = $(`#${panelID}`);
		const isOpen = $button.attr('aria-expanded');

		if (isOpen === 'false') {
			const $openBtn = $button.siblings('[aria-expanded="true"]');
			const openPanelID = $openBtn.attr('aria-controls');
			const $openPanel = $(`#${openPanelID}`);

			const selectedBtnClass = $openBtn.attr('class').match(/GEL[^\s]*selected/g)[0];
			const selectedPanelClass = $openPanel.attr('class').match(/GEL[^\s]*selected/g)[0];

			$openBtn.removeClass(selectedBtnClass).attr('aria-expanded', 'false');
			$openPanel.removeClass(selectedPanelClass).attr('aria-hidden', 'true');

			$button.addClass(selectedBtnClass).attr('aria-expanded', 'true');
			$panel.addClass(selectedPanelClass).attr('aria-hidden', 'false');
		}
	});

	$('[data-js="tabcordion-accordion-btn__version__"]').on('click', function () {
		const $button = $(this);
		const panelID = $button.attr('aria-controls');
		const $panel = $(`#${panelID}`);
		const isOpen = $button.attr('aria-expanded');

		if (isOpen === 'true') {
			$button.attr('aria-expanded', 'false').removeClass(function (index, css) {
				return css.match(/GEL[^\s]*open/g) || [].join(' ');
			});
			$panel.attr('aria-hidden', 'true').removeClass(function (index, css) {
				return css.match(/GEL[^\s]*selected/g) || [].join(' ');
			});
		} else {
			const btnBaseClass = $button.attr('class').match(/GEL[^\s]*btn(?!.)/g)[0];
			const panelBaseClass = $panel.attr('class').match(/GEL[^\s]*panel(?!.)/g)[0];

			$button.attr('aria-expanded', 'true').addClass(`${btnBaseClass}-open`);
			$panel.attr('aria-hidden', 'hidden').addClass(`${panelBaseClass}-selected`);
		}
	});
});
