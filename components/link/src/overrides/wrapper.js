import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Wrapper = ({ state: { type }, children, ...rest }) =>
	type === 'standalone' ? <div {...rest}>{children}</div> : children;

// ==============================
// Styles
// ==============================

const wrapperStyles = () => ({});

// ==============================
// Attributes
// ==============================

const wrapperAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultWrapper = {
	component: Wrapper,
	styles: wrapperStyles,
	attributes: wrapperAttributes,
};
