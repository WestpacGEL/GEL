import { containers } from './containers';
import { grid } from './grid';
import { utilities } from './utilities';

export const bootstrapGrid = (breakpoints, spacing, columns, gap) => [
	containers,
	grid(breakpoints, spacing, columns, gap),
	utilities(breakpoints, spacing),
];
