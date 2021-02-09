var GELAlert = (function () {
	var module = {};

	module.init = function () {
		$('[data-js="alert-closeBtn__version__"]').on('click', function () {
			$(this).closest('[data-js="alert__version__"]').fadeOut();
		});
	};

	return module;
})();

$(function () {
	GELAlert.init();
});
