import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const ProgressRope = ({ state: _, ...rest }) => <nav role="navigation" {...rest} />;

// ==============================
// Styles
// ==============================

const progressRopeStyles = () => ({ label: 'progressRope' });

const blenderStyles = () => ({
	...progressRopeStyles(),

	// GroupList
	[`.__convert__progressRope-groupList:not(.__convert__progressRope-groupList-show)`]: {
		display: 'none',
	},
});

// ==============================
// Attributes
// ==============================

const progressRopeAttributes = (_, { assistiveText }) => ({
	'aria-label': assistiveText,
});

const blenderAttributes = (_, { assistiveText }) => ({
	'aria-label': assistiveText,
	'data-js': 'progressRope__version__',
});

// ==============================
// Exports
// ==============================

export const defaultProgressRope = {
	component: ProgressRope,
	styles: progressRopeStyles,
	attributes: progressRopeAttributes,
};

export const blenderProgressRope = {
	component: ProgressRope,
	styles: blenderStyles,
	attributes: blenderAttributes,
};
