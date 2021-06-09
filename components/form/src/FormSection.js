/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultFormSection } from './overrides/formSection';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormSection = ({ noPadding, overrides: componentOverrides, ...rest }) => {
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

// ==============================
// Types
// ==============================

FormSection.propTypes = {
	/**
	 * Remove section padding
	 */
	noPadding: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		FormSection: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormSection.defaultProps = {
	noPadding: false,
};
