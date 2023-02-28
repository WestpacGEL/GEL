import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ContactList = ({ state: _, ...rest }) => <ul {...rest} />;

// ==============================
// Styles
// ==============================

const contactListStyles = () => {
	return {
		label: getLabel('formPod-contact-list'),
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,

		'li + li': {
			marginLeft: '1.125rem',
		},
	};
};

// ==============================
// Attributes
// ==============================

const contactListAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultContactList = {
	component: ContactList,
	styles: contactListStyles,
	attributes: contactListAttributes,
};
