import { useState } from 'react';

// need to include infinite
export const usePagination = ({ curr = 0, pageCount = 0, infinite = false } = {}) => {
	const [current, setCurrent] = useState(curr);
	const next = () => {
		if (infinite && current === pageCount - 1) {
			setCurrent(0);
		} else {
			setCurrent(current + 1);
		}
	};

	const previous = () => {
		if (infinite && current === 0) {
			setCurrent(pageCount - 1);
		} else if (current !== 0) {
			setCurrent(current - 1);
		}
	};

	return { next, previous, current, setCurrent };
};
