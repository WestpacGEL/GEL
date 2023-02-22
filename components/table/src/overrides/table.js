import {
	jsx,
	useBrand,
	getLabel,
	classNames,
	getModifier,
	styleReconciler,
	formatClassName,
} from '@westpac/core';
import { Body } from '@westpac/body';

import { defaultProps } from '../Table';
import { nestedTdStyles } from './td';
import { nestedTfootStyles } from './tfoot';
import { nestedThStyles } from './th';
import { nestedTheadStyles } from './thead';

// ==============================
// Component
// ==============================

const Table = ({ state: _, ...rest }) => <Body tag="table" {...rest} />;

const BlenderTable = (props) => (
	<Table
		overrides={{
			Body: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
				component: ({ state: { tag: Tag }, className, ...rest }) => (
					<Tag className={formatClassName(className)} {...rest} />
				),
			},
		}}
		{...props}
	/>
);

// ==============================
// Styles
// ==============================

const tableStyles = (_, { striped }) => {
	const { COLORS, SPACING } = useBrand();

	return {
		label: getLabel('table'),
		width: '100%',
		maxWidth: '100%',
		marginBottom: SPACING(4),
		backgroundColor: '#fff',
		borderCollapse: 'collapse',

		// Odd row
		'tbody > tr:nth-of-type(even)': {
			backgroundColor: striped && COLORS.light,

			':hover': {
				// for blender
				backgroundColor: striped && COLORS.light,
			},
		},

		// for blender
		'tbody > tr:nth-of-type(odd):hover': {
			backgroundColor: striped && 'transparent',
		},

		'tbody > tr': {
			transition: !striped ? 'background 0.2s ease' : 'none',
			':hover': {
				backgroundColor: !striped && COLORS.background,
			},
		},

		// Adjacent `tbody` elements
		'tbody + tbody': {
			borderTop: `2px solid ${COLORS.hero}`,
		},
	};
};

// ==============================
// Blender Styles
// ==============================

const blenderStyles = (_, { striped, bordered }) => {
	const props = { striped, bordered };
	const baseStyles = tableStyles(_, defaultProps);

	let modifiers = getModifier(defaultProps, props);
	if (!modifiers.length) return baseStyles;

	const modifierStyles = tableStyles(_, props);
	const reconciledStyles = styleReconciler(baseStyles, modifierStyles);

	let label = baseStyles.label;
	const modifier = modifiers[0];

	switch (modifier) {
		default:
			label = `${label}-${modifier}`;
			break;
	}

	return {
		label,
		...reconciledStyles,
		...nestedTfootStyles(props),
		...nestedTheadStyles(props),
		...nestedTdStyles(props),
		...nestedThStyles(props),
	};
};

// ==============================
// Attributes
// ==============================

const tableAttributes = () => null;

const blenderAttributes = (_, { striped, bordered }) => ({
	className: classNames({
		[`__convert__table-striped`]: striped,
		[`__convert__table-bordered`]: bordered,
	}),
});

// ==============================
// Exports
// ==============================

export const defaultTable = {
	component: Table,
	styles: tableStyles,
	attributes: tableAttributes,
};

export const blenderTable = {
	component: BlenderTable,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
