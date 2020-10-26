/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const Well = ({ state: { tag }, ...rest }) => <Body tag={tag} {...rest} />;

const BlenderWell = (props) => (
	<Well
		overrides={{
			Body: {
				styles: (styles) => {
					const blenderStyles = { ...styles };
					delete blenderStyles.label;
					return blenderStyles;
				},
			},
		}}
		{...props}
	/>
);
// ==============================
// Styles
// ==============================

const wellStyles = () => {
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

	return mq({
		label: getLabel('Well'),
		padding: [SPACING(2), null, SPACING(4)],
		marginBottom: SPACING(3),
		backgroundColor: COLORS.light,
		border: `1px solid ${COLORS.border}`,
		borderRadius: '0.1875rem',

		// Nested Well styling
		'& > &': {
			backgroundColor: '#fff',
			margin: `${SPACING(2)} 0`,
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const wellAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultWell = {
	component: Well,
	styles: wellStyles,
	attributes: wellAttributes,
};

export const blenderWell = {
	component: BlenderWell,
	styles: wellStyles,
	attributes: wellAttributes,
};
