import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const LogoLink = ({ state: _, ...rest }) => <a {...rest} />;

// ==============================
// Styles
// ==============================

const logoLinkStyles = () => {
	const mq = useMediaQuery();
	return mq({
		label: getLabel('footer-logo-link'),
		display: 'block',
		float: 'right',
		marginTop: ['1.125rem', null, 0],
	})[0];
};

// ==============================
// Attributes
// ==============================

const logoLinkAttributes = (_, { logoLink }) => ({ href: logoLink });

// ==============================
// Exports
// ==============================

export const defaultLogoLink = {
	component: LogoLink,
	styles: logoLinkStyles,
	attributes: logoLinkAttributes,
};
