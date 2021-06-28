/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const FooterItem = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const footerItemStyles = (_, { position }) => {
	return { label: getLabel('formPod-footer-item'), marginLeft: position === 'right' && 'auto' };
};

// ==============================
// Attributes
// ==============================

const footerItemAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFooterItem = {
	component: FooterItem,
	styles: footerItemStyles,
	attributes: footerItemAttributes,
};
