import weakMemo from '@emotion/weak-memoize';
import { useBrand } from './Brand';
import facepaint from 'facepaint';

const minWidth = (width: number) => `@media (min-width: ${width}px)`;
const mapBreakpoints = ([key, value]: number[]) => minWidth(value);

// NOTE: `breakpoints` come through context from the brand via <GEL brand={brand} />
const paint = weakMemo(<Tbreakpoints>(breakpoints: Tbreakpoints) =>
	facepaint(Object.entries(breakpoints).map(mapBreakpoints))
);

interface Layout {
	breakpoints: Object;
}

export const useMediaQuery = () => {
	const { LAYOUT }: { LAYOUT: Layout } = useBrand();

	return paint(LAYOUT.breakpoints);
};
