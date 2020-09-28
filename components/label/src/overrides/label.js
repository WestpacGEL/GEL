/** @jsx jsx */

import { jsx, useBrand, getLabel } from '@westpac/core';

const Label = ({ state: _, ...rest }) => <span {...rest} />;

const labelStyles = (_, { look }) => {
	const { COLORS, TYPE } = useBrand();

	let color = '#fff';
	if (look === 'faint') {
		color = COLORS.muted;
	}

	const styleMap = {
		primary: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		hero: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		neutral: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		faint: {
			color,
			backgroundColor: COLORS.light,
			border: `1px solid ${COLORS.border}`,
		},
		success: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		info: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		warning: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
		danger: {
			color,
			backgroundColor: COLORS[look],
			border: `1px solid ${COLORS[look]}`,
		},
	};

	return {
		label: getLabel('label', { look }),
		display: 'inline-block',
		appearance: 'none',
		borderRadius: '0.125rem',
		fontSize: '0.75rem',
		lineHeight: 'normal',
		padding: '0.0625rem 0.375rem',
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		...styleMap[look],
		...TYPE.bodyFont[400],

		':empty': {
			display: 'none',
		},

		'@media print': {
			color: '#000',
			backgroundColor: '#fff',
			border: '1px solid #000',
		},
	};
};

const labelAttributes = () => null;

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};
