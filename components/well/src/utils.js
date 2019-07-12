import facepaint from 'facepaint';

const minWidth = width => `@media (min-width: ${width}px)`;
const mapBreakpoints = ([key, value]) => minWidth(value);

// NOTE: `breakpoints` come through context from the brand via <GEL brand={brand} />
export const paint = breakpoints => facepaint(Object.entries(breakpoints).map(mapBreakpoints));
