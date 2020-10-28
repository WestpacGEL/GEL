/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, asArray, getLabel } from '@westpac/core';

const Pictogram = ({ state: _, ...rest }) => <span {...rest} />;

const pictogramStyles = (_, { color, width, height, viewBoxWidth, viewBoxHeight }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const round = (f) => Math.round(f * 10) / 10; // 1DP
	const ratio = viewBoxWidth / viewBoxHeight;

	// Size styling (responsive)
	const widthArr = asArray(width || viewBoxWidth);
	const heightArr = asArray(height || viewBoxHeight);
	const styleSize = {
		width: width ? widthArr : heightArr.map((h) => (h !== null ? round(h * ratio) : null)),
		height: width ? widthArr.map((w) => (w !== null ? round(w / ratio) : null)) : heightArr,
	};

	const colorMap = {
		primary: COLORS.primary,
		hero: COLORS.hero,
		neutral: COLORS.neutral,
		muted: COLORS.muted,
		background: COLORS.background,
		borderDark: COLORS.borderDark,
		border: COLORS.border,
		focus: COLORS.focus,
		heading: COLORS.heading,
		light: COLORS.light,
		text: COLORS.text,
		info: COLORS.info,
		success: COLORS.success,
		warning: COLORS.warning,
		danger: COLORS.danger,
		system: COLORS.system,
	};

	return mq({
		label: getLabel('pictogram'),
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
		color: color && (colorMap[color] || color),
		...styleSize,
	})[0];
};

const pictogramAttributes = () => null;

export const defaultPictogram = {
	component: Pictogram,
	styles: pictogramStyles,
	attributes: pictogramAttributes,
};
