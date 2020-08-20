/** @jsx jsx */

import { jsx, getLabel } from '@westpac/core';

const Svg = ({ state: { assistiveText }, ...rest }) => (
	<svg
		aria-label={assistiveText}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 78 78"
		role="img"
		focusable="false"
		{...rest}
	/>
);

const svgStyles = () => ({
	label: getLabel('pictogram-svg'),
});

const svgAttributes = () => null;

export const defaultSvg = {
	component: Svg,
	styles: svgStyles,
	attributes: svgAttributes,
};
