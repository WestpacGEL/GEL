/** @jsx jsx */

import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';
import Select from '@arch-ui/select';
import chroma from 'chroma-js';
import { Body } from '../src/components/body';

import { secondaryColors } from '../src/secondary-colors.js';

// Recursively render swatches
const Swatch = ({ color, secondary }) => {
	const { BRAND, SPACING, PACKS, COLORS } = useBrand();
	const colorVal = secondary ? secondaryColors[BRAND][color] : COLORS[color];

	if (!chroma.valid(colorVal)) return null;

	const mq = useMediaQuery();
	const [r, g, b] = chroma(colorVal).rgb();

	return (
		<Fragment>
			<div css={{ background: colorVal, height: SPACING(12) }} />
			<Body
				css={mq({
					display: 'flex',
					flexDirection: 'column',
					background: '#fff',
					padding: SPACING(2),
					marginBottom: [SPACING(3), SPACING(4)],
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
		</Fragment>
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
		const { BRAND } = useBrand();
		return (
			<Fragment>
				{colors.map((color) => {
					if (color.value === 'Secondary Colors') {
						return (
							<Fragment key={color.value}>
								{Object.keys(secondaryColors[BRAND]).map((secondaryColor) => (
									<Cell key={secondaryColor} width={[10, 6, 4, 3]} left={[2, 'auto']}>
										<Swatch color={secondaryColor} secondary />
									</Cell>
								))}
							</Fragment>
						);
					} else {
						return (
							<Cell key={color.value} width={[10, 6, 4, 3]} left={[2, 'auto']}>
								<Swatch color={color.value} name={color.value} />
							</Cell>
						);
					}
				})}
			</Fragment>
		);
	},
};
