import PropTypes from 'prop-types';
import { useBrand, overrideReconciler } from '@westpac/core';
import React, { useContext, createContext, useId, useMemo, ReactNode, CSSProperties } from 'react';

import { defaultInputGroup } from './overrides/inputGroup';

import { TextInputField } from './TextInputField';
import pkg from '../package.json';
import { sizeMap } from '@westpac/text-input';

// ==============================
// Context and Consumer Hook
// ==============================

const InputGroupContext = createContext<any>(null);

export const useInputGroupContext = () => {
	const context = useContext(InputGroupContext);

	if (!context) {
		throw new Error('<Before/> and <After/> components should be wrapped in <InputGroup>.');
	}

	return context;
};

type Sizes = 'small' | 'medium' | 'large' | 'xlarge';
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

// ==============================
// Component
// ==============================

interface TextWrapperProps {
	children?: ReactNode;
	css?: CSSProperties;
	before?: boolean;
	after?: boolean;
	invalid?: boolean;
	ariaInvalid?: boolean;
	size?: Sizes;
}
const TextWrapper = ({
	children,
	before,
	after,
	size = 'medium',
	invalid,
	ariaInvalid,
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
				background: COLORS.light,
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
	size?: Sizes;
}
const Wrapper = ({
	children,
	before,
	after,
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
				height: 'calc('
					.concat(s.lineHeight.toString(), 'em + ')
					.concat(s.padding[0], ' + ')
					.concat(s.padding[2] || s.padding[0], ' + ')
					.concat((2 * s.borderWidth).toString(), 'px)'),
				border: `${sizeMap[size].borderWidth}px solid ${
					invalid || ariaInvalid ? COLORS.danger : COLORS.borderDark
				}`,
				'> *': {
					height: 'auto !important',
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

export const InputGroup = ({
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
	...rest
}: InputGroupProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		COLORS,
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
	console.log('inputGroupStyles(state)', inputGroupStyles(state));

	return (
		<InputGroupContext.Provider value={{ state }}>
			<InputGroup {...inputGroupAttributes(state)} css={inputGroupStyles(state)}>
				{before && (
					<Wrapper invalid={invalid} ariaInvalid={ariaInvalid} size={size} before>
						{typeof before === 'string' ? <TextWrapper>{before}</TextWrapper> : before}
					</Wrapper>
				)}
				<TextInputField
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
					ariaInvalid={ariaInvalid}
					{...rest}
				/>
				{after && (
					<Wrapper invalid={invalid} ariaInvalid={ariaInvalid} size={size} after>
						{typeof after === 'string' ? <TextWrapper>{after}</TextWrapper> : after}
					</Wrapper>
				)}
			</InputGroup>
		</InputGroupContext.Provider>
	);
};

InputGroup.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
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

InputGroup.defaultProps = { disabled: false, invalid: false, size: 'medium' };
