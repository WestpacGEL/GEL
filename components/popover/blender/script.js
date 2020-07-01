function GELtoggelPopover($panel) {
	var className = $panel.attr('class');
	var classBits = className.split('-open');

	if (classBits.length > 1) {
		$panel.attr('class', classBits.join(''));
	} else {
		var items = className.split('-');
		items.splice(items.length - 1, 0, 'open');
		$panel.attr('class', items.join('-'));
	}
}

$(function () {
	$('[data-js="popover__version__"]').on('click', function () {
		GELtoggelPopover($(this).next('[data-js="popover-panel__version__"]'));
	});

	$('[data-js="popover-closeBtn__version__"]').on('click', function () {
		GELtoggelPopover($(this).closest('[data-js="popover-panel__version__"]'));
	});
});
