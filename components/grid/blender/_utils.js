export const rowMap = {
	columns: 12,
	gap: [12, 24],
};

// export const colMap = {};

// Utilities
export const px = (v) => (typeof v === 'number' ? `${v}px` : v);
export const round = (value, decimals = 6) =>
	Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
export const percentage = (p) => `${round(p * 100)}%`;

const breakpointInfix = (name, breakpoints) => `-${name}`;

// Container
export const makeContainer = (paddingX) => ({
	boxSizing: 'border-box',
	width: '100%',
	paddingLeft: paddingX,
	paddingRight: paddingX,
	marginLeft: 'auto',
	marginRight: 'auto',
});

// Grid system
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
const rowCols = (count) => ({
	'& > *': {
		flex: '0 0 auto',
		width: percentage(100 / count),
	},
});

// Framework grid generation
export const makeGridColumns = (columns, gutters, breakpoints, spacing, gridRowColumns = 6) => ({
	...Object.assign(
		{},
		...Object.entries(breakpoints).map(([bp, val]) => ({
			[`@media (min-width: ${px(val)})`]: {
				// Provide basic `.col-{bp}` classes for equal-width flexbox columns
				[`.col-${bp}`]: {
					flex: '1 0 0%', // Flexbugs #4: https://github.com/philipwalton/flexbugs#flexbug-4
				},

				[`.row-cols-${bp}-auto > *`]: {
					...makeColAuto(),
				},

				...(gridRowColumns > 0 &&
					Object.assign(
						{},
						...Array.from({ length: gridRowColumns }, (_, i) => ({
							[`.row-cols-${bp}-${i + 1}`]: {
								...rowCols(i + 1),
							},
						}))
					)),

				[`.col-${bp}-auto`]: {
					...makeColAuto(),
				},

				...(columns > 0 &&
					Object.assign(
						{},
						...Array.from({ length: columns }, (_, i) => ({
							[`.col-${bp}-${i + 1}`]: {
								...makeCol(i + 1, columns),
							},
						})),

						// `$columns - 1` because offsetting by the width of an entire row isn't possible
						...Array.from({ length: columns }, (_, i) => ({
							[`.offset-${bp}-${i}`]: {
								...(i > 0 && makeColOffset(i, columns)),
							},
						}))
					)),

				// Gutters
				/* ...Object.assign(
					{},

					...Object.entries(spacing).map(([key, value]) => ({
						[`.g-${bp}-${key}, .gx-${bp}-${key}`]: {
							'--bs-gutter-x': value,
						},

						[`.g-${bp}-${key}, .gy-${bp}-${key}`]: {
							'--bs-gutter-y': value,
						},
					}))
				), */
			},
		}))
	),
});
