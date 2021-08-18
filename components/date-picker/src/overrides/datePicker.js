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

const datePickerStyles = (_, { size }) => {
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
		display: 'inline-block',

		/* Input */
		'.duet-date__input': {
			fontSize: textInputSizeMap[size].fontSize,
			height: getHeight(size),
			lineHeight: textInputSizeMap[size].lineHeight,
			padding: textInputSizeMap[size].padding.join(' '),
			paddingRight: `calc(${toggleWidthMap[size]} + ${textInputSizeMap[size].padding[1]})`,
			maxWidth: getMaxWidth(size, width, toggleWidthMap[size]),

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
			backgroundImage: `url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20fill%3D%22%23${COLORS.muted.substring(
				1
			)}%22%20fill-rule%3D%22evenodd%22%20d%3D%22M20%2C2%20L22%2C2%20C23.1045695%2C2%2024%2C2.8954305%2024%2C4%20L24%2C22%20C24%2C23.1045695%2023.1045695%2C24%2022%2C24%20L2%2C24%20C0.8954305%2C24%201.3527075e-16%2C23.1045695%200%2C22%20L0%2C4%20C-1.3527075e-16%2C2.8954305%200.8954305%2C2%202%2C2%20L4%2C2%20L4%2C0%20L6%2C0%20L6%2C2%20L18%2C2%20L18%2C0%20L20%2C0%20L20%2C2%20Z%20M2%2C8%20L2%2C22%20L22%2C22%20L22%2C8%20L2%2C8%20Z%20M14%2C14%20L20%2C14%20L20%2C20%20L14%2C20%20L14%2C14%20Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")`,
			backgroundSize: 'cover',

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
