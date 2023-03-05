import { jsx, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const ModalBody = ({ state: _, ...rest }) => <Body {...rest} />;

const BlenderBody = (props) => (
	<ModalBody
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
	return {
		label: getLabel('modal-body'),
		padding: '1.125rem 1.5rem',
	};
};

// ==============================
// Attributes
// ==============================

const bodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBody = {
	component: ModalBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};

export const blenderBody = {
	component: BlenderBody,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
