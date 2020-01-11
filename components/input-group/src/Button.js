/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { Button as ButtonWrapper, buttonStyles } from './overrides/button';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Button = ({ position, size, data, overrides: componentOverrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		subComponent: {
			Button: {
				styles: buttonStyles,
				component: ButtonWrapper,
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
		<overrides.subComponent.Button.component
			{...overrides.subComponent.Button.attributes(state)}
			css={overrides.subComponent.Button.styles}
		>
			{data}
		</overrides.subComponent.Button.component>
	);
};

// ==============================
// Types
// ==============================

Button.propTypes = {
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
};

Button.defaultProps = {
	look: 'hero', // button look to be spread to Button
	size: 'medium',
};
