import { jsx, getLabel } from '@westpac/core';
import { Fragment } from 'react';

// ==============================
// Component
// ==============================

const Content = ({ state: { separator }, children, ...rest }) => {
	const Wrapper = separator ? 'div' : Fragment;
	return <Wrapper {...(separator && rest)}>{children}</Wrapper>;
};

// ==============================
// Styles
// ==============================

const contentStyles = (_, { separator }) => {
	return {
		label: getLabel('repeater-content'),
		padding: separator && '0 1.125rem 2.625rem',
	};
};

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
