import { px } from '../_utils';

// Minimum breakpoint width. Null for the smallest (first) breakpoint.
//
//    >> breakpoint-min(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    576px
export const breakpointMin = (name, breakpoints) => {
	const min = breakpoints[name];
	return min !== 0 ? min : null;
};

// Returns a blank string if smallest breakpoint, otherwise returns the name with a dash in front.
// Useful for making responsive utilities.
//
//    >> breakpoint-infix(xs, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    ""  (Returns a blank string)
//    >> breakpoint-infix(sm, (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px))
//    "-sm"
export const breakpointInfix = (name, breakpoints) =>
	breakpointMin(name, breakpoints) === null ? '' : `-${name}`;

// Media of at least the minimum breakpoint width. No query for the smallest breakpoint.
// Makes the @content apply to the given breakpoint and narrower.
export const mediaBreakpointUp = (name, breakpoints, content) => {
	const min = breakpointMin(name, breakpoints);
	return min ? { [`@media (min-width: ${px(min)})`]: content } : content;
};
