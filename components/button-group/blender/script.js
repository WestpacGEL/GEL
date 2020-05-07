$(function () {
	$('[data-js="buttonGroup-input__version__"]').on('change', function () {
		var $thisInput = $(this);

		$thisInput
			.parents('[data-js="buttonGroup__version__"]')
			.find('[data-js="buttonGroup-btn__version__"]')
			.each(function () {
				var classBits = $(this).attr('class').split('-checked').join('').split('-');
				var start = classBits.slice(0, 3);
				var middle = classBits.slice(3, classBits.length - 2);
				if (middle.indexOf('soft') === -1) {
					middle.push('soft');
				}
				var end = classBits.slice(-2);

				var newClass = start.join('-') + '-' + middle.sort().join('-') + '-' + end.join('-');
				$(this).attr('class', newClass);
			});

		var $thisBtn = $thisInput.nextAll('[data-js="buttonGroup-btn__version__"]');
		var className = $thisBtn.attr('class');
		$thisBtn.attr('class', className.split('-soft').join('') + '-checked');
	});
});
