/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

const Badge = ({ state, ...rest }) => <span {...rest} />;

const badgeStyles = (_, { look }) => {
	const { COLORS, TYPE } = useBrand();

	const styleMap = {
		primary: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		hero: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		neutral: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		faint: {
			color: COLORS.muted,
			backgroundColor: '#fff',
			borderColor: COLORS.border,
		},
		success: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		info: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		warning: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
		danger: {
			color: '#fff',
			backgroundColor: COLORS[look],
			borderColor: COLORS[look],
		},
	};

	return {
		border: `1px solid transparent`,
		borderRadius: '0.75rem',
		display: 'inline-block',
		fontSize: '0.875rem',
		lineHeight: 1,
		minWidth: '0.625rem',
		padding: '0.25rem 0.4375rem',
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		...TYPE.bodyFont[700],
		...styleMap[look],

		'@media print': {
			color: '#000',
			backgroundColor: '#fff',
			border: '1px solid #000',
		},
	};
};

const badgeAttributes = () => null;

export const defaultBadge = {
	component: Badge,
	styles: badgeStyles,
	attributes: badgeAttributes,
};
