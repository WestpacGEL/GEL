/** @jsx jsx */

import { jsx, useBrand, overrideReconciler2 as overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Select as SelectWrapper, selectStyles } from './overrides/select';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Select = ({ position, size, data, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Select: {
			styles: selectStyles,
			component: SelectWrapper,
			attributes: (_, a) => a,
		},
	};

	const state = {
		position,
		size,
		data,
		overrides: componentOverrides,
		...rest,
	};

	const overrides = overrideReconciler(
		defaultOverrides,
		tokenOverrides,
		brandOverrides,
		componentOverrides
	);

	return (
		<overrides.Select.component
			{...overrides.Select.attributes(state)}
			css={overrides.Select.styles(state)}
		/>
	);
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
