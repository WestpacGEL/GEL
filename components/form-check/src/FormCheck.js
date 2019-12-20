/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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
	current: currentDefault,
	overrides: componentOverrides,
	...rest
}) => {
	const [current, setCurrent] = useState(currentDefault);

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
		current,
		data,
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
					setCurrent={setCurrent}
					value={props.value}
					checked={props.value === current}
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
				setCurrent,
				checked: child.props.value === current,
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
			Input: PropTypes.shape({
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
