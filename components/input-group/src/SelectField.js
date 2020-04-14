/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React from 'react';
import PropTypes from 'prop-types';

import { VisuallyHidden } from '@westpac/a11y';

import { defaultSelect } from './overrides/select';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const SelectField = ({ instanceId, position, label, data, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputGroupContext();

	const defaultOverrides = {
		Select: defaultSelect,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		instanceId,
		position,
		label,
		data,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Select: { component: Select, styles: selectStyles, attributes: selectAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<>
			<VisuallyHidden tag="label" htmlFor={instanceId}>
				{label}
			</VisuallyHidden>
			<Select
				{...rest}
				state={state}
				{...selectAttributes(state)}
				css={{ '&&': selectStyles(state) }}
			/>
		</>
	);
};

// ==============================
// Types
// ==============================

SelectField.propTypes = {
	/**
	 * The instance ID for the label and select
	 */
	instanceId: PropTypes.string.isRequired,

	/**
	 * What position this component is at
	 */
	position: PropTypes.oneOf(['left', 'right']).isRequired,

	/**
	 * The content of the component
	 */
	label: PropTypes.string.isRequired,

	/**
	 * The content of the component
	 */
	data: PropTypes.array.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		SelectField: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

SelectField.defaultProps = {
	size: 'medium',
};
