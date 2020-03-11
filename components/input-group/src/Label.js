/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { useInputGroupContext } from './InputGroup';
import PropTypes from 'prop-types';

import { defaultLabel } from './overrides/label';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Label = ({ position, size, data, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();
	const context = useInputGroupContext();

	const defaultOverrides = {
		Label: defaultLabel,
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
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Label {...rest} state={state} {...labelAttributes(state)} css={labelStyles(state)}>
			{data}
		</Label>
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
