import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
import { GEL } from '@westpac/core';
import brand from '@westpac/wbc';
import { image } from './image';
import { heading } from './heading';
import { introSection } from './intro-section';
import { doAndAvoid } from './do-and-avoid';
import { colorSwatch } from './color-swatch';
import { codeExample, visionFilters } from './code-example';
// @ts-ignore
import { Pictograms } from '../../../website/dynamic-blocks/pictograms';
// @ts-ignore
import { Icons } from '../../../website/dynamic-blocks/icons';
// @ts-ignore
import { Symbols } from '../../../website/dynamic-blocks/symbols';
// @ts-ignore
import { Logos } from '../../../website/dynamic-blocks/logos';

export const componentBlocks = {
	heading,
	icons: component({
		component: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Icons.component />
				</GEL>
			</NotEditable>
		),
		props: {},
		label: 'Icons',
	}),
	symbols: component({
		component: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Symbols.component />
				</GEL>
			</NotEditable>
		),
		props: {},
		label: 'Symbols',
	}),
	logos: component({
		component: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Logos.component />
				</GEL>
			</NotEditable>
		),
		props: {},
		label: 'Logos',
	}),
	pictograms: component({
		component: () => (
			<NotEditable>
				<GEL brand={brand}>
					<Pictograms.component />
				</GEL>
			</NotEditable>
		),
		props: {},
		label: 'Pictograms',
	}),
	propsTable: component({
		component: () => <NotEditable>Preview not available</NotEditable>,
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
