import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { createContext, ReactNode, useContext } from 'react';

import { defaultInputCluster } from './overrides/inputCluster';
import pkg from '../package.json';

// ==============================
// Context and consumer hook
// ==============================

const InputClusterContext = createContext<any>(null);

export const useInputClusterContext = () => {
	const context = useContext(InputClusterContext);
	if (!context) {
		throw new Error('<InputClusterItem/> components should be wrapped in a <InputCluster>.');
	}
	return context;
};

export interface InputClusterProps {
	/**
	 * Horizontal mode.
	 *
	 */
	horizontal?: boolean;
	/**
	 * Children
	 */
	children?: ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		InputCluster?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const InputCluster = ({
	horizontal,
	children,
	overrides: componentOverrides,
	...rest
}: InputClusterProps) => {
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

InputCluster.defaultProps = {
	horizontal: false,
};

InputCluster.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Children
	 */
	children: PropTypes.node,
	/**
	 * Horizontal mode.
	 */
	horizontal: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		InputCluster: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
