/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { SkipLink } from '@westpac/a11y';
import PropTypes from 'prop-types';

import { defaultLeftBtn } from './overrides/leftBtn';
import { defaultLogoLink } from './overrides/logoLink';
import { defaultInner } from './overrides/inner';
import { defaultRight } from './overrides/right';
import { defaultLeft } from './overrides/left';
import { defaultLogo } from './overrides/logo';
import { defaultHeader } from './overrides/header';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Header = ({
	logoLink,
	logoOnClick,
	logoCenter,
	logoAssistiveText,
	leftIcon,
	leftOnClick,
	leftAssistiveText,
	skipToContentId,
	skipLinkContent,
	children,
	overrides: componentOverrides,
	...rest
}) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
	} = useBrand();

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
		skipToContentId,
		skipLinkContent,
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

// ==============================
// Types
// ==============================

Header.propTypes = {
	/**
	 * The link to redirect to on logo click
	 */
	logoLink: PropTypes.string,

	/**
	 * On click handler for logo
	 */
	logoLink: PropTypes.string,

	/**
	 * Center logo at xs breakpoint
	 */
	logoCenter: PropTypes.bool,

	/**
	 * Aria-label for the logo
	 */
	logoAssistiveText: PropTypes.string,

	/**
	 * Icon type for left button either 'arrow' or 'hamburger'
	 */
	leftIcon: PropTypes.oneOf(['arrow', 'hamburger']),

	/**
	 * On click handler for left button
	 */
	leftOnClick: PropTypes.func,

	/**
	 * Visually hidden text for left button
	 */
	leftAssistiveText: PropTypes.string,

	/**
	 * The id to the pages main content
	 */
	skipToContentId: PropTypes.string,

	/**
	 * Text content for skip link
	 */
	skipLinkContent: PropTypes.string,

	/**
	 * Content to be put on the right side of the header
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Header: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Inner: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Left: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		LeftButton: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		LogoLink: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Logo: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
		Right: PropTypes.shape({
			styles: PropTypes.func,
			component: PropTypes.elementType,
			attributes: PropTypes.func,
		}),
	}),
};

Header.defaultProps = {
	logoLink: '#',
	skipLinkContent: 'Skip to main content',
};
