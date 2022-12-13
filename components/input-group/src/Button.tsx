/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useInputGroupContext } from './InputGroup';
import PropTypes from 'prop-types';

import { defaultButton } from './overrides/button';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Button = ({
	instanceId,
	position,
	size,
	data,
	overrides,
	...rest
}: typeof Button.propTypes & typeof Button.defaultProps) => {
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

// ==============================
// Types
// ==============================

Button.propTypes = {
	/**
	 * What position this component is at
	 */
	position: PropTypes.oneOf(['before', 'after']).isRequired,

	/**
	 * What size the button-group is
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,

	/**
	 * The content of the component
	 */
	data: PropTypes.string,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Button: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Button.defaultProps = {
	look: 'hero', // button look to be spread to Button
	size: 'medium',
};
