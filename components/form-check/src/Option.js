/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultOption } from './overrides/option';
import { defaultLabel } from './overrides/label';

import { useFormCheckContext } from './FormCheck';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Option = ({
	index,
	value,
	checked,
	handleChange,
	type,
	name,
	size,
	inline,
	disabled,
	instanceIdPrefix,
	children,
	overrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useFormCheckContext();

	const optionId = `${instanceIdPrefix}-option-${index + 1}`;

	const defaultOverrides = {
		Option: defaultOption,
		Label: defaultLabel,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		optionId,
		value,
		checked,
		handleChange,
		type,
		name,
		size,
		inline,
		disabled,
		context: { ...context.state },
		overrides: componentOverrides,
		...rest,
	};

	const {
		Option: { component: Option, styles: optionStyles, attributes: optionAttributes },
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Option {...rest} state={state} {...optionAttributes(state)} css={optionStyles(state)}>
			{/* a11y: input not exposed as an override, contains logic required to function */}
			<input
				id={optionId}
				onChange={disabled ? null : event => handleChange(event, value, checked)}
				value={value}
				checked={checked}
				disabled={disabled}
				type={type}
				name={name}
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
	checked: PropTypes.bool.isRequired,

	/**
	 * Disable the Form check option
	 */
	disabled: PropTypes.bool.isRequired,

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
	handleChange: PropTypes.func,

	/**
	 * Form check option label text
	 */
	children: PropTypes.string.isRequired,

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

Option.defaultProps = {
	checked: false,
	disabled: false,
};
