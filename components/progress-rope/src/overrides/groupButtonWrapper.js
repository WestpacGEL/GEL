/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const GroupButtonWrapper = ({ state, ...rest }) => <h3 {...rest} />;

// ==============================
// Styles
// ==============================

const groupButtonWrapperStyles = () => ({
	label: 'progressRope-group-btn-wrapper',
	margin: 0,
	fontSize: 'inherit',
});

// ==============================
// Attributes
// ==============================

const groupButtonWrapperAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultGroupButtonWrapper = {
	component: GroupButtonWrapper,
	styles: groupButtonWrapperStyles,
	attributes: groupButtonWrapperAttributes,
};

export const blenderGroupButtonWrapper = {
	component: GroupButtonWrapper,
	styles: groupButtonWrapperStyles,
	attributes: groupButtonWrapperAttributes,
};
