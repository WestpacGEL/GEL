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
	const { COLORS } = useBrand();

	const width = 7; //x times width of 'W'

	const toggleWidthMap = {
		small: '43px',
		medium: '49px',
		large: '55px',
		xlarge: '61px',
	};

	return css`
		display: inline-block;

		.duet-date__input {
			font-size: ${textInputSizeMap[size].fontSize};
			height: ${getHeight(size)};
			line-height: ${textInputSizeMap[size].lineHeight};
			padding: ${textInputSizeMap[size].padding.join(' ')};
			padding-right: calc(${toggleWidthMap[size]} + ${textInputSizeMap[size].padding[1]});
			max-width: ${getMaxWidth(size, width, toggleWidthMap[size])};
		}

		.duet-date__toggle {
			box-shadow: none;
			border-left: 1px solid ${COLORS.borderDark};
			background-color: ${COLORS.light};
			padding: ${buttonSizeMap[size].padding};
			font-size: ${buttonSizeMap[size].fontSize};
			width: auto;
		}
		.duet-date__select-label {
			color: ${COLORS.primary};
			span {
				color: ${COLORS.text};
			}
		}
		.duet-date__prev,
		.duet-date__next {
			color: ${COLORS.primary};
		}
		.duet-date__day:not(.is-month),
		.duet-date__day[aria-disabled='true'] {
			color: ${COLORS.muted};
		}

		// TODO:
		// - size
		// - btn icon
		// - focus
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
