/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ModalContent = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const modalContentStyles = () => ({
	label: getLabel('modal-content'),
	position: 'relative',
	backgroundColor: '#fff',
	borderRadius: '0.1875rem',
	boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
	pointerEvents: 'auto',
});

// ==============================
// Attributes
// ==============================

const modalContentAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultModalContent = {
	component: ModalContent,
	styles: modalContentStyles,
	attributes: modalContentAttributes,
};
