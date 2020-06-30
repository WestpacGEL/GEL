/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const ProgressRope = ({ state, ...rest }) => <nav role="navigation" {...rest} />;

// ==============================
// Styles
// ==============================

const progressRopeStyles = () => ({});

// ==============================
// Attributes
// ==============================

const progressRopeAttributes = (_, { assistiveText }) => ({
	'aria-label': assistiveText,
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
	attributes: progressRopeAttributes,
};
