import { jsx, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const ForkContent = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const forkContentStyles = (_, { selected }) => ({
	label: getLabel('fork-content'),
	display: !selected && 'none',
});

// ==============================
// Attributes
// ==============================

const forkContentAttributes = (_, { selected }) => ({
	'aria-hidden': !selected,
});

// ==============================
// Exports
// ==============================

export const defaultForkContent = {
	component: ForkContent,
	styles: forkContentStyles,
	attributes: forkContentAttributes,
};
