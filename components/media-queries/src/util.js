import facepaint from 'facepaint';

// ==============================
// Presets and Helper
// ==============================

export const BREAK_POINTS = { xs: 576, sm: 768, md: 992, lg: 1200 };

const mediaQuery = (minmax, bp) => {
	const val = BREAK_POINTS[bp];

	if (!val) {
		const availableBreakpoints = Object.keys(BREAK_POINTS).join(', ');
		throw new TypeError(`Couldn't find "${bp}" in available breakpoints (${availableBreakpoints})`);
	}

	return `@media (${minmax}: ${val}px)`;
};

// ==============================
// Query strings
// ==============================

/**
 * Use ES6 dynamic keys
 * {
 * 	 width: '100%',
 *
 * 	 [mqAbove('xs')]: {
 * 		 width: 200,
 * 	 }
 *  }
 */

export const mqAbove = bp => mediaQuery('min-width', bp);

export const mqBelow = bp => mediaQuery('max-width', bp);

export const mqBetween = (above, below) => {
	const min = mediaQuery('min-width', above);
	const max = mediaQuery('max-width', zbelow);

	return `${min} and ${max}`;
};

// ==============================
// Must be used with emotion
// ==============================

export const mqValues = facepaint(Object.keys(BREAK_POINTS).map(key => mqAbove(key)));

/*
	mqValues({
		color: 'red',
		width: ['25%', '50%', '75%', '100%'],
	});

	color: "red"
	width: "25%"
	@media (min-width: 576px) {
		width: "50%"
	}
	@media (min-width: 768px) {
		width: "75%"
	}
	@media (min-width: 992px) {
		width: "100%"
	}
*/
