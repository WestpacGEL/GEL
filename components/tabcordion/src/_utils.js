import { useRef, useEffect } from 'react';

// helper to keep track of previous state
export const usePrevious = (value) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};
