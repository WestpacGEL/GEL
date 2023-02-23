import PropTypes from 'prop-types';
import React, { forwardRef, ReactNode } from 'react';
import { jsx, useBrand, getLabel, overrideReconciler } from '@westpac/core';

import { defaultOption } from './overrides/option';
import { defaultLabel } from './overrides/label';
import { defaultHint } from './overrides/hint';

import { useFormCheckContext } from './FormCheck';
import pkg from '../package.json';

export interface OptionProps {
	/**
	 * index
	 */
	index?: number;
	/**
	 * className
	 */
	className?: string;
	/**
	 * Form check option id
	 */
	id?: string;

	/**
	 * Form check option value
	 */
	value?: string;

	/**
	 * Check the Form check option
	 */
	checked?: boolean;

	/**
	 * Disable the Form check option
	 */
	disabled?: boolean;

	/**
	 * Define an id prefix for internal elements
	 */
	instanceId?: string;

	/**
	 * Form check type
	 */
	type?: 'checkbox' | 'radio';

	/**
	 * The form check input element’s name
	 */
	name?: string;

	/**
	 * Form check size.
	 */
	size?: 'medium' | 'large';

	/**
	 * To inline the element
	 */
	inline?: boolean;

	/**
	 * Hint text
	 */
	hint?: ReactNode;

	/**
	 * A function called on change
	 */
	onChange?: (...args: unknown[]) => unknown;

	/**
	 * Form check option label text
	 */
	children: ReactNode;

	/**
	 * The override API
	 */
	overrides?: {
		Option?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Label?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}
// ==============================
// Component
// ==============================

export const Option = forwardRef(
	(
		{
			index,
			value,
			checked: checkedProp,
			hint,
			className,
			children,
			overrides,
			...rest
		}: OptionProps,
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const {
			id,
			type = 'checkbox',
			name,
			size = 'medium',
			inline,
			disabled,
			defaultValue: _,
			show,
			revealCount,
			isOpen,
			data,
			checked: ctxChecked,
			onChange,
			overrides: ctxOverrides,
			...restCtx
		} = useFormCheckContext();

		const optionId = `${id}-option-${index}`;
		const hintId = `${optionId}-hint`;

		const defaultOverrides = {
			Option: defaultOption,
			Label: defaultLabel,
			Hint: defaultHint,
		};

		const componentOverrides = overrides || ctxOverrides;
		const checked = ctxChecked ? ctxChecked.includes(value) : checkedProp;

		const state = {
			optionId,
			value,
			ctxChecked,
			checked,
			onChange,
			type,
			name,
			size,
			inline,
			disabled,
			hint,
			hintId,
			overrides: componentOverrides,
			...rest,
		};

		const {
			Option: { component: Option, styles: optionStyles, attributes: optionAttributes },
			Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
			Hint: { component: Hint, styles: hintStyles, attributes: hintAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<Option
				className={className}
				state={state}
				{...optionAttributes(state)}
				css={optionStyles(state)}
			>
				{/* a11y: input not exposed as an override, contains logic required to function */}
				<input
					ref={ref}
					id={optionId}
					aria-describedby={hint && hintId}
					onChange={
						disabled
							? null
							: typeof onChange === 'undefined'
							? null
							: (event) => onChange(event, value, checked)
					}
					value={value}
					checked={checked}
					disabled={disabled}
					type={type}
					name={name}
					{...restCtx}
					{...rest}
					css={{
						label: getLabel('formCheck-option-input'),
						position: 'absolute',
						zIndex: '-1',
						opacity: 0,
						appearance: 'none',
					}}
				/>
				<Label state={state} {...labelAttributes(state)} css={labelStyles(state)}>
					{children}
				</Label>
				{hint && (
					<Hint state={state} {...hintAttributes(state)} css={hintStyles(state)}>
						{hint}
					</Hint>
				)}
			</Option>
		);
	}
);
Option.displayName = 'Option';

// ==============================
// Types
// ==============================

Option.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Check the Form check option
	 */
	checked: PropTypes.bool,
	/**
	 * Form check option label text
	 */
	children: PropTypes.node,
	/**
	 * className
	 */
	className: PropTypes.string,
	/**
	 * Hint text
	 */
	hint: PropTypes.node,
	/**
	 * index
	 */
	index: PropTypes.number,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Label: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Option: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Form check option value
	 */
	value: PropTypes.string,
};
