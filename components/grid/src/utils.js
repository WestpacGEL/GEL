import facepaint from 'facepaint';

const minWidth = width => `@media (min-width: ${width}px)`;
const mapBreakpoints = ([key, value]) => minWidth(value);

// NOTE: `breakpoints` come through context from the brand via <GEL brand={brand} />
// TODO: investigate perf for facepaint. should happen at build time, with no
// cost to the user -- need to confirm.
export const paint = breakpoints => facepaint(Object.entries(breakpoints).map(mapBreakpoints));
