import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultLabel } from './overrides/label';
import pkg from '../package.json';

export interface LabelProps {
	/**
	 * Label look
	 */
	look: 'primary' | 'hero' | 'neutral' | 'faint' | 'success' | 'info' | 'warning' | 'danger';
	/**
	 * Label text
	 */
	value: string;
	/**
	 * The override API
	 */
	overrides?: {
		Label?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Label = ({
	look = 'primary',
	value,
	overrides: componentOverrides,
	...rest
}: LabelProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Label: defaultLabel,
	};

	const state = {
		look,
		value,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Label: { component: Label, styles: labelStyles, attributes: labelAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Label {...rest} state={state} {...labelAttributes(state)} css={labelStyles(state)}>
			{value}
		</Label>
	);
};

Label.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Label look
	 */
	look: PropTypes.oneOf([
		'danger',
		'faint',
		'hero',
		'info',
		'neutral',
		'primary',
		'success',
		'warning',
	]).isRequired,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Label: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Label text
	 */
	value: PropTypes.string.isRequired,
};
