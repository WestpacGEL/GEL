$(function () {
	$('[data-js="tabcordion-tabBtn__version__"]').on('click', function () {
		const $button = $(this);
		const $responsiveTabcordion = $button.closest('[data-mode="responsive"]');
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

			if ($responsiveTabcordion.length) {
				const $accordionBtn = $responsiveTabcordion.children(`[aria-controls="${panelID}"]`);
				const btnBaseClass = $accordionBtn.attr('class').match(/GEL[^\s]*btn(?!.)/g)[0];
				const $prevAccordionBtn = $responsiveTabcordion.children(
					`[aria-controls="${openPanelID}"]`
				);

				$accordionBtn.attr('aria-expanded', 'true').addClass(`${btnBaseClass}-open`);
				$prevAccordionBtn.attr('aria-expanded', 'false').removeClass(function (index, css) {
					return css.match(/GEL[^\s]*open/g) || [].join(' ');
				});
				$responsiveTabcordion.data('active', panelID);
			}
		}
	});

	$('[data-js="tabcordion-accordionBtn__version__"]').on('click', function () {
		const $button = $(this);
		const $responsiveTabcordion = $button.closest('[data-mode="responsive"]');
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
			$panel.attr('aria-hidden', 'false').addClass(`${panelBaseClass}-selected`);
		}

		if ($responsiveTabcordion.length) {
			$responsiveTabcordion.data('active', panelID);
		}
	});

	// handle which tab/panel is active on resize for responsive tabcordion (from accordion mode to tabs)
	const mq = window.matchMedia('(min-width: 768px)');
	mq.addEventListener('change', function (e) {
		if (e.matches) {
			$('[data-mode="responsive"').each(function () {
				const $tabcordion = $(this);
				if ($tabcordion.data('active')) {
					const activePanelID = $tabcordion.data('active');

					$tabcordion.find('[data-js="tabcordion-accordionBtn__version__"]').each(function () {
						const $btn = $(this);
						if (
							$btn.attr('aria-expanded') === 'true' &&
							$btn.attr('aria-controls') !== activePanelID
						) {
							$btn.attr('aria-expanded', 'false').removeClass(function (index, css) {
								return css.match(/GEL[^\s]*open/g) || [].join(' ');
							});
							const panelID = $btn.attr('aria-controls');
							$(`#${panelID}`)
								.attr('aria-hidden', 'true')
								.removeClass(function (index, css) {
									return css.match(/GEL[^\s]*selected/g) || [].join(' ');
								});
						}
					});

					$tabcordion.find('[data-js="tabcordion-tabBtn__version__"]').each(function () {
						const $btn = $(this);
						if (
							$btn.attr('aria-expanded') === 'true' &&
							$btn.attr('aria-controls') !== activePanelID
						) {
							$btn.attr('aria-expanded', 'false').removeClass(function (index, css) {
								return css.match(/GEL[^\s]*selected/g) || [].join(' ');
							});
						} else if (
							$btn.attr('aria-expanded') === 'false' &&
							$btn.attr('aria-controls') === activePanelID
						) {
							const btnBaseClass = $btn.attr('class').match(/GEL[^\s]*btn(?!.)/g)[0];
							$btn.attr('aria-expanded', 'true').addClass(`${btnBaseClass}-selected`);
						}
					});

					const $panel = $(`#${activePanelID}`);
					if ($panel.attr('aria-hidden') === 'true') {
						const panelBaseClass = $panel.attr('class').match(/GEL[^\s]*panel(?!.)/g)[0];
						$panel.attr('aria-hidden', 'false').addClass(`${panelBaseClass}-selected`);
					}
				}
			});
		}
	});
});
