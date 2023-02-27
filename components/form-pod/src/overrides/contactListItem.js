import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ContactListItem = ({ state: _, ...rest }) => <li {...rest} />;

// ==============================
// Styles
// ==============================

const contactListItemStyles = () => {
	return { label: getLabel('formPod-contact-list'), display: 'inline-block' };
};

// ==============================
// Attributes
// ==============================

const contactListItemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultContactListItem = {
	component: ContactListItem,
	styles: contactListItemStyles,
	attributes: contactListItemAttributes,
};
