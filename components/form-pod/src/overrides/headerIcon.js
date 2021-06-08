/** @jsx jsx */

import { jsx, useBrand, getLabel, useMediaQuery } from '@westpac/core';

// ==============================
// Component
// ==============================

const HeaderIcon = ({ state: { icon: Icon }, ...rest }) => <Icon size="large" {...rest} />;

// ==============================
// Styles
// ==============================

const headerIconStyles = () => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('formPod-header-icon'),
		position: [null, 'absolute'],
		right: [null, 0],
		bottom: [null, 0],
		display: 'inline-block',
		border: `1px solid ${COLORS.border}`,
		backgroundColor: '#fff',
		borderRadius: '50%',
		width: '4.125rem', //66px
		height: '4.125rem', //66px
		padding: '0.875rem', //14px, assuming a 36px icon
		textAlign: 'center',
		marginBottom: ['0.75rem', '-0.375rem'],
	})[0];
};

// ==============================
// Attributes
// ==============================

const headerIconAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultHeaderIcon = {
	component: HeaderIcon,
	styles: headerIconStyles,
	attributes: headerIconAttributes,
};
