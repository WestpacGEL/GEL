/** @jsx jsx */

import { jsx, useBrand, overrideReconciler, useInstanceId, wrapHandlers } from '@westpac/core';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { Option as OptionWrapper, optionStyles } from './overrides/option';
import { Label, labelStyles } from './overrides/label';
import { Input, inputStyles } from './overrides/input';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Option = ({
	value,
	checked,
	disabled,
	onChange,
	children,
	type,
	name,
	size,
	inline,
	flipped,
	setCurrent,
	overrides: componentOverrides,
	...rest
}) => {
	const [isChecked, setIsChecked] = useState(checked);
	const formCheckId = `formCheck-${name.replace(/ /g, '-')}-${useInstanceId()}`;

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
			Input: {
				styles: inputStyles,
				component: Input,
				attributes: state => state,
			},
		},
	};

	const state = {
		value,
		checked,
		disabled,
		onChange,
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

	const handleChange = value => {
		setIsChecked(!isChecked);
		wrapHandlers(onChange, setCurrent(value));
	};

	return (
		<overrides.subComponent.Option.component
			css={overrides.subComponent.Option.styles}
			{...overrides.subComponent.Option.attributes(state)}
		>
			<overrides.subComponent.Input.component
				css={overrides.subComponent.Input.styles}
				{...overrides.subComponent.Input.attributes(state)}
				type={type}
				id={formCheckId}
				onChange={() => handleChange(value)}
			/>
			<overrides.subComponent.Label.component
				css={overrides.subComponent.Label.styles}
				{...overrides.subComponent.Label.attributes(state)}
				htmlFor={formCheckId}
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
	 * Handler to be called on change
	 */
	onChange: PropTypes.func,

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
			Input: PropTypes.shape({
				styles: PropTypes.func,
				component: PropTypes.elementType,
				attributes: PropTypes.object,
			}),
		}),
	}),
};

Option.defaultProps = {
	checked: false,
	disabled: false,
};
