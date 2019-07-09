import weakMemo from '@emotion/weak-memoize';

const minWidth = width => `@media (min-width: ${width}px)`;
const mapBreakpoints = ([key, value]) => minWidth(value);

export const mediaqueries = weakMemo(breakpoints =>
	Object.entries(breakpoints).map(mapBreakpoints)
);
