import React from 'react';
import PropTypes from 'prop-types';
import { useBrand, overrideReconciler } from '@westpac/core';
import { useState, useEffect } from 'react';
import { SkipLink } from '@westpac/a11y';
import throttle from 'lodash.throttle';

import { defaultLeftBtn } from './overrides/leftBtn';
import { defaultLogoLink } from './overrides/logoLink';
import { defaultInner } from './overrides/inner';
import { defaultRight } from './overrides/right';
import { defaultLeft } from './overrides/left';
import { defaultLogo } from './overrides/logo';
import { defaultHeader } from './overrides/header';
import pkg from '../package.json';

export interface HeaderProps {
	/**
	 * The link to redirect to on logo click
	 */
	logoLink?: string;
	/**
	 * On click handler for logo
	 */
	logoOnClick?: (...args: unknown[]) => unknown;
	/**
	 * Center logo at xs breakpoint
	 */
	logoCenter?: boolean;
	/**
	 * Aria-label for the logo
	 */
	logoAssistiveText?: string;
	/**
	 * Icon type for left button either 'arrow' or 'hamburger'
	 */
	leftIcon?: 'arrow' | 'hamburger';
	/**
	 * On click handler for left button
	 */
	leftOnClick?: (...args: unknown[]) => unknown;
	/**
	 * Visually hidden text for left button
	 */
	leftAssistiveText?: string;
	/**
	 * Enable fixed header
	 */
	fixed?: boolean;
	/**
	 * The id to the pages main content
	 */
	skipToContentId?: string;
	/**
	 * Text content for skip link
	 */
	skipLinkContent?: string;
	/**
	 * Content to be put on the right side of the header
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Header?: {
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
		LeftButton?: {
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

export const Header = ({
	logoLink = '#',
	skipLinkContent = 'Skip to main content',
	logoOnClick,
	logoCenter,
	logoAssistiveText,
	leftIcon,
	leftOnClick,
	leftAssistiveText,
	fixed,
	skipToContentId,
	children,
	overrides: componentOverrides,
	...rest
}: HeaderProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

	const [scrolled, setScrolled] = useState(false);

	const defaultOverrides = {
		Header: defaultHeader,
		Inner: defaultInner,
		Left: defaultLeft,
		LeftBtn: defaultLeftBtn,
		LogoLink: defaultLogoLink,
		Logo: defaultLogo,
		Right: defaultRight,
	};

	const state = {
		logoLink,
		logoOnClick,
		logoCenter,
		logoAssistiveText,
		leftIcon,
		leftOnClick,
		leftAssistiveText,
		fixed,
		skipToContentId,
		skipLinkContent,
		scrolled,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		Inner: { component: Inner, styles: headerInnerStyles, attributes: headerInnerAttributes },
		Left: { component: Left, styles: leftStyles, attributes: leftAttributes },
		LeftBtn: { component: LeftBtn, styles: leftButtonStyles, attributes: leftButtonAttributes },
		LogoLink: { component: LogoLink, styles: logoLinkStyles, attributes: logoLinkAttributes },
		Logo: { component: Logo, styles: logoStyles, attributes: logoAttributes },
		Right: { component: Right, styles: rightStyles, attributes: rightAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	useEffect(() => {
		const handleScroll = throttle(() => {
			let hasScrolled = false;
			if (window.scrollY > 5) {
				hasScrolled = true;
			}
			setScrolled(hasScrolled);
		}, 10);

		if (fixed) window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Header {...rest} state={state} {...headerAttributes(state)} css={headerStyles(state)}>
			<Inner state={state} {...headerInnerAttributes(state)} css={headerInnerStyles(state)}>
				{skipToContentId && (
					<SkipLink href={skipToContentId} overrides={componentOverrides}>
						{skipLinkContent}
					</SkipLink>
				)}
				{leftIcon && (
					<Left state={state} {...leftAttributes(state)} css={leftStyles(state)}>
						<LeftBtn state={state} {...leftButtonAttributes(state)} css={leftButtonStyles(state)} />
					</Left>
				)}
				<LogoLink
					state={state}
					onClick={logoOnClick}
					{...logoLinkAttributes(state)}
					css={logoLinkStyles(state)}
				>
					<Logo state={state} {...logoAttributes(state)} css={logoStyles(state)} />
				</LogoLink>
				{children && (
					<Right state={state} {...rightAttributes(state)} css={rightStyles(state)}>
						{children}
					</Right>
				)}
			</Inner>
		</Header>
	);
};

Header.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn proptypes"  |
	// ----------------------------------------------------------------------
	/**
	 * Content to be put on the right side of the header
	 */
	children: PropTypes.node,
	/**
	 * Enable fixed header
	 */
	fixed: PropTypes.bool,
	/**
	 * Visually hidden text for left button
	 */
	leftAssistiveText: PropTypes.string,
	/**
	 * Icon type for left button either 'arrow' or 'hamburger'
	 */
	leftIcon: PropTypes.oneOf(['arrow', 'hamburger']),
	/**
	 * On click handler for left button
	 */
	leftOnClick: PropTypes.func,
	/**
	 * Aria-label for the logo
	 */
	logoAssistiveText: PropTypes.string,
	/**
	 * Center logo at xs breakpoint
	 */
	logoCenter: PropTypes.bool,
	/**
	 * The link to redirect to on logo click
	 */
	logoLink: PropTypes.string,
	/**
	 * On click handler for logo
	 */
	logoOnClick: PropTypes.func,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Header: PropTypes.shape({
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
		LeftButton: PropTypes.shape({
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
	 * Text content for skip link
	 */
	skipLinkContent: PropTypes.string,
	/**
	 * The id to the pages main content
	 */
	skipToContentId: PropTypes.string,
};

Header.defaultProps = { logoLink: '#', skipLinkContent: 'Skip to main content' };
