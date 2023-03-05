import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const PanelBody = ({ state: _, ...rest }) => <Body {...rest} />;

const BlenderBody = (props) => (
	<PanelBody
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

const bodyStyles = () => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return mq({ label: getLabel('panel-body'), padding: [SPACING(2), null, SPACING(4)] })[0];
};

// ==============================
// Attributes
// ==============================

const bodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBody = {
	component: PanelBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};

export const blenderBody = {
	component: BlenderBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
