/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { defaultOption } from './overrides/option';
import { defaultLabel } from './overrides/label';

import { useFormCheckContext } from './FormCheck';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Option = ({
	value,
	checked: checkedProp,
	className,
	children,
	overrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const {
		instanceId,
		size = 'medium',
		inline,
		data,
		checked: ctxChecked,
		overrides: ctxOverrides,
		defaultValue: _,
		type = 'checkbox',
		name,
		disabled,
		onChange,
		toggleCheck,
		...restCtx
	} = useFormCheckContext();

	const optionId = `${instanceId}-option-${useInstanceId()}`;

	const defaultOverrides = {
		Option: defaultOption,
		Label: defaultLabel,
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
		overrides: componentOverrides,
		...rest,
	};

	const {
		Option: { component: Option, styles: optionStyles, attributes: optionAttributes },
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
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
				id={optionId}
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
					position: 'absolute',
					zIndex: '-1',
					opacity: 0,
				}}
			/>
			<Label state={state} {...labelAttributes(state)} css={labelStyles(state)}>
				{children}
			</Label>
		</Option>
	);
};

// ==============================
// Types
// ==============================

Option.propTypes = {
	/**
	 * Form check id
	 */
	id: PropTypes.string,

	/**
	 * Form check option value
	 */
	value: PropTypes.string,

	/**
	 * Check the Form check option
	 */
	checked: PropTypes.bool,

	/**
	 * Disable the Form check option
	 */
	disabled: PropTypes.bool,

	/**
	 * Define an id prefix for internal elements
	 */
	instanceIdPrefix: PropTypes.string,

	/**
	 * Form check type.
	 */
	type: PropTypes.oneOf(['checkbox', 'radio']),

	/**
	 * The form check input element’s name.
	 */
	name: PropTypes.string,

	/**
	 * Form check size.
	 */
	size: PropTypes.oneOf(['medium', 'large']),

	/**
	 * To inline the element
	 */
	inline: PropTypes.bool,

	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,

	/**
	 * Form check option label text
	 */
	children: PropTypes.node.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Option: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Option.defaultProps = {};
