/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { useInputClusterContext } from './InputCluster';
import { defaultInputClusterItem } from './overrides/inputClusterItem';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const InputClusterItem = ({
	overrides,
	...rest
}: typeof InputClusterItem.propTypes & typeof InputClusterItem.defaultProps) => {
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

// ==============================
// Types
// ==============================

InputClusterItem.propTypes = {
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		InputClusterItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

InputClusterItem.defaultProps = {};
