'use strict';

var GEL = (function GELCore() {
	return {
		/*
		 * Throttle function
		 *
		 * @param   func       [function]  Function to be executed
		 * @param   wait       [integer]   Run as much as possible without ever going more than once per [n in milliseconds] duration
		 *
		 * @return  [function]
		 */
		throttle: function GELThrottle(func, wait) {
			wait || (wait = 250);
			var last;
			var deferTimer;

			return function () {
				var context = this;
				var now = +new Date();
				var args = arguments;

				if (last && now < last + wait) {
					clearTimeout(deferTimer);

					deferTimer = setTimeout(function () {
						last = now;
						func.apply(context, args);
					}, wait);
				} else {
					last = now;
					func.apply(context, args);
				}
			};
		},

		/*
		 * Trap focus function
		 *
		 * @param   el    [object]  Element to be executed
		 *
		 * @return  [none]
		 */
		trapFocus: function GELTrapFocus(el) {
			var focusableEls = el.querySelectorAll(
				'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
			);
			var firstFocusableEl = focusableEls[0];
			var lastFocusableEl = focusableEls[focusableEls.length - 1];

			el.addEventListener('keydown', function (e) {
				var isTabPressed = e.key === 'Tab' || e.keyCode === 9;

				if (!isTabPressed) return;

				if (e.shiftKey) {
					if (document.activeElement === firstFocusableEl) {
						lastFocusableEl.focus();
						e.preventDefault();
					}
				} else {
					if (document.activeElement === lastFocusableEl) {
						firstFocusableEl.focus();
						e.preventDefault();
					}
				}
			});
		},

		/*
		 * Initiate function
		 */
		init: function GELInit() {
			if (typeof window !== 'undefined' && window.document && window.document.createElement) {
				// Let's make sure we only add the script once
				var hasScript = document.querySelectorAll('script[id="GELFocus"]').length > 0;

				if (!hasScript) {
					// Insert a script that:
					// - removes the "focus-visible" class to the body if somehow present
					// - listens for the tab key
					// - when tab key is pressed adds the "focus-visible" class and removes the listener
					var scriptEl = document.createElement('script');
					scriptEl.setAttribute('id', 'GELFocus');
					scriptEl.text =
						'function GELKeyHandler(event) {' +
						'	if (event.key === "Tab") {' +
						'		document.body.classList.add("focus-visible");' +
						'	}' +
						'};' +
						'' +
						'function GELClickHandler(event) {' +
						'	document.body.classList.remove("focus-visible");' +
						'};' +
						'' +
						'document.body.classList.remove("focus-visible");' +
						'document.addEventListener("keydown", GELKeyHandler);';
						'document.addEventListener("mousedown", GELClickHandler);';
					document.body.insertBefore(scriptEl, document.body.firstChild);

					// Insert CSS style to hide all focus only when the "focus-visible" is absent
					var styleEl = document.createElement('style');
					styleEl.setAttribute('type', 'text/css');
					styleEl.innerHTML = 'body:not(.focus-visible) :focus {' + '	outline: 0 !important;' + '}';
					document.head.appendChild(styleEl);
				}
			}
		},
	};
})();

GEL.init();
