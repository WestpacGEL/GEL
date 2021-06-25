/** @jsx jsx */

import { Fragment, forwardRef } from 'react';
import { jsx, useBrand, css, Global } from '@westpac/core';

// ==============================
// Component
// ==============================

const DatePicker = forwardRef(({ state: _, className, ...rest }, ref) => {
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
			<div className={className}>
				<duet-date-picker ref={ref} {...rest}></duet-date-picker>
			</div>
		</Fragment>
	);
});

// ==============================
// Styles
// ==============================

const datePickerStyles = () => {
	const { COLORS } = useBrand();

	return css`
		.duet-date__toggle {
			box-shadow: none;
			border-left: 1px solid ${COLORS.borderDark};
			background-color: ${COLORS.light};
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
