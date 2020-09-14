/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Body } from '@westpac/body';

// ==============================
// Component
// ==============================

const ModalBody = ({ state, ...rest }) => <Body {...rest} />;

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
