import { useEffect, useState } from 'react';

let isBrowser = typeof window !== 'undefined';

function getSize() {
	if (isBrowser) {
		return {
			height: window.innerHeight,
			width: window.innerWidth,
		};
	}
	return {
		height: 0,
		width: 0,
	};
}

export function useWindowSize() {
	let [windowSize, setWindowSize] = useState(getSize());

	useEffect(() => {
		function handleResize() {
			setWindowSize(getSize());
		}
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [setWindowSize]);

	return windowSize;
}
