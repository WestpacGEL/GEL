import React, { useLayoutEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

/**
 * Observes the width of `ref`, returns an integer
 */
export function useContainerQuery(ref) {
	const [width, setWidth] = useState('auto');

	// bail early without ref
	if (!ref) {
		throw new Error('You must pass a valid ref as the first argument.');
	}

	// Updates scheduled inside useLayoutEffect will be flushed synchronously,
	// before the browser has a chance to paint.
	useLayoutEffect(() => {
		// prepare the resize handler
		let resizeObserver = new ResizeObserver(([entry]) => {
			setWidth(entry.target.offsetWidth);
		});

		// bind the observer to the consumer DOM node
		resizeObserver.observe(ref.current);

		// cleanup after ourselves
		return () => {
			resizeObserver.disconnect(ref.current);
		};
	});

	// returns an integer
	return width;
}
