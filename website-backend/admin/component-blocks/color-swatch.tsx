/** @jsxRuntime classic */
/** @jsx jsx */
import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';
// @ts-ignore
import { COLORS } from '@westpac/wbc/tokens/colors';
import { jsx } from '@keystone-ui/core';

import { Fragment } from 'react';
import { GEL, useBrand, useMediaQuery } from '@westpac/core';
import brand from '@westpac/wbc';
import { Grid, Cell } from '@westpac/grid';
import chroma from 'chroma-js';
import { Body } from '../../../website/src/components/body';
// @ts-ignore
import { Symbol } from '../../../components/symbol/src/Symbol';
// @ts-ignore
import { secondaryColors } from '../../../website/src/secondary-colors.js';

// Recursively render swatches
const Swatch = ({ color, secondary }: { color: string; secondary?: boolean }) => {
	const { BRAND, SPACING, PACKS, COLORS } = useBrand();
	const colorVal = secondary ? secondaryColors[BRAND.code][color] : COLORS[color];

	if (!chroma.valid(colorVal)) return null;

	const mq = useMediaQuery();
	const [r, g, b] = chroma(colorVal).rgb();

	return (
		<div
			css={mq({
				backgroundColor: '#fff',
				padding: SPACING(4),
				display: 'flex',
				flexDirection: ['row', 'column'],
				alignItems: ['center', 'normal'],
			})}
		>
			{/* a11y: using SVG for WHCM support */}
			<Symbol symbol="ColorSwatch" viewBoxWidth={132} viewBoxHeight={132}>
				<circle fill={colorVal} cx="66" cy="66" r="66" />
			</Symbol>
			<Body
				css={mq({
					display: 'flex',
					flexDirection: 'column',
					marginTop: [null, SPACING(2)],
					marginLeft: [SPACING(4), 0],
					paddingLeft: [null, SPACING(2)],
					paddingRight: [null, SPACING(2)],
				})}
				overrides={{
					Body: {
						styles: (styles: any) => ({
							...styles,
							...PACKS.typeScale.bodyFont[10],
						}),
					},
				}}
			>
				<strong>{color.charAt(0).toUpperCase() + color.slice(1)}</strong>
				<span css={{ marginTop: SPACING(1, true) }}>{colorVal}</span>
				<span css={{ marginTop: SPACING(1, true) }}>{`R:${r} G:${g} B:${b}`}</span>
			</Body>
		</div>
	);
};

function ColorSwatch({ colors }: { colors: readonly string[] }) {
	const mq = useMediaQuery();
	const { BRAND, SPACING } = useBrand();

	return (
		<NotEditable>
			<Cell width={12}>
				<Grid
					tag="ul"
					role="list"
					css={{
						marginTop: SPACING(2),
						paddingLeft: 0,
						'&&': {
							listStyle: 'none',
						},
					}}
				>
					{colors.map((color) => {
						if (color === 'Secondary Colors') {
							return (
								<Fragment key={color}>
									{Object.keys(secondaryColors[BRAND.code]).map((secondaryColor) => (
										<Cell key={secondaryColor} tag="li" width={[12, 6, 4, 3]}>
											<Swatch color={secondaryColor} secondary />
										</Cell>
									))}
								</Fragment>
							);
						} else {
							return (
								<Cell key={color} tag="li" width={[12, 6, 4, 3]}>
									<Swatch color={color} />
								</Cell>
							);
						}
					})}
				</Grid>
			</Cell>
		</NotEditable>
	);
}

export const colorSwatch = component({
	component: ({ colors }) => (
		<GEL brand={brand}>
			<ColorSwatch colors={colors.value} />
		</GEL>
	),
	label: 'Color swatch',
	props: {
		colors: fields.multiselect({
			label: 'Colors',
			options: Object.keys(COLORS)
				.concat('Secondary Colors')
				.map((key) => {
					return { value: key, label: key };
				}),
			defaultValue: [],
		}),
	},
});
