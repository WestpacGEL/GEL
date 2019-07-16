import facepaint from 'facepaint';
import weakMemo from '@emotion/weak-memoize';

const minWidth = width => `@media (min-width: ${width}px)`;
const mapBreakpoints = ([key, value]) => minWidth(value);

// NOTE: `breakpoints` come through context from the brand via <GEL brand={brand} />
export const paint = weakMemo(breakpoints =>
	facepaint(Object.entries(breakpoints).map(mapBreakpoints))
);
