import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

import { defaultLogoLink } from './overrides/logoLink';
import { defaultFooter } from './overrides/footer';
import { defaultInner } from './overrides/inner';
import { defaultRight } from './overrides/right';
import { defaultLogo } from './overrides/logo';
import { defaultLeft } from './overrides/left';
import pkg from '../package.json';

export interface FooterProps {
	/**
	 * The link to redirect to on logo click
	 */
	logoLink?: string;
	/**
	 * Aria-label for the logo
	 */
	logoAssistiveText?: string;
	/**
	 * Visually hidden text for logo link
	 */
	srOnlyText?: string;
	/**
	 * Right offset for use with GEL sidebar component
	 */
	offsetSidebar?: boolean;
	/**
	 * Hide logo
	 */
	hideLogo?: boolean;
	/**
	 * Content to be put on the left side of the footer
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
		Inner?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Left?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		LogoLink?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Logo?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Right?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Footer = ({
	logoAssistiveText,
	srOnlyText,
	hideLogo,
	children,
	logoLink = '#',
	overrides: componentOverrides,
	...rest
}: FooterProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const defaultOverrides = {
		Footer: defaultFooter,
		Inner: defaultInner,
		Left: defaultLeft,
		Right: defaultRight,
		LogoLink: defaultLogoLink,
		Logo: defaultLogo,
	};

	const state = {
		logoLink,
		logoAssistiveText,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Footer: { component: Footer, styles: footerStyles, attributes: footerAttributes },
		Inner: { component: Inner, styles: innerStyles, attributes: innerAttributes },
		Left: { component: Left, styles: leftStyles, attributes: leftAttributes },
		Right: { component: Right, styles: rightStyles, attributes: rightAttributes },
		LogoLink: { component: LogoLink, styles: logoLinkStyles, attributes: logoLinkAttributes },
		Logo: { component: Logo, styles: logoStyles, attributes: logoAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Footer {...rest} state={state} {...footerAttributes(state)} css={footerStyles(state)}>
			<Inner state={state} {...innerAttributes(state)} css={innerStyles(state)}>
				<Left state={state} {...leftAttributes(state)} css={leftStyles(state)}>
					{children}
				</Left>
				<Right state={state} {...rightAttributes(state)} css={rightStyles(state)}>
					<LogoLink state={state} {...logoLinkAttributes(state)} css={logoLinkStyles(state)}>
						{srOnlyText && (
							<VisuallyHidden overrides={componentOverrides}>{srOnlyText}</VisuallyHidden>
						)}
						{!hideLogo && <Logo state={state} {...logoAttributes(state)} css={logoStyles(state)} />}
					</LogoLink>
				</Right>
			</Inner>
		</Footer>
	);
};

Footer.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Content to be put on the left side of the footer
	 */
	children: PropTypes.node,
	/**
	 * Hide logo
	 */
	hideLogo: PropTypes.bool,
	/**
	 * Aria-label for the logo
	 */
	logoAssistiveText: PropTypes.string,
	/**
	 * The link to redirect to on logo click
	 */
	logoLink: PropTypes.string,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Footer: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Inner: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Left: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Logo: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		LogoLink: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Right: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Visually hidden text for logo link
	 */
	srOnlyText: PropTypes.string,
};
