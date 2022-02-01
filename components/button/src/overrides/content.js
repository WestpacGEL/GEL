import React, { Fragment } from 'react';

// ==============================
// Component
// ==============================

const Content = ({ state: _, children }) => <Fragment>{children}</Fragment>;

// ==============================
// Styles
// ==============================

const contentStyles = () => ({
	label: 'button-content',
});

// ==============================
// Attributes
// ==============================

const contentAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultContent = {
	component: Content,
	styles: contentStyles,
	attributes: contentAttributes,
};
