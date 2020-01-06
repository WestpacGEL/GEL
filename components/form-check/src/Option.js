/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId } from '@westpac/core';
import PropTypes from 'prop-types';

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
	children,
	type,
	name,
	size,
	inline,
	flipped,
	overrides: componentOverrides,
	...rest
}) => {
	const formCheckId = `form-check-${name.replace(/ /g, '-')}-${useInstanceId()}`;

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Option: {
				styles: optionStyles,
				component: OptionWrapper,
				attributes: state => state,
			},
			Label: {
				styles: labelStyles,
				component: Label,
				attributes: state => state,
			},
		},
	};

	const state = {
		value,
		selected,
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
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Option.component
			css={overrides.subComponent.Option.styles}
			{...overrides.subComponent.Option.attributes(state)}
		>
			<input
				type={type}
				selected={selected}
				id={formCheckId}
				onClick={disabled ? null : event => handleChange(event, value, selected)}
				css={{
					position: 'absolute', // just to hide the input element needed for a11y
					opacity: 0, // we decided to not expose this as an override
				}} // as it contains logic and is important for the component to work
			/>
			<overrides.subComponent.Label.component
				htmlFor={formCheckId}
				css={overrides.subComponent.Label.styles}
				{...overrides.subComponent.Label.attributes(state)}
			>
				{children}
			</overrides.subComponent.Label.component>
		</overrides.subComponent.Option.component>
	);
};

// ==============================
// Types
// ==============================

Option.propTypes = {
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
	 * Form check option value
	 */
	value: PropTypes.string,

	/**
	 * Check the Form check option
	 */
	selected: PropTypes.bool.isRequired,

	/**
	 * A function called on change
	 */
	handleChange: PropTypes.func,

	/**
	 * Disable the Form check option
	 */
	disabled: PropTypes.bool.isRequired,

	/**
	 * Form check option label text
	 */
	children: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		subComponent: PropTypes.shape({
			Option: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
			Label: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Option.defaultProps = {
	selected: false,
	disabled: false,
};
