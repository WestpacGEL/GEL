import { px } from '../_utils';

// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
// Useful for making responsive utilities.
export const breakpointInfix = (name) => (name === 'xs' ? '' : `-${name}`);

// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
export const mediaBreakpointUp = (name, val, obj) =>
	name !== 'xs' ? { [`@media (min-width: ${px(val)})`]: obj } : obj;
