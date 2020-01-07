/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
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
		subComponent: {
			Select: {
				styles: selectStyles,
				component: SelectWrapper,
				attributes: state => state,
			},
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
		componentOverrides,
		state
	);

	return (
		<overrides.subComponent.Select.component
			css={overrides.subComponent.Select.styles}
			{...overrides.subComponent.Select.attributes(state)}
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
};

Select.defaultProps = {
	size: 'medium',
};
