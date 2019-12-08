import { useState } from 'react';

// need to include infinite
export const usePagination = ({ pages = [], current = 0, infinite = false } = {}) => {
	const [curr, setCurr] = useState(current);
	const pageCount = pages.length;

	const setPage = (pages, curr) => {
		if (typeof pages[curr].onClick === 'function') {
			pages[curr].onClick(event, curr);
		}
		setCurr(curr);
	};

	const next = event => {
		if (curr === pageCount - 1) {
			// boundary
			if (infinite) {
				setPage(pages, 0, event);
			} else {
				setPage(pages, pageCount - 1, event);
			}
		} else {
			setPage(pages, curr + 1, event);
		}
	};

	const previous = event => {
		if (curr === 0) {
			// boundary
			if (infinite) {
				setPage(pages, pageCount - 1, event);
			} else {
				setPage(pages, 0, event);
			}
		} else if (curr !== 0) {
			setPage(pages, curr - 1, event);
		}
	};

	return { next, previous, current: curr, setCurrent: setCurr };
};
