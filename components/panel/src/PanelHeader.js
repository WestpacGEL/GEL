/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, merge } from '@westpac/core';
import { usePanelContext } from './Panel';
import pkg from '../package.json';

// ==============================
// Component
// ==============================

export const PanelHeader = props => {
	const { COLORS, BRAND, [pkg.name]: overridesWithTokens } = useBrand();
	const mq = useMediaQuery();
	const { look } = usePanelContext();

	const overrides = {
		headerCSS: {},
	};

	merge(overrides, overridesWithTokens);

	const lookMap = {
		hero: {
			color: BRAND === 'STG' ? COLORS.text : '#fff',
			backgroundColor: COLORS.hero,
			borderColor: COLORS.hero,
		},
		faint: {
			color: COLORS.text,
			backgroundColor: COLORS.background,
			borderColor: COLORS.border,
		},
	};

	return (
		<div
			css={mq({
				padding: ['0.625rem 0.75rem', '0.625rem 1.5rem'],
				backgroundColor: lookMap[look].backgroundColor,
				borderBottom: `1px solid ${lookMap[look].borderColor}`,
				color: lookMap[look].color,
				borderTopRightRadius: `calc(0.1875rem - 1px)`,
				borderTopLeftRadius: `calc(0.1875rem - 1px)`,
				fontSize: '1rem',
				'@media print': {
					borderBottom: '1px solid #000',
				},
				...overrides.headerCSS,
			})}
			{...props}
		/>
	);
};
