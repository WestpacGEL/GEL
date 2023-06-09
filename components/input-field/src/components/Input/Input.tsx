import PropTypes from 'prop-types';
import { forwardRef, useMemo, InputHTMLAttributes } from 'react';
import { useBrand, useMediaQuery } from '@westpac/core';
import { useInputFieldContext } from '../InputField';
import { sizeMap, getHeight, getMaxWidth, getAddOnStyles } from './_utils';

// -----------------------------------------------------
// Text Input
// -----------------------------------------------------
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width?: 2 | 3 | 4 | 5 | 10 | 20 | 30;

	/**
	 * Inline mode
	 */
	inline?: boolean;

	/**
	 * Invalid input mode
	 */
	invalid?: boolean;

	/**
	 * Type
	 */
	type?: string;
}

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
	({ width, inline = false, invalid = false, type = 'text', ...props }, ref) => {
		const { COLORS, PACKS, TYPE } = useBrand();
		const mq = useMediaQuery();
		const { id, ariaDescribedByValue, composition, size } = useInputFieldContext();

		const focus = useMemo(
			() =>
				Object.entries(PACKS.focus).reduce((acc, [key, val]) => {
					acc[key] = `${val} !important`;
					return acc;
				}, {} as Record<string, string>),
			[PACKS.focus]
		);

		const addOnStyles = useMemo(() => getAddOnStyles(size, composition), [size, composition]);

		const css = useMemo(
			() =>
				mq({
					// Normalize
					// =========

					// 1. Remove the margin in Firefox and Safari.
					// 2. Show the overflow in Edge.
					// input:
					margin: 0, // 1
					overflow: 'visible', // 2
					// =========

					boxSizing: 'border-box',
					width: inline ? ['100%', 'auto'] : '100%',
					appearance: 'none',
					fontSize: sizeMap[size].fontSize,
					...TYPE.bodyFont[400],
					lineHeight: sizeMap[size].lineHeight,
					color: COLORS.text,
					backgroundColor: COLORS.white,
					border: `${sizeMap[size].borderWidth}px solid ${
						invalid ? COLORS.danger : COLORS.borderDark
					}`,
					borderRadius: '0.1875rem',
					transition: 'border 0.2s ease',
					verticalAlign: inline && 'middle',
					padding: sizeMap[size].padding.join(' '),
					height: getHeight(size),
					maxWidth: width && getMaxWidth(size, width),
					'::placeholder': {
						opacity: 1, // Override Firefox's unusual default opacity
						color: COLORS.tints.text50,
						...TYPE.bodyFont[300],
					},

					// Focus styling (for all, not just keyboard users), specifying element tag to increase specificity
					'input&:focus': {
						...focus,
					},

					// Disabled and read-only inputs
					':disabled, &[readonly]': {
						cursor: 'not-allowed',
						opacity: 1, // iOS fix for unreadable disabled content
						backgroundColor: COLORS.background,
						borderStyle: 'dashed',
						color: COLORS.muted,
					},

					// Disable number input spinners/steppers
					'::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
						margin: 0,
						appearance: 'none',
					},
					...addOnStyles,
				}),
			[COLORS, TYPE, addOnStyles, focus, inline, invalid, mq, size, width]
		);

		return (
			<input
				type={type}
				ref={ref}
				css={css}
				id={id}
				aria-describedby={ariaDescribedByValue}
				aria-invalid={invalid}
				{...props}
			/>
		);
	}
);

Input.displayName = 'TextInput';

Input.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Inline mode
	 */
	inline: PropTypes.bool,
	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool,
	/**
	 * Type
	 */
	type: PropTypes.string,
	/**
	 * Component width (in chars).
	 *
	 * This prop sets a fixed width, measured in characters.
	 */
	width: PropTypes.oneOf([2, 3, 4, 5, 10, 20, 30]),
};
