/** @jsx jsx */

import { jsx, useBrand, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const Preheading = ({ state: _, ...rest }) => <p {...rest} />;

// ==============================
// Styles
// ==============================

const preheadingStyles = (_, { icon }) => {
	const { COLORS, TYPE } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('formPod-header-preheading'),
		display: [null, null, 'none'],
		color: COLORS.muted,
		margin: '0 0 0.375rem',
		textTransform: 'uppercase',
		fontSize: '0.6875rem',
		...TYPE.bodyFont[700],
		...(icon && { marginRight: [null, '4.125rem'], paddingRight: [null, '0.75rem'] }),
	})[0];
};

// ==============================
// Attributes
// ==============================

const preheadingAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultPreheading = {
	component: Preheading,
	styles: preheadingStyles,
	attributes: preheadingAttributes,
};
