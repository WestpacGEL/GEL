$(function () {
	$('[data-js="list-link-item__version__"] a').on('click', function (e) {
		var target = $(this).attr('href');
		console.log(target);
		if (/^#.+/.test(target)) {
			e.preventDefault();
			var $target = $(target);
			$('html, body').animate({ scrollTop: $target.offset().top }, 500, function () {
				$target.focus();
				window.location.hash = target.slice(1);
			});
		}
	});
});
