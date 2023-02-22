import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const GroupBtnWrapper = ({ state: { headingsTag: Tag }, ...rest }) => <Tag {...rest} />;

// ==============================
// Styles
// ==============================

const groupButtonWrapperStyles = () => ({
	label: 'progressRope-groupBtnWrapper',
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

export const defaultGroupBtnWrapper = {
	component: GroupBtnWrapper,
	styles: groupButtonWrapperStyles,
	attributes: groupButtonWrapperAttributes,
};

export const blenderGroupBtnWrapper = {
	component: GroupBtnWrapper,
	styles: groupButtonWrapperStyles,
	attributes: groupButtonWrapperAttributes,
};
