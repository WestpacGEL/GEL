/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Fragment } from 'react';

// ==============================
// Component
// ==============================

const Content = ({ state, children }) => <Fragment>{children}</Fragment>;

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
