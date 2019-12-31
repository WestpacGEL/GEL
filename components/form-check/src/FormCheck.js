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

import { Wrapper, wrapperStyles } from './overrides/wrapper';
import { Option } from './Option';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormCheck = ({
	children,
	type,
	name,
	size,
	inline,
	flipped,
	data,
	onChange = () => {},
	defaultValue,
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
		styles: wrapperStyles,
		component: Wrapper,
		attributes: state => state,
	};

	const state = {
		type,
		name,
		size,
		inline,
		flipped,
		data,
		defaultValue,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides,
		state
	);

	let allChildren = [];
	if (data) {
		data.map((props, index) => {
			allChildren.push(
				<Option
					key={index}
					{...state}
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
		const length = Children.count(children);
		allChildren = Children.map(children, child =>
			cloneElement(child, {
				...state,
				handleChange,
				selected: selected.includes(child.props.value),
				overrides: componentOverrides,
			})
		);
	}

	return (
		<overrides.component css={overrides.styles} {...overrides.attributes(state)}>
			{allChildren}
		</overrides.component>
	);
};

// ==============================
// Types
// ==============================

const options = {
	type: ['checkbox', 'radio'],
	size: ['medium', 'large'],
};

FormCheck.propTypes = {
	/**
	 * Form check type.
	 *
	 * This prop is passed to children.
	 */
	type: PropTypes.oneOf(options.type).isRequired,

	/**
	 * The form check input element’s name.
	 *
	 * This prop is passed to children.
	 */
	name: PropTypes.string.isRequired,

	/**
	 * Form check size.
	 *
	 * This prop is passed to children.
	 */
	size: PropTypes.oneOf(options.size).isRequired,

	/**
	 * Form check orientation (control on the right).
	 *
	 * This prop is passed to children.
	 */
	flipped: PropTypes.bool.isRequired,

	/**
	 * Form check item(s)
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		styles: PropTypes.func,
		component: PropTypes.elementType,
		attributes: PropTypes.object,
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

FormCheck.defaultProps = {
	type: 'checkbox',
	size: 'medium',
	flipped: false,
};
