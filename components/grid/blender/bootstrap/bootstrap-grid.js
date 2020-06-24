import { containers } from './containers';
import { grid } from './grid';

export const bootstrapGrid = (breakpoints, spacing) => ({
	...containers,
	...grid(breakpoints, spacing),
});
