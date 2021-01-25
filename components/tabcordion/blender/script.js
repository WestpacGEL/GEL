$(function () {
	$('[data-js="tabcordion-tab-btn__version__"]').on('click', function () {
		const $button = $(this);
		const $responsiveTabcordion = $button.closest('[data-mode="responsive"]');
		const panelID = $button.attr('aria-controls');
		const $panel = $(`#${panelID}`);
		const $item = $panel.parent();
		const isOpen = $button.attr('aria-expanded');

		if (isOpen === 'false') {
			const $openBtn = $button.siblings('[aria-expanded="true"]');
			const openPanelID = $openBtn.attr('aria-controls');
			const $openPanel = $(`#${openPanelID}`);
			const $openItem = $openPanel.parent();

			const selectedBtnClass = $openBtn.attr('class').match(/GEL[^\s]*selected/g)[0];
			const selectedItemClass = $openItem.attr('class').match(/GEL[^\s]*selected/g)[0];

			$openBtn.removeClass(selectedBtnClass).attr('aria-expanded', 'false');
			$openItem.removeClass(selectedItemClass);
			$openPanel.attr('aria-hidden', 'true');

			$button.addClass(selectedBtnClass).attr('aria-expanded', 'true');
			$item.addClass(selectedItemClass);
			$panel.attr('aria-hidden', 'false');

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

	$('[data-js="tabcordion-accordion-btn__version__"]').on('click', function () {
		const $button = $(this);
		const $responsiveTabcordion = $button.closest('[data-mode="responsive"]');
		const $item = $button.parent();
		const panelID = $button.attr('aria-controls');
		const $panel = $(`#${panelID}`);
		const isOpen = $button.attr('aria-expanded');

		if (isOpen === 'true') {
			$button.attr('aria-expanded', 'false');
			$panel.attr('aria-hidden', 'true');
			$item.removeClass(function (index, css) {
				return css.match(/GEL[^\s]*selected/g) || [].join(' ');
			});
		} else {
			const itemBaseClass = $item.attr('class').match(/GEL[^\s]*item(?!.)/g)[0];

			$button.attr('aria-expanded', 'true');
			$item.addClass(`${itemBaseClass}-selected`);
			$panel.attr('aria-hidden', 'false');
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

					$tabcordion.find('[data-js="tabcordion-accordion-btn__version__"]').each(function () {
						const $btn = $(this);
						if (
							$btn.attr('aria-expanded') === 'true' &&
							$btn.attr('aria-controls') !== activePanelID
						) {
							$btn.attr('aria-expanded', 'false');
							const $item = $btn.parent();
							const panelID = $btn.attr('aria-controls');
							$(`#${panelID}`).attr('aria-hidden', 'true');
							$item.removeClass(function (index, css) {
								return css.match(/GEL[^\s]*selected/g) || [].join(' ');
							});
						}
					});

					$tabcordion.find('[data-js="tabcordion-tab-btn__version__"]').each(function () {
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
						const $item = $panel.parent();
						const itemBaseClass = $panel.attr('class').match(/GEL[^\s]*item(?!.)/g)[0];
						$panel.attr('aria-hidden', 'false');
						$item.addClass(`${itemBaseClass}-selected`);
					}
				}
			});
		}
	});
});
