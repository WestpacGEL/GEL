function GELTogglePopover($panel) {
	var classes = $panel.attr('class').split(/\s+/);
	var baseClass = classes.find((el) => /panel$/.test(el));
	$panel.toggleClass(`${baseClass}-open`);
}

$(function () {
	$('[data-js="popover__version__"]').on('click', function () {
		GELTogglePopover($(this).next('[data-js="popover-panel__version__"]'));
	});

	$('[data-js="popover-closeBtn__version__"]').on('click', function () {
		GELTogglePopover($(this).closest('[data-js="popover-panel__version__"]'));
	});
});
