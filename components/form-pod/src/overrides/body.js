/** @jsx jsx */

import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const Body = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const bodyStyles = (_, { expanded }) => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('formPod-panel-body'),
		padding: expanded
			? ['1.875rem 0.75rem', '3rem 2.25rem']
			: ['1.875rem 0.75rem', '3.75rem 13%', '3.75rem 6%', '3.75rem 13%'],
	})[0];
};

// ==============================
// Attributes
// ==============================

const bodyAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultBody = {
	component: Body,
	styles: bodyStyles,
	attributes: bodyAttributes,
};
