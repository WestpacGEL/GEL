import { jsx, useBrand, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const LogoLink = ({ state: _, ...rest }) => <a {...rest} />;

// ==============================
// Styles
// ==============================

const logoLinkStyles = (_, { logoCenter }) => {
	const { LAYOUT } = useBrand();
	return {
		label: getLabel('header-logo-link'),
		display: 'inline-flex',
		alignItems: 'center',
		...(logoCenter && {
			[`@media (max-width: ${LAYOUT.breakpoints.sm}px)`]: {
				position: 'absolute',
				zIndex: 0,
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
			},
		}),
	};
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
