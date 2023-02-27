import { jsx, useMediaQuery, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const AlertBody = ({ state: _, ...rest }) => <Body {...rest} />;

const BlenderAlertBody = (props) => (
	<AlertBody
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

	return mq({
		label: getLabel('alert-body'),
		position: 'relative',
		flex: 1,
		top: [null, '0.125rem'],
		'a, h1, h2, h3, h4, h5, h6, ol, ul': {
			color: 'inherit !important',
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const bodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBody = {
	component: AlertBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};

export const blenderBody = {
	component: BlenderAlertBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
