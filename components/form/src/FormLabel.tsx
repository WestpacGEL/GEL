import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { forwardRef } from 'react';

import { defaultFormLabel } from './overrides/formLabel';
import { useFormContext } from './Form';
import pkg from '../package.json';

interface FormLabelProps {
	/**
	 * Sub-label mode (smaller label text size)
	 */
	subLabel?: boolean;

	/**
	 * Component tag
	 */
	tag?: 'label' | 'legend';

	/**
	 * Label `for` attribute.
	 *
	 */
	htmlFor?: string;

	/**
	 * Enable ‘screen reader only’ mode
	 */
	srOnly?: boolean;
	overrides?: any;
}

// ==============================
// Component
// ==============================

export const FormLabel = forwardRef(
	(
		{ htmlFor, srOnly, subLabel = false, tag = 'label', overrides, ...rest }: FormLabelProps,
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

		const componentOverrides: any = overrides || context?.state?.overrides;
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

FormLabel.displayName = 'FormLabel';

// ==============================
// Types
// ==============================

FormLabel.defaultProps = {
	subLabel: false,
	tag: 'label',
};

FormLabel.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Label `for` attribute.
	 */
	htmlFor: PropTypes.string,
	overrides: PropTypes.any,
	/**
	 * Enable ‘screen reader only’ mode
	 */
	srOnly: PropTypes.bool,
	/**
	 * Sub-label mode (smaller label text size)
	 */
	subLabel: PropTypes.bool,
	/**
	 * Component tag
	 */
	tag: PropTypes.oneOf(['label', 'legend']),
};
