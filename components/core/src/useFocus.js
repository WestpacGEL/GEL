export const useFocus = () => {
	const hasScript = document.querySelectorAll('script[id="GELFocus"]').length > 0;

	if (!hasScript) {
		const scriptEl = document.createElement('script');
		scriptEl.setAttribute('id', 'GELFocus');
		scriptEl.text = `
			function GELkeyHandler( event ) {
				console.log('hit!');
				if( event.key === 'Tab' ) {
					document.getElementsByTagName('body')[ 0 ].classList.remove('isMouseMode');
					document.removeEventListener('keydown', GELkeyHandler);
				}
			};

			document.getElementsByTagName('body')[ 0 ].classList.add('isMouseMode');
			window.document.addEventListener('keydown', GELkeyHandler);
		`;
		document.body.insertBefore(scriptEl, document.body.firstChild);

		const styleEl = document.createElement('style');
		styleEl.setAttribute('type', 'text/css');
		styleEl.innerHTML = `
			html body.isMouseMode *:focus {
				outline: 0 !important;
			}
		`;

		document.head.appendChild(styleEl);
	}
};
