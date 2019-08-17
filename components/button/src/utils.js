const minWidth = width => `@media (min-width: ${width})`;
const mapBreakpoints = ([key, value]) => minWidth(value);

export const mediaQueries = breakpoints => Object.entries(breakpoints).map(mapBreakpoints);
