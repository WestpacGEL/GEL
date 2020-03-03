/** @jsx jsx */

import {
	jsx,
	useBrand,
	overrideReconciler,
	wrapHandlers,
	devWarning,
	asArray,
} from '@westpac/core';
import { cloneElement, Children, useState } from 'react';
import PropTypes from 'prop-types';

import { FormCheck as FormCheckWrapper, formCheckStyles } from './overrides/formCheck';
import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormCheck = ({
	type,
	name,
	size,
	inline,
	disabled,
	defaultValue,
	data,
	children,
	onChange = () => {},
	overrides: componentOverrides,
	...rest
}) => {
	const defaultValueAsArray = defaultValue ? asArray(defaultValue) : [];

	devWarning(
		type === 'radio' && defaultValueAsArray.length > 1,
		'The form-check as radio may only have one "current" item set.'
	);

	const [checked, setChecked] = useState(defaultValueAsArray);

	const handleChange = (event, value, wasChecked) => {
		wrapHandlers(
			() => onChange(event, value, wasChecked),
			() => {
				if (type === 'radio') {
					setChecked(asArray(value));
				} else {
					if (wasChecked) {
						setChecked(checked.filter(item => item !== value));
					} else {
						setChecked([...checked, value]);
					}
				}
			}
		)(event);
	};

	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		FormCheck: {
			styles: formCheckStyles,
			component: FormCheckWrapper,
			attributes: () => null,
		},
	};

	const state = {
		type,
		name,
		size,
		inline,
		disabled,
		data,
		defaultValue,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	let allChildren = [];
	if (data) {
		data.map((props, index) => {
			allChildren.push(
				<Option
					key={index}
					value={props.value}
					checked={props.checked || checked.includes(props.value)}
					handleChange={handleChange}
					type={type}
					name={name}
					size={size}
					inline={inline}
					disabled={props.disabled || disabled}
					data={data}
					defaultValue={defaultValue}
					overrides={componentOverrides}
				>
					{props.text}
				</Option>
			);
		});
	} else {
		allChildren = Children.map(children, child =>
			cloneElement(child, {
				checked: child.props.checked || checked.includes(child.props.value),
				handleChange,
				type,
				name,
				size,
				inline,
				disabled: child.props.disabled || disabled,
				data,
				defaultValue,
				overrides: componentOverrides,
			})
		);
	}

	return (
		<overrides.FormCheck.component
			type={type}
			name={name}
			size={size}
			inline={inline}
			data={data}
			disabled={disabled}
			defaultValue={defaultValue}
			{...rest}
			{...overrides.FormCheck.attributes(state)}
			css={overrides.FormCheck.styles(state)}
		>
			{allChildren}
		</overrides.FormCheck.component>
	);
};

// ==============================
// Types
// ==============================

FormCheck.propTypes = {
	/**
	 * Form check type.
	 */
	type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,

	/**
	 * The form check input element’s name.
	 */
	name: PropTypes.string,

	/**
	 * Form check size.
	 */
	size: PropTypes.oneOf(['medium', 'large']).isRequired,

	/**
	 * To inline the element
	 */
	inline: PropTypes.bool.isRequired,

	/**
	 * Disable all Form check options
	 */
	disabled: PropTypes.bool,

	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,

	/**
	 * The data prop shape
	 */
	data: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.node,
			text: PropTypes.string,
		})
	),

	/**
	 * The options already checked
	 */
	defaultValue: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),

	/**
	 * A function called on change
	 */
	onChange: PropTypes.func,

	/**
	 * Form check item(s)
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormCheck: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
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

FormCheck.defaultProps = {
	type: 'checkbox',
	inline: false,
	size: 'medium',
};
