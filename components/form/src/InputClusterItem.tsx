import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { useInputClusterContext } from './InputCluster';
import { defaultInputClusterItem } from './overrides/inputClusterItem';
import pkg from '../package.json';

interface InputClusterItemProps {
	/**
	 * The override API
	 */
	overrides?: {
		InputClusterItem?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const InputClusterItem = ({ overrides, ...rest }: InputClusterItemProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = useInputClusterContext();

	const defaultOverrides = {
		InputClusterItem: defaultInputClusterItem,
	};

	const componentOverrides = overrides || context?.state?.overrides;
	const horizontal = context?.state?.horizontal;

	const state = {
		horizontal,
		context: context?.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		InputClusterItem: {
			component: InputClusterItem,
			styles: inputClusterItemStyles,
			attributes: inputClusterItemAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);
	return (
		<InputClusterItem
			{...rest}
			state={state}
			{...inputClusterItemAttributes(state)}
			css={inputClusterItemStyles(state)}
		/>
	);
};

InputClusterItem.defaultProps = {};

InputClusterItem.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		InputClusterItem: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
