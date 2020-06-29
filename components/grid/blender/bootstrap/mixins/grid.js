import { px, percentage } from '../_utils';
import { breakpointInfix, mediaBreakpointUp } from './breakpoints';

/// Grid system
//
// Generate semantic grid columns with these mixins.

export const makeRow = (gutter) => ({
	'--bs-gutter-x': gutter.map((g) => px(g)),
	'--bs-gutter-y': 0,

	display: 'flex',
	flex: '1 0 100%',
	flexWrap: 'wrap',
	marginTop: 'calc(var(--bs-gutter-y) * -1)',
	marginRight: 'calc(var(--bs-gutter-x) / -2)',
	marginLeft: 'calc(var(--bs-gutter-x) / -2)',
});

export const makeColReady = (gutter) => ({
	boxSizing: 'border-box',
	// Prevent columns from becoming too narrow when at smaller grid tiers by
	// always setting `width: 100%;`. This works because we set the width
	// later on to override this initial width.
	flexShrink: 0,
	width: '100%',
	maxWidth: '100%', // Prevent `.col-auto`, `.col` (& responsive variants) from breaking out the grid
	paddingRight: 'calc(var(--bs-gutter-x) / 2)',
	paddingLeft: 'calc(var(--bs-gutter-x) / 2)',
	marginTop: 'var(--bs-gutter-y)',
});

const makeCol = (size, columns) => ({
	flex: '0 0 auto',
	width: percentage(size / columns),
});

const makeColAuto = () => ({
	flex: '0 0 auto',
	width: 'auto',
});

const makeColOffset = (size, columns) => {
	const num = size / columns;
	return {
		marginLeft: num === 0 ? 0 : percentage(num),
	};
};

// Row columns
//
// Specify on a parent element(e.g., .row) to force immediate children into NN
// numberof columns. Supports wrapping to new lines, but does not do a Masonry
// style grid.
const rowCols = (count) => ({
	'& > *': {
		flex: '0 0 auto',
		width: percentage(1 / count),
	},
});

// Framework grid generation
//
// Used only by Bootstrap to generate the correct number of grid classes given
// any value of `$grid-columns`.

export const makeGridColumns = (columns, gutters, breakpoints, spacing, gridRowColumns = 6) => ({
	...Object.assign(
		{},
		...Object.entries(breakpoints).map(([bp, val]) => {
			let infix = breakpointInfix(bp);

			return mediaBreakpointUp(bp, val, {
				// Provide basic `.col-{bp}` classes for equal-width flexbox columns
				[`.col${infix}`]: {
					flex: '1 0 0%', // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
				},

				[`.row-cols${infix}-auto > *`]: {
					...makeColAuto(),
				},

				...(gridRowColumns > 0 &&
					Object.assign(
						{},
						...Array.from({ length: gridRowColumns }, (_, i) => ({
							[`.row-cols${infix}-${i + 1}`]: {
								...rowCols(i + 1),
							},
						}))
					)),

				[`.col${infix}-auto`]: {
					...makeColAuto(),
				},

				...(columns > 0 &&
					Object.assign(
						{},
						...Array.from({ length: columns }, (_, i) => ({
							[`.col${infix}-${i + 1}`]: {
								...makeCol(i + 1, columns),
							},
						})),

						// `$columns - 1` because offsetting by the width of an entire row isn't possible
						...Array.from({ length: columns }, (_, i) => ({
							[`.offset${infix}-${i}`]: {
								// Avoid emitting useless `.offset-0`
								...(!(infix === '' && i === 0) && makeColOffset(i, columns)),
							},
						}))
					)),

				// Gutters
				//
				// Make use of `.g-*`, `.gx-*` or `.gy-*` utilities to change spacing between the columns.
				...Object.assign(
					{},
					...Object.entries(spacing).map(([key, val]) => ({
						[`.g${infix}-${key}, .gx${infix}-${key}`]: {
							'--bs-gutter-x': val,
						},

						[`.g${infix}-${key}, .gy${infix}-${key}`]: {
							'--bs-gutter-y': val,
						},
					}))
				),
			});
		})
	),
});
