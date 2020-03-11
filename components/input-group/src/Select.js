/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useInputGroupContext } from './InputGroup';
import PropTypes from 'prop-types';

import { defaultSelect } from './overrides/select';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Select = ({ position, size, data, overrides, ...rest }) => {
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
		position,
		size,
		data,
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Select: { component: Select, styles: selectStyles, attributes: selectAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return <Select {...rest} state={state} {...selectAttributes(state)} css={selectStyles(state)} />;
};

// ==============================
// Types
// ==============================
Select.propTypes = {
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
	data: PropTypes.array.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Select: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Select.defaultProps = {
	size: 'medium',
};
