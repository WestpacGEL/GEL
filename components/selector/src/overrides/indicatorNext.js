/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, getLabel } from '@westpac/core';
import { ArrowRightIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

const IndicatorNext = ({ state: _, ...rest }) => (
	<ArrowRightIcon size={['small', null, 'medium']} assistiveText={null} {...rest} />
);

const BlenderIndicatorNext = (props) => (
	<IndicatorNext
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
);

// ==============================
// Styles
// ==============================

const indicatorNextStyles = () => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return mq({
		label: getLabel('selector-option-indicatorNext'),
		position: 'relative',
		marginLeft: [SPACING(2), null, SPACING(3)], //gap
		flex: 'none',
		color: COLORS.primary,
		marginRight: [`-${SPACING(1, 'minor')}`, null, `-${SPACING(1)}`], //tweak
		transition: 'transform 0.2s ease',

		'button:hover &, button:focus &, a:hover &, a:focus &': {
			transform: `translateX(${SPACING(1)})`,
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const indicatorNextAttributes = () => ({
	'aria-hidden': 'true',
});

// ==============================
// Exports
// ==============================

export const defaultIndicatorNext = {
	component: IndicatorNext,
	styles: indicatorNextStyles,
	attributes: indicatorNextAttributes,
};

export const blenderIndicatorNext = {
	component: BlenderIndicatorNext,
	styles: indicatorNextStyles,
	attributes: indicatorNextAttributes,
};
