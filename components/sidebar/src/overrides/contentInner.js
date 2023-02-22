import { jsx, getLabel } from '@westpac/core';
import { forwardRef } from 'react';
// ==============================
// Component
// ==============================

const ContentInner = forwardRef(({ state: _, ...rest }, ref) => <div ref={ref} {...rest} />);
ContentInner.displayName = 'ContentInner';

// ==============================
// Styles
// ==============================

const contentInnerStyles = () => ({
	label: getLabel('sidebar-content-inner'),
	flex: 1,
	height: '100%',
	overflowY: 'auto',
	display: 'flex',
	flexDirection: 'column',
	padding: '0 1.875rem',
});

// ==============================
// Attributes
// ==============================

const contentInnerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultContentInner = {
	component: ContentInner,
	styles: contentInnerStyles,
	attributes: contentInnerAttributes,
};
