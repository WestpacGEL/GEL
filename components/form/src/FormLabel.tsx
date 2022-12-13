/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { defaultFormLabel } from './overrides/formLabel';
import { useFormContext } from './Form';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormLabel = forwardRef(
	(
		{
			tag,
			subLabel,
			htmlFor,
			srOnly,
			overrides,
			...rest
		}: typeof FormLabel.propTypes & typeof FormLabel.defaultProps,
		ref
	) => {
		const {
			OVERRIDES: { [pkg.name]: tokenOverrides },
			[pkg.name]: brandOverrides,
		} = useBrand();

		const context = useFormContext();

		const defaultOverrides = {
			FormLabel: defaultFormLabel,
		};

		const componentOverrides = overrides || context?.state?.overrides;
		const spacing = context?.state?.spacing || 'medium';

		const state = {
			tag,
			subLabel,
			htmlFor,
			srOnly,
			spacing,
			context: context?.state,
			overrides: componentOverrides,
			...rest,
		};

		const {
			FormLabel: { component: FormLabel, styles: formLabelStyles, attributes: formLabelAttributes },
		} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

		return (
			<FormLabel
				ref={ref}
				{...rest}
				state={state}
				{...formLabelAttributes(state)}
				css={formLabelStyles(state)}
			/>
		);
	}
);

// ==============================
// Types
// ==============================

FormLabel.propTypes = {
	/**
	 * Sub-label mode (smaller label text size)
	 */
	subLabel: PropTypes.bool,

	/**
	 * Component tag
	 */
	tag: PropTypes.oneOf(['label', 'legend']),

	/**
	 * Label `for` attribute.
	 *
	 */
	htmlFor: PropTypes.string,

	/**
	 * Enable ‘screen reader only’ mode
	 */
	srOnly: PropTypes.bool,
};

FormLabel.defaultProps = {
	subLabel: false,
	tag: 'label',
};
