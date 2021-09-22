/** @jsx jsx */

import { Fragment } from 'react';
import { Global, jsx, css, useBrand } from '@westpac/core';
import { sizeMap as textInputSizeMap, getHeight, getMaxWidth } from '@westpac/text-input';
import { sizeMap as buttonSizeMap } from '@westpac/button';

// ==============================
// Component
// ==============================

const DatePicker = ({ state: _, ...rest }) => {
	const { COLORS } = useBrand();

	return (
		<Fragment>
			<Global
				styles={css`
					:root {
						--duet-color-primary: ${COLORS.primary};
						--duet-color-text: ${COLORS.text};
						--duet-color-text-active: #fff;
						--duet-color-placeholder: ${COLORS.tints.text50};
						--duet-color-button: ${COLORS.background};
						--duet-color-surface: #fff;
						--duet-color-overlay: rgba(0, 0, 0, 0.5);
						--duet-color-border: ${COLORS.borderDark};

						--duet-font: inherit;
						--duet-font-normal: 400;
						--duet-font-bold: 600;

						--duet-radius: 3px;
						--duet-z-index: 600;
					}
				`}
			/>
			<div {...rest} />
		</Fragment>
	);
};

// ==============================
// Styles
// ==============================

const datePickerStyles = (_, { block, size }) => {
	const { COLORS, PACKS } = useBrand();

	const toggleWidthMap = {
		small: '37px',
		medium: '43px',
		large: '55px',
		xlarge: '61px',
	};

	const width = 7; //x times width of 'W'

	// We'll add `!important` to focus state for text inputs so they are always visible even with the useFocus helper
	const focus = { ...PACKS.focus };

	return {
		display: !block && 'inline-block',

		/* Input */
		'.duet-date__input': {
			fontSize: textInputSizeMap[size].fontSize,
			height: getHeight(size),
			lineHeight: textInputSizeMap[size].lineHeight,
			padding: textInputSizeMap[size].padding.join(' '),
			paddingRight: `calc(${toggleWidthMap[size]} + ${textInputSizeMap[size].padding[1]})`,
			maxWidth: !block && getMaxWidth(size, width, toggleWidthMap[size]),

			':focus': {
				borderColor: COLORS.borderDark,
				boxShadow: 'none',
				outline: `${focus.outline} !important`,
				outlineWidth: `${focus.outlineWidth} !important`,
				outlineOffset: `${focus.outlineOffset} !important`,
			},
		},

		/* Calendar button */
		'.duet-date__toggle': {
			boxShadow: 'none',
			borderLeft: `1px solid ${COLORS.borderDark}`,
			backgroundColor: COLORS.light,
			padding: buttonSizeMap[size].padding,
			fontSize: buttonSizeMap[size].fontSize,
			width: 'auto',
			touchAction: 'manipulation',
			whiteSpace: 'nowrap',
			transition: 'background 0.2s ease, color 0.2s ease',

			'&:hover, &:active': {
				backgroundColor: '#fff',
			},
			':focus': {
				boxShadow: 'none',
				outline: focus.outline,
				outlineWidth: focus.outlineWidth,
				outlineOffset: focus.outlineOffset,
			},
		},
		// Temp solution, until Duet allow configurable icon https://github.com/duetds/date-picker/issues/40
		'.duet-date__toggle-icon': {
			width: `${size === 'small' || size === 'medium' ? '18px' : '24px'}`,
			height: `${size === 'small' || size === 'medium' ? '18px' : '24px'}`,
			backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23${COLORS.muted.substring(
				1
			)}' fill-rule='evenodd' d='M20,2 L22,2 C23.1045695,2 24,2.8954305 24,4 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,4 C-1.3527075e-16,2.8954305 0.8954305,2 2,2 L4,2 L4,0 L6,0 L6,2 L18,2 L18,0 L20,0 L20,2 Z M2,8 L2,22 L22,22 L22,8 L2,8 Z M14,14 L20,14 L20,20 L14,20 L14,14 Z'%3E%3C/path%3E%3C/svg%3E")`,
			backgroundSize: 'cover',
			flexBasis: 'auto', //reset, causes issues in IE with our temp icon approach

			svg: {
				display: 'none', //hide, replace with background-image
			},
		},

		/* Calendar selects */
		'.duet-date__select': {
			marginTop: 0, //reset, no longer required due to increased `<span>` height (lineHeight)
		},
		'.duet-date__select-label': {
			border: '1px solid transparent', //for WHCM (a11y)
			color: COLORS.primary, //for icon (uses currentColor)

			span: {
				color: COLORS.text, //reset text
				lineHeight: 1.5, //fix type descender overlay in WHCM (a11y)
			},
		},
		'.duet-date__select select:focus + .duet-date__select-label': {
			boxShadow: `0 0 0 2px ${COLORS.focus}`,
			outline: `${focus.outlineWidth} solid transparent !important`, //for WCHM (a11y)
			outlineOffset: `${focus.outlineOffset} !important`,
		},

		/* Calendar prev/next buttons */
		'.duet-date__prev, .duet-date__next': {
			border: '1px solid transparent', //for WHCM (a11y)
			color: COLORS.primary,

			':focus': {
				boxShadow: `0 0 0 2px ${COLORS.focus}`,
				outline: `${focus.outlineWidth} solid transparent !important`, //for WCHM (a11y)
				outlineOffset: `${focus.outlineOffset} !important`,
			},
		},

		/* Calendar days */
		'.duet-date__day': {
			position: 'relative', //for disabled dash styling

			'&:active, &:focus': {
				boxShadow: `0 0 0 2px ${COLORS.focus} !important`,
				outline: `${focus.outlineWidth} solid transparent !important`, //for WCHM (a11y)
				outlineOffset: `${focus.outlineOffset} !important`,
			},
			':not([aria-pressed="true"]):focus': {
				background: 'transparent',
				color: 'var(--duet-color-text)',
			},

			'&[aria-pressed="true"]': {
				border: '1px solid transparent', //for WHCM (a11y)
			},
			'&[aria-disabled="true"], &[disabled]': {
				'::after': {
					content: '""',
					position: 'absolute',
					zIndex: 1,
					top: '50%',
					left: '50%',
					borderBottom: `1px solid ${COLORS.muted}`,
					width: '18px',
					height: 0,
					transform: 'translateX(-50%)',
				},
			},
		},

		/* Calendar close button */
		'.duet-date__close': {
			border: '1px solid transparent', //for WHCM (a11y)

			':focus': {
				boxShadow: `0 0 0 2px ${COLORS.focus}`,
				outline: `${focus.outlineWidth} solid transparent !important`, //for WCHM (a11y)
				outlineOffset: `${focus.outlineOffset} !important`,
			},
		},
	};
};

// ==============================
// Attributes
// ==============================

const datePickerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultDatePicker = {
	component: DatePicker,
	styles: datePickerStyles,
	attributes: datePickerAttributes,
};
