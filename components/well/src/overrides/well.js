import { jsx, useBrand, useMediaQuery, getLabel, css } from '@westpac/core';
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
					const bodyStyles = { ...styles };
					delete bodyStyles.label;
					return bodyStyles;
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
		label: getLabel('well'),
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
// Blender Styles
// ==============================

const blenderStyles = () => {
	const baseStyles = wellStyles();

	// Make the `& > &` selector work for Blender, which parses CSS slightly differently
	delete Object.assign(baseStyles, { ['> &']: baseStyles['& > &'] })['& > &'];

	// Need & to resolve as immediate parent instead of all parents
	const resolvedStyles = css(baseStyles).styles.replace(/&/g, `.__convert__${baseStyles.label}`);

	return css`
		${resolvedStyles}
	`;
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
	styles: blenderStyles,
	attributes: wellAttributes,
};
