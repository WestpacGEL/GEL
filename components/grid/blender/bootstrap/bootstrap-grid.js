import { containers } from './containers';
import { grid } from './grid';
import { utilities } from './utilities';

export const bootstrapGrid = (breakpoints, spacing) => [
	containers,
	grid(breakpoints, spacing),
	utilities(breakpoints, spacing),
];
