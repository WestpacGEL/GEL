// import { useEffect, useState } from 'react';

// export const useWindowSize = () => {
// 	const [windowSize, setWindowSize] = useState({
// 		width: undefined,
// 		height: undefined,
// 	});
// 	useEffect(() => {
// 		function handleResize() {
// 			setWindowSize({
// 				width: window.innerWidth,
// 				height: window.innerHeight,
// 			});
// 		}

// 		window.addEventListener('resize', handleResize);

// 		handleResize();

// 		return () => window.removeEventListener('resize', handleResize);
// 	}, []);

// 	return windowSize;
// };

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
