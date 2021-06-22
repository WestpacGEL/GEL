/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';
import { Fragment } from 'react';

// ==============================
// Component
// ==============================

const Fork = ({ state: _, children }) => <Fragment>{children}</Fragment>;

// ==============================
// Styles
// ==============================

const forkStyles = () => ({
	label: getLabel('fork'),
});

// ==============================
// Attributes
// ==============================

const forkAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFork = {
	component: Fork,
	styles: forkStyles,
	attributes: forkAttributes,
};
