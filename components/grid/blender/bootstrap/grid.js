import { makeRow, makeColReady, makeGridColumns } from './mixins/grid';
import { rowMap } from '../_utils';

const { columns, gap } = rowMap;

export const grid = (breakpoints) => ({
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

	...makeGridColumns(columns, gap, breakpoints),

	// Display

	// Align

	// Order

	// Margin

	// Padding
});
