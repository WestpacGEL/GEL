/** @jsx jsx */

import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import PropTypes from 'prop-types';

import { defaultLogoLink } from './overrides/logoLink';
import { defaultFooter } from './overrides/footer';
import { defaultInner } from './overrides/inner';
import { defaultRight } from './overrides/right';
import { defaultLogo } from './overrides/logo';
import { defaultLeft } from './overrides/left';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const Footer = ({
	logoLink,
	logoAssistiveText,
	srOnlyText,
	children,
	overrides: componentOverrides,
	...rest
}) => {
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
						<Logo state={state} {...logoAttributes(state)} css={logoStyles(state)} />
					</LogoLink>
				</Right>
			</Inner>
		</Footer>
	);
};

// ==============================
// Types
// ==============================

Footer.propTypes = {
	/**
	 * The link to redirect to on logo click
	 */
	logoLink: PropTypes.string,

	/**
	 * Aria-label for the logo
	 */
	logoAssistiveText: PropTypes.string,

	/**
	 * Visually hidden text for logo link
	 */
	srOnlyText: PropTypes.string,

	/**
	 * Content to be put on the left side of the footer
	 */
	children: PropTypes.node,

	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Footer: PropTypes.shape({
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

Footer.defaultProps = {
	logoLink: '#',
};
