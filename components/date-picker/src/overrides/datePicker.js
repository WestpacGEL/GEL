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

	return css`
		display: inline-block;

		/* Input */
		.duet-date__input {
			font-size: ${textInputSizeMap[size].fontSize};
			height: ${getHeight(size)};
			line-height: ${textInputSizeMap[size].lineHeight};
			padding: ${textInputSizeMap[size].padding.join(' ')};
			padding-right: calc(${toggleWidthMap[size]} + ${textInputSizeMap[size].padding[1]});
			max-width: ${getMaxWidth(size, width, toggleWidthMap[size])};
		}
		.duet-date__input:focus {
			border-color: ${COLORS.borderDark};
			box-shadow: none;
			outline: ${focus.outline} !important;
			outline-width: ${focus.outlineWidth} !important;
			outline-offset: ${focus.outlineOffset} !important;
		}

		/* Calendar button */
		.duet-date__toggle {
			box-shadow: none;
			border-left: 1px solid ${COLORS.borderDark};
			background-color: ${COLORS.light};
			padding: ${buttonSizeMap[size].padding};
			font-size: ${buttonSizeMap[size].fontSize};
			width: auto;
			touch-action: manipulation;
			white-space: nowrap;
			transition: background 0.2s ease, color 0.2s ease;
		}
		.duet-date__toggle:hover,
		.duet-date__toggle:active {
			background-color: #fff;
		}
		.duet-date__toggle:focus {
			box-shadow: none;
			outline: ${focus.outline};
			outline-width: ${focus.outlineWidth};
			outline-offset: ${focus.outlineOffset};
		}
		.duet-date__toggle-icon {
			width: ${size === 'small' || size === 'medium' ? '18px' : '24px'};
			height: ${size === 'small' || size === 'medium' ? '18px' : '24px'};
			background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23${COLORS.muted.substring(
				1
			)}' fill-rule='evenodd' d='M20,2 L22,2 C23.1045695,2 24,2.8954305 24,4 L24,22 C24,23.1045695 23.1045695,24 22,24 L2,24 C0.8954305,24 1.3527075e-16,23.1045695 0,22 L0,4 C-1.3527075e-16,2.8954305 0.8954305,2 2,2 L4,2 L4,0 L6,0 L6,2 L18,2 L18,0 L20,0 L20,2 Z M2,8 L2,22 L22,22 L22,8 L2,8 Z M14,14 L20,14 L20,20 L14,20 L14,14 Z'%3E%3C/path%3E%3C/svg%3E");
			background-size: cover;
		}
		.duet-date__toggle-icon svg {
			display: none; // Hide, replace with background-image
		}

		/* Calendar selects */
		.duet-date__select-label {
			border: 1px solid transparent; //for WHCM (a11y)
			color: ${COLORS.primary}; //for icon (uses currentColor)
			span {
				color: ${COLORS.text}; //reset text
			}
		}
		.duet-date__select select:focus + .duet-date__select-label {
			box-shadow: 0 0 0 2px ${COLORS.focus};
			outline: ${focus.outlineWidth} solid transparent !important; //for WCHM (a11y)
			outline-offset: ${focus.outlineOffset} !important;
		}

		/* Calendar prev/next buttons */
		.duet-date__prev,
		.duet-date__next {
			border: 1px solid transparent; //for WHCM (a11y)
			color: ${COLORS.primary};
		}
		.duet-date__prev:focus,
		.duet-date__next:focus {
			box-shadow: 0 0 0 2px ${COLORS.focus};
			outline: ${focus.outlineWidth} solid transparent !important; //for WCHM (a11y)
			outline-offset: ${focus.outlineOffset} !important;
		}

		/* Calendar days */
		.duet-date__day {
			position: relative; //for disabled dash styling
			border: 1px solid transparent; //for WHCM (a11y)
		}
		.duet-date__day:active,
		.duet-date__day:focus {
			box-shadow: 0 0 0 2px ${COLORS.focus} !important;
			outline: ${focus.outlineWidth} solid transparent !important; //for WCHM (a11y)
			outline-offset: ${focus.outlineOffset} !important;
		}
		.duet-date__day:not([aria-pressed='true']):focus {
			background: transparent;
			color: var(--duet-color-text);
		}
		.duet-date__day.is-today {
			box-shadow: none;
			border: 1px solid var(--duet-color-primary);
		}
		.duet-date__day[aria-disabled='true']::after,
		.duet-date__day[disabled]::after {
			content: '';
			position: absolute;
			z-index: 1;
			top: 50%;
			left: 50%;
			border-bottom: 1px solid ${COLORS.muted};
			width: 18px;
			height: 0;
			transform: translateX(-50%);
		}

		/* Calendar close button */
		.duet-date__close {
			border: 1px solid transparent; //for WHCM (a11y)
		}
		.duet-date__close:focus {
			box-shadow: 0 0 0 2px ${COLORS.focus};
			outline: ${focus.outlineWidth} solid transparent !important; //for WCHM (a11y)
			outline-offset: ${focus.outlineOffset} !important;
		}
	`;
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
