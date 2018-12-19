import facepaint from 'facepaint';

// ==============================
// Presets and Helper
// ==============================

export const BREAK_POINTS = { xs: 576, sm: 768, md: 992, lg: 1200 };

const mediaQuery = (minmax, bp, prefix) => {
	let val = BREAK_POINTS[bp];

	if (!val) {
		const availableBreakpoints = Object.keys(BREAK_POINTS).join(', ');
		throw new TypeError(`Couldn't find "${bp}" in available breakpoints (${availableBreakpoints})`);
	}

	// NOTE: value adjustment
	// To avoid competing media queries we make a one pixel adjustment (down) to
	// "max-width" breakpoints
	if (minmax === 'max-width') {
		val -= 1;
	}

	return `${prefix ? '@media ' : ''}(${minmax}: ${val}px)`;
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

export const mqAbove = (bp, prefix = true) => mediaQuery('min-width', bp, prefix);

export const mqBelow = (bp, prefix = true) => mediaQuery('max-width', bp, prefix);

export const mqBetween = (above, below) => {
	const min = mqAbove(above);
	const max = mqBelow(below, false);

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
