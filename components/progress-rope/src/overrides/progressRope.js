/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const ProgressRope = ({ state: _, ...rest }) => <nav role="navigation" {...rest} />;

// ==============================
// Styles
// ==============================

const progressRopeStyles = () => ({ label: 'progressRope' });

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
	styles: progressRopeStyles,
	attributes: blenderAttributes,
};
