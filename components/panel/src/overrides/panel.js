/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

// import { blenderReconciler } from './_utils';
import { headerStyleMap } from './header';

// ==============================
// Component
// ==============================

const Panel = ({ state, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

// const propStyleMapShape = {
// 	prop: [{label, propValue: 'styles', propValue2: 'styles'} ],
//  prop2: [{label, propValue: 'styles', propValue2: 'styles'} ],
// }

const generateNestedCSS = (propName, propValue, nestedStyles = []) => {
	let styles = {};

	const propStyles = nestedStyles[propName];

	// I can probably make this better...
	if (propStyles) {
		propStyles.forEach((p) => {
			styles[`.GEL-${p.label}`] = p[propValue];
		});
	}

	return styles;
};

const panelStyles = (_, { look, plainCSSProp }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		hero: {
			borderColor: COLORS.hero,
		},
		faint: {
			borderColor: COLORS.border,
		},
	};

	// Blender specific stuff
	let label = 'panel';

	const propStyleMap = {
		look: [headerStyleMap()],
	};

	switch (plainCSSProp) {
		case 'look':
			label = `${label}-${look}`;
			break;
		default:
			break;
	}

	const nestedCSS = generateNestedCSS(plainCSSProp, look, propStyleMap);

	return {
		label,
		marginBottom: '1.3125rem',
		backgroundColor: '#fff',
		border: `1px solid ${look ? styleMap[look].borderColor : ''}`, // like this to generate a base style...
		borderRadius: '0.1875rem',

		table: {
			overflow: 'hidden', //clip overflow for rounded corners
			marginBottom: 0,
			borderBottomRightRadius: `calc(0.1875rem - 1px)`,
			borderBottomLeftRadius: `calc(0.1875rem - 1px)`,
		},

		'table caption': {
			padding: ['0.75rem 0.75rem 0 0.75rem', null, '1.5rem 1.5rem 0 1.5rem'],
		},

		// these styles are only applied when generating styles for the blender
		...nestedCSS,
	};
};

// ==============================
// Attributes
// ==============================

const panelAttributes = () => null;

const blenderAttributes = (_, { look }) => ({ className: `GEL-panel-${look}` });

// ==============================
// Exports
// ==============================

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

export const blenderPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: blenderAttributes,
};
