import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';

import { defaultFooterItem } from './overrides/footerItem';
import { defaultFooter } from './overrides/footer';
import pkg from '../package.json';

export interface FormPodPanelFooterProps {
	/**
	 * Left component.
	 */
	left?: React.ReactNode;
	/**
	 * Right component.
	 */
	right?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Footer?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		FooterItem?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const FormPodPanelFooter = ({
	left,
	right,
	overrides: componentOverrides,
	...rest
}: FormPodPanelFooterProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Footer: defaultFooter,
		FooterItem: defaultFooterItem,
	};

	const state = {
		left,
		right,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
		FooterItem: {
			component: FooterItem,
			styles: footerItemStyles,
			attributes: footerItemAttributes,
		},
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Footer {...rest} state={state} {...footerAttributes(state)} css={footerStyles(state)}>
			{left && (
				<FooterItem
					state={state}
					{...footerItemAttributes(state)}
					css={footerItemStyles({ ...state, position: 'left' })}
				>
					{left}
				</FooterItem>
			)}
			{right && (
				<FooterItem
					state={state}
					{...footerItemAttributes(state)}
					css={footerItemStyles({ ...state, position: 'right' })}
				>
					{right}
				</FooterItem>
			)}
		</Footer>
	);
};

FormPodPanelFooter.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Left component.
	 */
	left: PropTypes.node,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Footer: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		FooterItem: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Right component.
	 */
	right: PropTypes.node,
};
