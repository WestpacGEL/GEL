/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Form = ({ state: { tag: Tag }, ...rest }) => <Tag {...rest} />;

// ==============================
// Styles
// ==============================

const formStyles = () => {
	return { label: getLabel('form') };
};

// ==============================
// Attributes
// ==============================

const formAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultForm = {
	component: Form,
	styles: formStyles,
	attributes: formAttributes,
};
