import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultFormSection } from './overrides/formSection';
import pkg from '../package.json';

interface FormSectionProps {
	/**
	 * Remove section padding
	 */
	noPadding?: boolean;
	/**
	 * The override API
	 */
	overrides?: {
		FormSection?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormSection = ({
	noPadding = false,
	overrides: componentOverrides,
	...rest
}: FormSectionProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		FormSection: defaultFormSection,
	};

	const state = {
		noPadding,
		overrides: componentOverrides,
		...rest,
	};

	const {
		FormSection: {
			component: FormSection,
			styles: formSectionStyles,
			attributes: formSectionAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<FormSection
			{...rest}
			state={state}
			{...formSectionAttributes(state)}
			css={formSectionStyles(state)}
		/>
	);
};

FormSection.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Remove section padding
	 */
	noPadding: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormSection: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};

FormSection.defaultProps = { noPadding: false };
