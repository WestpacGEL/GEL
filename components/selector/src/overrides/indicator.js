/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const Indicator = ({ state: { type }, ...rest }) =>
	type === 'button' || type === 'link' ? (
		<ArrowRightIcon size="medium" assistiveText={null} {...rest} />
	) : (
		<div {...rest} />
	);

const BlenderIndicator = (props) =>
	props.state.type === 'button' || props.state.type === 'link' ? (
		<Indicator
			overrides={{
				Icon: {
					styles: (styles) => {
						const blenderStyles = { ...styles };
						delete blenderStyles.label;
						return blenderStyles;
					},
				},
			}}
			{...props}
		/>
	) : (
		<Indicator {...props} />
	);

// ==============================
// Styles
// ==============================

const indicatorStyles = (_, { type }) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option-indicator'),
		position: 'relative',
		marginLeft: [SPACING(2), null, SPACING(3)], //gap
		flex: 'none',

		// Next indicator (ArrowNextIcon)
		...((type === 'button' || type === 'link') && {
			color: COLORS.primary,
			marginRight: `-${SPACING(1)}`, //tweak
			transition: 'transform 0.2s ease',

			'button:hover &, button:focus &, a:hover &, a:focus &': {
				transform: `translateX(${SPACING(1)})`,
			},
		}),

		// Check indicator
		...((type === 'checkbox' || type === 'radio') && {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: '24px', // medium icon size
			height: '24px', // medium icon size
			flex: 'none',

			'input:checked + div &::after': {
				content: '""',
				display: 'block',
				boxSizing: 'border-box',
				position: 'relative',
				top: '-0.125rem', //tweak
				width: '1.25rem',
				height: '0.625rem',
				border: `solid ${COLORS.hero}`,
				borderWidth: '0 0 0.1875rem 0.1875rem',
				transform: 'rotate(-54deg)',
			},
		}),
	})[0];
};

// ==============================
// Attributes
// ==============================

const indicatorAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultIndicator = {
	component: Indicator,
	styles: indicatorStyles,
	attributes: indicatorAttributes,
};

export const blenderIndicator = {
	component: BlenderIndicator,
	styles: indicatorStyles,
	attributes: indicatorAttributes,
};
