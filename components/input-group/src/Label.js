/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Label as LabelWrapper, labelStyles } from './overrides/label';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Label = ({ position, size, data, overrides: componentOverrides, ...rest }) => {
	const {
		COLORS,
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Label: {
			styles: labelStyles,
			component: LabelWrapper,
			attributes: () => null,
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
		<overrides.Label.component
			position={position}
			size={size}
			data={data}
			{...rest}
			{...overrides.Label.attributes(state)}
			css={overrides.Label.styles(state)}
		>
			{data}
		</overrides.Label.component>
	);
};

// ==============================
// Types
// ==============================

Label.propTypes = {
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
	data: PropTypes.string.isRequired,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Label: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Label.defaultProps = {
	size: 'medium',
};
