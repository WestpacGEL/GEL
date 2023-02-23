import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useInputGroupContext } from './InputGroup';

import { defaultButton } from './overrides/button';
import pkg from '../package.json';

export interface ButtonProps {
	/**
	 * The button color
	 */
	look?: 'primary' | 'hero' | 'neutral' | 'success' | 'danger';
	/**
	 * Define an id for internal elements
	 */
	instanceId?: string;
	/**
	 * What position this component is at
	 */
	position: 'before' | 'after';
	/**
	 * What size the button-group is
	 */
	size: 'small' | 'medium' | 'large' | 'xlarge';
	/**
	 * The content of the component
	 */
	data?: string;
	/**
	 * The override API
	 */
	overrides?: {
		Button?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Button = ({
	instanceId,
	position,
	data,
	overrides,
	look = 'hero',
	size = 'medium',
	...rest
}: ButtonProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const context = useInputGroupContext();

	const defaultOverrides = {
		Button: defaultButton,
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
		Button: { component: Button, styles: buttonStyles, attributes: buttonAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Button {...rest} state={state} {...buttonAttributes(state)} css={buttonStyles(state)}>
			{data}
		</Button>
	);
};

Button.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The content of the component
	 */
	data: PropTypes.string,
	/**
	 * Define an id for internal elements
	 */
	instanceId: PropTypes.string,
	/**
	 * The button color
	 */
	look: PropTypes.oneOf(['danger', 'hero', 'neutral', 'primary', 'success']),
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * What position this component is at
	 */
	position: PropTypes.oneOf(['after', 'before']).isRequired,
	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['large', 'medium', 'small', 'xlarge']).isRequired,
};

Button.defaultProps = { look: 'hero', size: 'medium' };
