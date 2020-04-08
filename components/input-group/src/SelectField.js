/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import React from 'react';
import PropTypes from 'prop-types';

import { defaultLabel } from './overrides/label';
import { defaultSelect } from './overrides/select';

import { useInputGroupContext } from './InputGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const SelectField = ({ instanceId, position, size, label, data, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputGroupContext();

	const defaultOverrides = {
		Label: defaultLabel,
		Select: defaultSelect,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		instanceId,
		position,
		size,
		label,
		data,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
		Select: { component: Select, styles: selectStyles, attributes: selectAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<>
			<Label state={state} {...labelAttributes(state)} css={{ '&&': labelStyles(state) }}>
				{label}
			</Label>
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
	 * The label text for the select
	 */
	label: PropTypes.string.isRequired,

	/**
	 * What position this component is at
	 */
	position: PropTypes.oneOf(['left', 'right']).isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

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
