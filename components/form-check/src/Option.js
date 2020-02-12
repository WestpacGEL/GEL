/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Option as OptionWrapper, optionStyles } from './overrides/option';
import { Label, labelStyles } from './overrides/label';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Option = ({
	value,
	selected,
	handleChange,
	disabled,
	type,
	name,
	size,
	inline,
	flipped,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const [formCheckId] = useState(`form-check-${name.replace(/ /g, '-')}-${useInstanceId()}`);

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Option: {
			styles: optionStyles,
			component: OptionWrapper,
			attributes: () => null,
		},
		Label: {
			styles: labelStyles,
			component: Label,
			attributes: () => null,
		},
	};

	const state = {
		value,
		selected,
		handleChange,
		disabled,
		type,
		name,
		size,
		inline,
		flipped,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Option.component
			value={value}
			selected={selected}
			disabled={disabled}
			type={type}
			name={name}
			size={size}
			inline={inline}
			flipped={flipped}
			{...rest}
			{...overrides.Option.attributes(state)}
			css={overrides.Option.styles(state)}
		>
			<input
				type={type}
				selected={selected}
				id={formCheckId}
				value={value}
				onChange={disabled ? null : event => handleChange(event, value, selected)}
				css={{
					position: 'absolute', // just to hide the input element needed for a11y
					opacity: 0, // we decided to not expose this as an override
				}} // as it contains logic and is important for the component to work
			/>
			<overrides.Label.component
				value={value}
				selected={selected}
				disabled={disabled}
				type={type}
				name={name}
				size={size}
				inline={inline}
				flipped={flipped}
				htmlFor={formCheckId}
				{...overrides.Label.attributes(state)}
				css={overrides.Label.styles(state)}
			>
				{children}
			</overrides.Label.component>
		</overrides.Option.component>
	);
};

// ==============================
// Types
// ==============================

Option.propTypes = {
	/**
	 * Form check option value
	 */
	value: PropTypes.string,

	/**
	 * Check the Form check option
	 */
	selected: PropTypes.bool.isRequired,

	/**
	 * Disable the Form check option
	 */
	disabled: PropTypes.bool.isRequired,

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
	 * Form check orientation (control on the right).
	 */
	flipped: PropTypes.bool,

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
	selected: false,
	disabled: false,
};
