import { forwardRef, useMemo, InputHTMLAttributes } from 'react';
import { useBrand, useMediaQuery } from '@westpac/core';
import { AddOnType } from '../AddOns';
import { useInputFieldContext } from '../InputField';
import { sizeMap, getHeight, getMaxWidth, getAddOnStyles } from './_utils';

// -----------------------------------------------------
// Text Input
// -----------------------------------------------------
type DefaultInputProps = InputHTMLAttributes<HTMLInputElement>;

export interface TextInputProps extends Omit<DefaultInputProps, 'size'> {
	/**
	 * Component size
	 */
	// size?: 'small' | 'medium' | 'large' | 'xlarge';

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
		const { id, ariaDescribedByValue, size, composition } = useInputFieldContext();

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
					backgroundColor: '#fff',
					border: `${sizeMap[size].borderWidth}px solid ${
						invalid ? COLORS.danger : COLORS.borderDark
					}`,
					borderRadius: '0.1875rem',
					transition: 'border 0.2s ease',
					verticalAlign: inline && 'middle',
					padding: sizeMap[size].padding.join(' '),
					height: getHeight(size),
					maxWidth: width && getMaxWidth(size, width),
					...addOnStyles,
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

// It will get super confusing if you have to mix and match between packages for the input field?
export const TInput = (props) => {
	const { COLORS, PACKS, TYPE } = useBrand();
	const { id, ariaDescribedByValue, size, composition } = useInputFieldContext();
	const insetMap = {
		small: '2.25rem', // 18 + 9 + 9
		medium: '2.625rem', // 18 + 12 + 12
		large: '3rem', // 18 + 15 + 15
		xlarge: '3.375rem', // 18 + 18 + 18
	};
	const addOnMap = {
		before: {
			default: {
				borderTopLeftRadius: 0,
				borderBottomLeftRadius: 0,
				borderLeft: 'none',
			},
			inset: {
				paddingLeft: insetMap[size],
			},
		},
		after: {
			default: {
				borderTopRightRadius: 0,
				borderBottomRightRadius: 0,
				borderRight: 'none',
			},
			inset: { paddingRight: insetMap[size] },
		},
	};

	const addOnStyles = ['before', 'after'].reduce((styles, placement) => {
		if (composition[placement as keyof typeof composition] === AddOnType.Default) {
			return { ...styles, ...addOnMap[placement].default };
		} else if (composition[placement] === AddOnType.Inset) {
			return { ...styles, ...addOnMap[placement].inset };
		} else {
			return styles;
		}
	}, {});

	return (
		<input
			id={id}
			aria-describedby={ariaDescribedByValue}
			css={{
				width: '100%',
				fontSize: '1rem',
				padding: 0,
				boxSizing: 'border-box',
				// ...TYPE.bodyFont[400],
				color: COLORS.text,
				border: '1px solid rgb(147, 144, 162)',
				borderRadius: '0.1875rem',
				height: 'calc(1.5em + 0.3125rem + 0.3125rem + 2px)',
				...addOnStyles,
			}}
			{...props}
		/>
	);
};

TInput.displayName = 'TextInput';
