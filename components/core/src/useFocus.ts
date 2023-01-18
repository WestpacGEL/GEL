import { useEffect } from 'react';

export const useFocus = () => {
	useEffect(() => {
		const body = document.body;
		const styleTag = document.getElementById('useFocusStyle');
		if (!body || styleTag) {
			return;
		}
		const styleEl = document.createElement('style');
		styleEl.setAttribute('type', 'text/css');
		styleEl.setAttribute('id', 'useFocusStyle');
		styleEl.innerHTML = `
				.isMouseMode :focus {
					outline: 0 !important;
				}
			`;
		document.head.appendChild(styleEl);
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Tab') {
				body.classList.remove('isMouseMode');
			}
		};
		const handleMouseDown = () => {
			body.classList.add('isMouseMode');
		};
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handleMouseDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handleMouseDown);
			document.head.removeChild(styleEl);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
};
