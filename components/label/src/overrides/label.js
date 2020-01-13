/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

export const Label = ({ look, value, ...props }) => {
	let Tag = 'span';

	if (props.href) {
		Tag = 'a';
	}
	if (props.onClick) {
		Tag = 'button';
	}

	return <Tag type={Tag === 'button' ? 'button' : undefined} {...props} />;
};

export const labelStyles = (_, { look, href, onClick }) => {
	const { COLORS, TYPE } = useBrand();

	let color = '#fff';
	if (look === 'faint') {
		color = COLORS.muted;
	}

	const styleMap = {
		primary: {
			css: {
				color,
				backgroundColor: COLORS[look],
				border: `1px solid ${COLORS[look]}`,
			},
			hoverCSS: {
				backgroundColor: COLORS.tints[`${look}50`],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		hero: {
			css: {
				color,
				backgroundColor: COLORS[look],
				border: `1px solid ${COLORS[look]}`,
			},
			hoverCSS: {
				backgroundColor: COLORS.tints[`${look}50`],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		neutral: {
			css: {
				color,
				backgroundColor: COLORS[look],
				border: `1px solid ${COLORS[look]}`,
			},
			hoverCSS: {
				backgroundColor: COLORS.tints[`${look}50`],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		faint: {
			css: {
				color,
				backgroundColor: COLORS.light,
				border: `1px solid ${COLORS.border}`,
			},
			hoverCSS: {
				backgroundColor: '#fff',
			},
		},
		success: {
			css: {
				color,
				backgroundColor: COLORS[look],
				border: `1px solid ${COLORS[look]}`,
			},
			hoverCSS: {
				backgroundColor: COLORS.tints[`${look}50`],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		info: {
			css: {
				color,
				backgroundColor: COLORS[look],
				border: `1px solid ${COLORS[look]}`,
			},
			hoverCSS: {
				backgroundColor: COLORS.tints[`${look}50`],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		warning: {
			css: {
				color,
				backgroundColor: COLORS[look],
				border: `1px solid ${COLORS[look]}`,
			},
			hoverCSS: {
				backgroundColor: COLORS.tints[`${look}50`],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
		danger: {
			css: {
				color,
				backgroundColor: COLORS[look],
				border: `1px solid ${COLORS[look]}`,
			},
			hoverCSS: {
				backgroundColor: COLORS.tints[`${look}50`],
				borderColor: COLORS.tints[`${look}50`],
			},
		},
	};

	return {
		display: 'inline-block',
		appearance: 'none',
		borderRadius: '0.125rem',
		fontSize: '0.75rem',
		lineHeight: 'normal',
		padding: '0.0625rem 0.375rem',
		textAlign: 'center',
		verticalAlign: 'baseline',
		whiteSpace: 'nowrap',
		...styleMap[look].css,
		...TYPE.bodyFont[400],

		':empty': {
			display: 'none',
		},

		// Link/button Label styling
		...(href || onClick
			? {
					textDecoration: 'none',
					':hover, :focus': {
						cursor: 'pointer',
						...styleMap[look].hoverCSS,
					},
			  }
			: {}),

		'@media print': {
			color: '#000',
			backgroundColor: '#fff',
			border: '1px solid #000',
		},
	};
};
