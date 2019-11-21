import { useState } from 'react';

export const usePagination = (curr = 0) => {
	const [current, setCurrent] = useState(curr);
	const next = () => {
		setCurrent(current + 1);
	};

	const previous = () => {
		setCurrent(current - 1);
	};

	return { next, previous, current, setCurrent };
};
