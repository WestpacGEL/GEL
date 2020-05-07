import { useState } from 'react';

// need to include infinite
export const usePagination = ({ pages = [], current = 0, infinite = false } = {}) => {
	const [curr, setCurr] = useState(current);
	const pageCount = pages.length;

	const setPage = (event, pages, curr) => {
		event.persist();

		if (typeof pages[curr].onClick === 'function') {
			pages[curr].onClick(event, curr);
		}
		setCurr(curr);
	};

	const next = (event) => {
		// https://reactjs.org/docs/events.html#event-pooling
		event.persist();

		if (curr === pageCount - 1) {
			// boundary
			if (infinite) {
				setPage(event, pages, 0);
			} else {
				setPage(event, pages, pageCount - 1);
			}
		} else {
			setPage(event, pages, curr + 1);
		}
	};

	const previous = (event) => {
		event.persist();

		if (curr === 0) {
			// boundary
			if (infinite) {
				setPage(event, pages, pageCount - 1);
			} else {
				setPage(event, pages, 0);
			}
		} else if (curr !== 0) {
			setPage(event, pages, curr - 1);
		}
	};

	return { next, previous, current: curr, setCurrent: setCurr, setPage };
};
