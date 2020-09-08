/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Tbody = ({ state, ...rest }) => <tbody {...rest} />;

// ==============================
// Styles
// ==============================

const tbodyStyles = () => ({ label: getLabel('table-tbody') });

// ==============================
// Attributes
// ==============================

const tbodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultTBody = {
	component: Tbody,
	styles: tbodyStyles,
	attributes: tbodyAttributes,
};
