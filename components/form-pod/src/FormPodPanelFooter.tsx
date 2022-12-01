/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import PropTypes from 'prop-types';

import { defaultFooterItem } from './overrides/footerItem';
import { defaultFooter } from './overrides/footer';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const FormPodPanelFooter = ({
	left,
	right,
	overrides: componentOverrides,
	...rest
}: typeof FormPodPanelFooter.propTypes & typeof FormPodPanelFooter.defaultProps) => {
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

// ==============================
// Types
// ==============================

FormPodPanelFooter.propTypes = {
	/**
	 * Left component.
	 */
	left: PropTypes.node,

	/**
	 * Right component.
	 */
	right: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Footer: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		FooterItem: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

FormPodPanelFooter.defaultProps = {};
