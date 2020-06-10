/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

export const ProgressBar = ({ state, ...rest }) => <div {...rest} />;

export const progressBarStyles = (_, { look }) => {
	const { COLORS } = useBrand();

	const styleMap = {
		default: {
			height: '1.5rem',
			borderRadius: '1.5rem',
		},
		skinny: {
			height: '0.625rem',
			borderRadius: '0.625rem',
		},
	};

	return {
		label: getLabel('progressbar', { look }),
		marginBottom: '1.3125rem',
		overflow: 'hidden',
		backgroundColor: '#fff',
		border: `1px solid ${COLORS.border}`,
		padding: '0.0625rem',
		position: 'relative',
		boxSizing: 'border-box',
		...styleMap[look],
	};
};

const progressBarAttributes = (_, { value }) => ({
	role: 'progressbar',
	'aria-valuemin': '0',
	'aria-valuemax': '100',
	'aria-valuenow': value,
	'aria-valuetext': `${value}% complete`,
	'aria-live': 'polite',
});

export const defaultProgressBar = {
	component: ProgressBar,
	styles: progressBarStyles,
	attributes: progressBarAttributes,
};
