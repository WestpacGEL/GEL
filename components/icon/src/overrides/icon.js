/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, asArray, getLabel } from '@westpac/core';

const Icon = ({ state: _, ...rest }) => <span {...rest} />;

const iconStyles = (_, { color, size }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const sizeMap = {
		xsmall: 12, // 0.5x
		small: 18, //  0.75x
		medium: 24, // 1x (default)
		large: 36, //  1.5x
		xlarge: 48, // 2x
	};

	// Size styling (responsive)
	const sizeArr = asArray(size);
	const styleSize = {
		height: sizeArr.map((s) => s && sizeMap[s]),
		width: sizeArr.map((s) => s && sizeMap[s]),
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
		label: getLabel('icon', { color, size }),
		display: 'inline-block',
		lineHeight: 0,
		verticalAlign: 'middle',
		color: colorMap[color] || color || COLORS.muted,
		...styleSize,
	})[0];
};

const iconAttributes = () => null;

export const defaultIcon = {
	component: Icon,
	styles: iconStyles,
	attributes: iconAttributes,
};
