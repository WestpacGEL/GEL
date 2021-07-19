/** @jsx jsx */

import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import Select from '@arch-ui/select';
import chroma from 'chroma-js';
import { Body } from '../src/components/body';
import { Symbol } from '../../components/symbol/src/Symbol';

import { secondaryColors } from '../src/secondary-colors.js';

// Recursively render swatches
const Swatch = ({ color, secondary }) => {
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
						styles: (styles) => ({
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

// Separator
export const ColorSwatch = {
	editor: ({ value, onChange }) => {
		const { COLORS } = useBrand();
		const swatches = Object.entries({
			...COLORS,
			...{ 'Secondary Colors': '--secondary-colors--' },
		})
			.filter(([key, value]) => typeof value === 'string')
			.map(([key, value]) => {
				return { value: key, label: key };
			});

		return (
			<Select
				isMulti={true}
				isSearchable={true}
				options={swatches}
				value={value.colors}
				onChange={(values) => {
					onChange({ colors: values });
				}}
			/>
		);
	},

	component: ({ colors }) => {
		const mq = useMediaQuery();
		const { BRAND, SPACING } = useBrand();
		return (
			<Cell width={12}>
				<Grid
					tag="ul"
					role="list"
					css={{ marginTop: SPACING(2), listStyle: 'none', paddingLeft: 0 }}
				>
					{colors.map((color) => {
						if (color.value === 'Secondary Colors') {
							return (
								<Fragment key={color.value}>
									{Object.keys(secondaryColors[BRAND.code]).map((secondaryColor) => (
										<Cell key={secondaryColor} tag="li" width={[12, 6, 4, 3]}>
											<Swatch color={secondaryColor} secondary />
										</Cell>
									))}
								</Fragment>
							);
						} else {
							return (
								<Cell key={color.value} tag="li" width={[12, 6, 4, 3]}>
									<Swatch color={color.value} />
								</Cell>
							);
						}
					})}
				</Grid>
			</Cell>
		);
	},
};
