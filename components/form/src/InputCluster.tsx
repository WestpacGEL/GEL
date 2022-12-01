/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

import { defaultInputCluster } from './overrides/inputCluster';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const InputClusterContext = createContext(null);

export const useInputClusterContext = () => {
	const context = useContext(InputClusterContext);
	if (!context) {
		throw new Error('<InputClusterItem/> components should be wrapped in a <InputCluster>.');
	}
	return context;
};

// ==============================
// Component
// ==============================

export const InputCluster = ({
	horizontal,
	children,
	overrides: componentOverrides,
	...rest
}: typeof InputCluster.propTypes & typeof InputCluster.defaultProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		InputCluster: defaultInputCluster,
	};

	const state = {
		horizontal,
		overrides: componentOverrides,
	};

	const {
		InputCluster: {
			component: InputCluster,
			styles: inputClusterStyles,
			attributes: inputClusterAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<InputClusterContext.Provider value={{ state }}>
			<InputCluster {...rest} {...inputClusterAttributes(state)} css={inputClusterStyles(state)}>
				{children}
			</InputCluster>
		</InputClusterContext.Provider>
	);
};

// ==============================
// Types
// ==============================

InputCluster.propTypes = {
	/**
	 * Horizontal mode.
	 *
	 */
	horizontal: PropTypes.bool,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		InputCluster: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

InputCluster.defaultProps = {
	horizontal: false,
};
