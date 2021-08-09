export const useFocus = () => {
	if (typeof window !== 'undefined' && window.document && window.document.createElement) {
		// Let's make sure we only add the script once
		const hasScript = document.querySelectorAll('script[id="GELFocus"]').length > 0;

		if (!hasScript) {
			// Insert a script that:
			// - removes the "focus-visible" class to the body if somehow present
			// - listens for the tab key
			// - when tab key is pressed adds the "focus-visible" class and removes the listener
			const scriptEl = document.createElement('script');
			scriptEl.setAttribute('id', 'GELFocus');
			scriptEl.text = `
				function GELKeyHandler(event) {
					if (event.key === 'Tab') {
						document.body.classList.add('focus-visible');
					}
				};

				function GELClickHandler(event) {
					document.body.classList.remove('focus-visible');
				};

				document.body.classList.remove('focus-visible');
				document.addEventListener('keydown', GELKeyHandler);
				document.addEventListener('mousedown', GELClickHandler);
			`;
			document.body.insertBefore(scriptEl, document.body.firstChild);

			// Insert CSS style to hide all focus only when the "focus-visible" is absent
			const styleEl = document.createElement('style');
			styleEl.setAttribute('type', 'text/css');
			styleEl.innerHTML = `
				body:not(.focus-visible) :focus {
					outline: 0 !important;
				}
			`;
			document.head.appendChild(styleEl);
		}
	}
};
