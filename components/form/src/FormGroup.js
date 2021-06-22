/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { useFormContext } from './Form';
import { defaultFormGroup } from './overrides/formGroup';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormGroup = ({ primary, overrides, ...rest }) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useFormContext();

	const defaultOverrides = {
		FormGroup: defaultFormGroup,
	};

	const componentOverrides = overrides || context?.state?.overrides;
	const inline = context?.state?.inline || false;
	const spacing = context?.state?.spacing || 'medium';

	const state = {
		primary,
		inline,
		spacing,
		context: context?.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		FormGroup: { component: FormGroup, styles: formGroupStyles, attributes: formGroupAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<FormGroup
			{...rest}
			state={state}
			{...formGroupAttributes(state)}
			css={formGroupStyles(state)}
		/>
	);
};

// ==============================
// Types
// ==============================

FormGroup.propTypes = {
	/**
	 * Primary mode.
	 *
	 * Used exclusively to render the ‘Fork’ pattern.
	 */
	primary: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormGroup: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormGroup.defaultProps = {
	primary: false,
};
