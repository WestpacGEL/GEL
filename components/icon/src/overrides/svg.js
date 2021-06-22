/** @jsx jsx */

import { jsx } from '@westpac/core';

// ==============================
// Component
// ==============================

const Svg = ({ state: { assistiveText }, ...rest }) => (
	<svg
		aria-label={assistiveText}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		role="img"
		focusable="false"
		{...rest}
	/>
);

// ==============================
// Styles
// ==============================

const svgStyles = () => ({
	label: 'icon-svg',
	display: 'block',
});

// ==============================
// Attributes
// ==============================

const svgAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultSvg = {
	component: Svg,
	styles: svgStyles,
	attributes: svgAttributes,
};
