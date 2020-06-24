import { containers } from './containers';
import { grid } from './grid';

export const bootstrapGrid = (breakpoints) => ({
	...containers,
	...grid(breakpoints),
});
