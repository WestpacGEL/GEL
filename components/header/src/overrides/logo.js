import { jsx, useBrand, getLabel } from '@westpac/core';
import { logoMap } from './_utils';

// ==============================
// Component
// ==============================

const Logo = ({ state: { logoAssistiveText }, ...rest }) => {
	const { BRAND } = useBrand();
	const Logo = logoMap[BRAND.code];
	return <Logo align="left" copyrightYear="2020" assistiveText={logoAssistiveText} {...rest} />;
};

// ==============================
// Styles
// ==============================

const logoStyles = () => ({ label: getLabel('header-logo') });

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
