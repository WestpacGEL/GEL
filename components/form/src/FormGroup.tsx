import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { useFormContext } from './Form';
import { defaultFormGroup } from './overrides/formGroup';
import pkg from '../package.json';

export interface FormGroupProps {
	/**
	 * Primary mode.
	 *
	 * Used exclusively to render the ‘Fork’ pattern.
	 */
	primary?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		FormGroup?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormGroup = ({ primary = false, overrides, ...rest }: FormGroupProps) => {
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

FormGroup.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormGroup: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Primary mode.
	 *
	 * Used exclusively to render the ‘Fork’ pattern.
	 */
	primary: PropTypes.bool,
};

FormGroup.defaultProps = { primary: false };
