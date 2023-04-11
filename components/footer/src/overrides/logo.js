import { jsx, useBrand, getLabel } from '@westpac/core';
import { logoMap } from './_utils';

// ==============================
// Component
// ==============================

const Logo = ({ state: { logoAssistiveText }, ...rest }) => {
	const { BRAND } = useBrand();
	const Logo = logoMap[BRAND.code];
	return <Logo copyrightYear="2020" align="right" assistiveText={logoAssistiveText} {...rest} />;
};

// ==============================
// Styles
// ==============================

const logoStyles = () => ({ label: getLabel('footer-logo') });

// ==============================
// Attributes
// ==============================

const logoAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultLogo = {
	component: Logo,
	styles: logoStyles,
	attributes: logoAttributes,
};
