import { makeRow, makeColReady, makeGridColumns } from './mixins/grid';

export const grid = (breakpoints, spacing, columns, gap) => ({
	// Row
	//
	// Rows contain your columns.

	'.row': {
		...makeRow(gap),

		'> *': {
			...makeColReady(gap),
		},
	},

	// Columns
	//
	// Common styles for small and large grid columns

	...makeGridColumns(columns, gap, breakpoints, spacing),
});
