import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler, devWarning } from '@westpac/core';
import React, { Children, cloneElement, useContext, createContext, useId, useMemo } from 'react';

import { defaultInputGroup } from './overrides/inputGroup';

import { TextInputField } from './TextInputField';
import { After } from './After';
import { Before } from './Before';
import pkg from '../package.json';

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
	 * The label text for the input field
	 */
	label?: string;
	/**
	 * InputGroup size
	 */
	size?: 'small' | 'medium' | 'large' | 'xlarge';
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
	 * Disabled input mode
	 */
	disabled?: boolean;
	/**
	 * Read only mode
	 */
	readOnly?: boolean;
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

export const InputGroup = ({
	instanceId,
	name,
	label,
	look,
	readOnly,
	size = 'medium',
	invalid = false,
	disabled = false,
	data,
	children,
	overrides: componentOverrides,
	...rest
}: InputGroupProps) => {
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
		data,
		overrides: componentOverrides,
		...rest,
	};

	const {
		InputGroup: {
			component: InputGroup,
			styles: inputGroupStyles,
			attributes: inputGroupAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	let textInputFieldAdded = false;
	const childrenWithProps = [];
	const length = Children.count(children);

	if (data) {
		const { before, after } = data;

		if (before) {
			childrenWithProps.push(
				<Before
					key="before"
					instanceId={`${id}-before`}
					size={size}
					look={look}
					disabled={disabled}
					overrides={componentOverrides}
					{...before}
				/>
			);
		}
		childrenWithProps.push(
			<TextInputField
				key="textinput1"
				instanceId={`${id}-textInput`}
				name={name}
				label={label}
				size={size}
				invalid={invalid}
				disabled={disabled}
				readOnly={readOnly}
				before={!!before}
				after={!!after}
				{...rest}
			/>
		);
		if (after) {
			childrenWithProps.push(
				<After
					key="after"
					instanceId={`${id}-after`}
					size={size}
					look={look}
					disabled={disabled}
					overrides={componentOverrides}
					{...after}
				/>
			);
		}
	} else {
		Children.map(children, (child) => {
			if (child.type.displayName === 'Before' && !textInputFieldAdded) {
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${id}-before`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'before',
					})
				);
				childrenWithProps.push(
					<TextInputField
						key="textinput1"
						instanceId={`${id}-textInput`}
						name={name}
						label={label}
						size={size}
						invalid={invalid}
						disabled={disabled}
						readOnly={readOnly}
						before={true}
						after={length > 1}
						{...rest}
					/>
				);
				textInputFieldAdded = true;
			} else if (child.type.displayName === 'After' && !textInputFieldAdded) {
				childrenWithProps.push(
					<TextInputField
						key="textinput2"
						instanceId={`${id}-textInput`}
						name={name}
						label={label}
						size={size}
						invalid={invalid}
						disabled={disabled}
						readOnly={readOnly}
						before={false}
						after={true}
						{...rest}
					/>
				);
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${id}-after`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'after',
					})
				);
				textInputFieldAdded = true;
			} else if (child.type.displayName === 'After' || child.type.displayName === 'Before') {
				childrenWithProps.push(
					cloneElement(child, {
						instanceId: `${id}-other`,
						size,
						look,
						disabled,
						overrides: componentOverrides,
						key: 'other',
					})
				);
			} else {
				devWarning(
					true,
					`<InputGroup /> only accepts <Before /> or <After /> as children. But found "<${
						child.type.name || child.type
					}/>"`
				);
			}
		});
	}

	return (
		<InputGroupContext.Provider value={{ state }}>
			<InputGroup state={state} {...inputGroupAttributes(state)} css={inputGroupStyles(state)}>
				{childrenWithProps}
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
	 * Read only mode
	 */
	readOnly: PropTypes.bool,
	/**
	 * InputGroup size
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']),
};

InputGroup.defaultProps = { disabled: false, invalid: false, size: 'medium' };
