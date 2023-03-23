import PropTypes from 'prop-types';
import { useBrand, overrideReconciler } from '@westpac/core';
import React, { useId, useMemo, ReactNode, CSSProperties, forwardRef } from 'react';

import { defaultInputGroup } from './overrides/inputGroup';

import { TextInputField } from './TextInputField';
import pkg from '../package.json';
import { sizeMap } from '@westpac/text-input';

// ==============================
// Context and Consumer Hook
// ==============================

type Sizes = 'small' | 'medium' | 'large' | 'xlarge';

// ==============================
// Component
// ==============================

interface TextWrapperProps {
	children?: ReactNode;
	css?: CSSProperties;
	size?: Sizes;
	readOnly?: boolean;
	disabled?: boolean;
}

const TextWrapper = ({
	children,
	disabled,
	readOnly,
	size = 'medium',
	...props
}: TextWrapperProps) => {
	const { COLORS } = useBrand();
	return (
		<span
			{...props}
			css={{
				display: 'flex',
				alignItems: 'center',
				padding: '0 0.4rem',
				color: disabled || readOnly ? COLORS.muted : COLORS.heading,
				background: disabled || readOnly ? COLORS.background : COLORS.light,
				fontSize: sizeMap[size].fontSize,
			}}
		>
			{children}
		</span>
	);
};

interface WrapperProps {
	children?: ReactNode;
	css?: CSSProperties;
	before?: boolean;
	after?: boolean;
	invalid?: boolean;
	ariaInvalid?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	size?: Sizes;
}
const Wrapper = ({
	children,
	before,
	after,
	disabled,
	readOnly,
	size = 'medium',
	invalid,
	ariaInvalid,
	...props
}: WrapperProps) => {
	const { COLORS } = useBrand();
	var s = sizeMap[size];
	return (
		<div
			{...props}
			css={{
				display: 'flex',
				borderRadius: '0.1875rem',
				flexShrink: 0,
				overflow: 'hidden',
				boxSizing: 'border-box',
				height: 'auto',
				border: `${sizeMap[size].borderWidth}px ${disabled || readOnly ? 'dashed' : 'solid'} ${
					invalid || ariaInvalid ? COLORS.danger : COLORS.borderDark
				}`,
				'> button, > select, > input': {
					width: 'auto !important',
					margin: '-1px !important',
				},
				'> *': {
					height: 'auto !important',
					...(before
						? {
								borderTopRightRadius: '0 !important',
								borderBottomRightRadius: '0 !important',
						  }
						: {}),
					...(after
						? {
								borderTopLeftRadius: '0 !important',
								borderBottomLeftRadius: '0 !important',
						  }
						: {}),
				},
				...(before
					? { borderTopRightRadius: 0, borderBottomRightRadius: 0, borderRight: 'none' }
					: {}),
				...(after ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none' } : {}),
			}}
		>
			{children}
		</div>
	);
};

export interface InputGroupProps {
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * The name of the input field
	 */
	name?: string;
	/**
	 * The placeholder of the input field
	 */
	placeholder?: string;
	/**
	 * The label text for the input field
	 */
	label?: string;
	/**
	 * InputGroup size
	 */
	size?: Sizes;
	/**
	 * The look of the component
	 */
	look?: 'primary' | 'hero' | 'faint';
	/**
	 * Data driven
	 */
	data?: {
		before?: {
			inputType: 'text' | 'button' | 'select';
			data?: unknown[] | string;
			onClick?: (...args: unknown[]) => unknown;
		};
		after?: {
			inputType: 'text' | 'button' | 'select';
			data?: unknown[] | string;
			onClick?: (...args: unknown[]) => unknown;
		};
	};
	/**
	 * Invalid input mode
	 */
	invalid?: boolean;
	/**
	 * Aria Invalid input mode
	 */
	ariaInvalid?: boolean;
	/**
	 * Disabled input mode
	 */
	disabled?: boolean;
	/**
	 * Read only mode
	 */
	readOnly?: boolean;
	/**
	 * Element before input
	 */
	before?: ReactNode;
	/**
	 * Element after the input
	 */
	after?: ReactNode;
	/**
	 * InputGroup children
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		InputGroup?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Text?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		TextInput?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Select?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Button?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

export const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
	(
		{
			instanceId,
			name,
			label,
			look,
			readOnly,
			size = 'medium',
			invalid = false,
			disabled = false,
			children,
			overrides: componentOverrides,
			placeholder,
			before,
			after,
			ariaInvalid,
			data,
			...rest
		},
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const defaultOverrides = {
			InputGroup: defaultInputGroup,
		};

		const _id = useId();
		const id = useMemo(() => instanceId || `gel-input-group-${_id}`, [_id, instanceId]);

		const state = {
			id,
			name,
			label,
			size,
			look,
			invalid,
			disabled,
			readOnly,
			overrides: componentOverrides,
			placeholder,
			ariaInvalid,
			...rest,
		};

		const {
			InputGroup: {
				component: InputGroup,
				styles: inputGroupStyles,
				attributes: inputGroupAttributes,
			},
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<InputGroup {...inputGroupAttributes(state)} css={inputGroupStyles(state)}>
				{before && (
					<Wrapper
						disabled={disabled}
						readOnly={readOnly}
						invalid={invalid}
						ariaInvalid={ariaInvalid}
						size={size}
						before
					>
						{typeof before === 'string' ? (
							<TextWrapper disabled={disabled} readOnly={readOnly} size={size}>
								{before}
							</TextWrapper>
						) : (
							before
						)}
					</Wrapper>
				)}
				<TextInputField
					ref={ref}
					instanceId={`${id}-textInput`}
					name={name}
					label={label}
					size={size}
					invalid={invalid}
					disabled={disabled}
					readOnly={readOnly}
					placeholder={placeholder}
					before={!!before}
					after={!!after}
					aria-invalid={ariaInvalid}
					{...rest}
				/>
				{after && (
					<Wrapper
						disabled={disabled}
						invalid={invalid}
						ariaInvalid={ariaInvalid}
						size={size}
						after
						readOnly={readOnly}
					>
						{typeof after === 'string' ? (
							<TextWrapper disabled={disabled} readOnly={readOnly} size={size}>
								{after}
							</TextWrapper>
						) : (
							after
						)}
					</Wrapper>
				)}
			</InputGroup>
		);
	}
);

InputGroup.displayName = 'InputGroup';

TextWrapper.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	children: PropTypes.node,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
};

TextWrapper.defaultProps = { size: 'medium' };

Wrapper.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	after: PropTypes.bool,
	ariaInvalid: PropTypes.bool,
	before: PropTypes.bool,
	children: PropTypes.node,
	disabled: PropTypes.bool,
	invalid: PropTypes.bool,
	readOnly: PropTypes.bool,
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
};

InputGroup.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Element after the input
	 */
	after: PropTypes.node,
	/**
	 * Aria Invalid input mode
	 */
	ariaInvalid: PropTypes.bool,
	/**
	 * Element before input
	 */
	before: PropTypes.node,
	/**
	 * InputGroup children
	 */
	children: PropTypes.node,
	/**
	 * Data driven
	 */
	data: PropTypes.shape({
		after: PropTypes.shape({
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
			inputType: PropTypes.oneOf(['button', 'select', 'text']).isRequired,
			onClick: PropTypes.func,
		}),
		before: PropTypes.shape({
			data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
			inputType: PropTypes.oneOf(['button', 'select', 'text']).isRequired,
			onClick: PropTypes.func,
		}),
	}),
	/**
	 * Disabled input mode
	 */
	disabled: PropTypes.bool,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * Invalid input mode
	 */
	invalid: PropTypes.bool,
	/**
	 * The label text for the input field
	 */
	label: PropTypes.string,
	/**
	 * The look of the component
	 */
	look: PropTypes.oneOf(['faint', 'hero', 'primary']),
	/**
	 * The name of the input field
	 */
	name: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		InputGroup: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Select: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Text: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		TextInput: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * The placeholder of the input field
	 */
	placeholder: PropTypes.string,
	/**
	 * Read only mode
	 */
	readOnly: PropTypes.bool,
	/**
	 * InputGroup size
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
};
