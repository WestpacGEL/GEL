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
	flipped,
	data,
	defaultValue,
	onChange = () => {},
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const defaultValueAsArray = defaultValue ? asArray(defaultValue) : [];

	devWarning(
		type === 'radio' && defaultValueAsArray.length > 1,
		'The form-check as radio may only have one "current" item set.'
	);

	const [selected, setSelected] = useState(defaultValueAsArray);

	const handleChange = (event, value, wasSelected) => {
		wrapHandlers(
			() => onChange(event, value, wasSelected),
			() => {
				if (type === 'radio') {
					setSelected(asArray(value));
				} else {
					if (wasSelected) {
						setSelected(selected.filter(item => item !== value));
					} else {
						setSelected([...selected, value]);
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
		flipped,
		data,
		defaultValue,
		onChange,
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
					type={type}
					name={name}
					size={size}
					inline={inline}
					flipped={flipped}
					data={data}
					defaultValue={defaultValue}
					value={props.value}
					handleChange={handleChange}
					selected={selected.includes(props.value)}
					overrides={componentOverrides}
				>
					{props.text}
				</Option>
			);
		});
	} else {
		allChildren = Children.map(children, child =>
			cloneElement(child, {
				type,
				name,
				size,
				inline,
				flipped,
				data,
				defaultValue,
				handleChange,
				selected: selected.includes(child.props.value),
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
			flipped={flipped}
			data={data}
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
	 * Form check orientation (control on the right).
	 */
	flipped: PropTypes.bool.isRequired,

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
	 * The options already selected
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
	flipped: false,
};
