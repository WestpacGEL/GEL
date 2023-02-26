import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultFooter } from './overrides/footer';

import { usePanelContext } from './Panel';
import pkg from '../package.json';

export interface PanelFooterProps {
	/**
	 * Panel footer content
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Footer?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const PanelFooter = ({ children, overrides, ...rest }: PanelFooterProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const context = usePanelContext();

	const defaultOverrides = {
		Footer: defaultFooter,
	};

	const componentOverrides = overrides || context.state.overrides;

	const state = {
		context: context.state,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Footer {...rest} state={state} {...footerAttributes(state)} css={footerStyles(state)}>
			{children}
		</Footer>
	);
};

PanelFooter.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Panel footer content
	 */
	children: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Footer: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
};
