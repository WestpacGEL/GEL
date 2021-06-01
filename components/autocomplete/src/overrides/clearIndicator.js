/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ClearIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

export const ClearIndicator = (props) => {
	const { innerProps } = props;
	return <ClearIcon size="small" {...innerProps} />;
};

// ==============================
// Styles
// ==============================

const clearIndicatorStyles = () => ({});

// ==============================
// Attributes
// ==============================

const clearIndicatorAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultClearIndicator = {
	component: ClearIndicator,
	styles: clearIndicatorStyles,
	attributes: clearIndicatorAttributes,
};
