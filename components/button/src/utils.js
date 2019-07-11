const minWidth = width => `@media (min-width: ${width}px)`;
const mapBreakpoints = ([key, value]) => minWidth(value);

export const mediaqueries = breakpoints => Object.entries(breakpoints).map(mapBreakpoints);