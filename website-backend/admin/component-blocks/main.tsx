import { component, fields } from '@keystone-6/fields-document/component-blocks';
import { image } from './image';
import { heading } from './heading';
import { introSection } from './intro-section';
import { doAndAvoid } from './do-and-avoid';
import { colorSwatch } from './color-swatch';
import { codeExample, visionFilters } from './code-example';

export const componentBlocks = {
	heading,
	icons: component({ component: () => <span>Placeholder</span>, props: {}, label: 'Icons' }),
	symbols: component({ component: () => <span>Placeholder</span>, props: {}, label: 'Symbols' }),
	logos: component({ component: () => <span>Placeholder</span>, props: {}, label: 'Logos' }),
	pictograms: component({
		component: () => <span>Placeholder</span>,
		props: {},
		label: 'Pictograms',
	}),
	propsTable: component({
		component: () => <span>Placeholder</span>,
		props: {},
		label: 'Props table',
	}),
	image,
	introSection,
	doAndAvoid,
	colorSwatch,
	codeExample,
	visionFilters,
};
