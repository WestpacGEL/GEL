/** @jsx jsx */
import React from 'react'; // Needed for within Keystone
import { jsx, useBrand } from '@westpac/core';
import Select from '@arch-ui/select';
import chroma from 'chroma-js';
import { secondaryColors } from '../src/secondary-colors.js';
import { Container, Grid, Cell } from '@westpac/grid';
import { blocksContainerStyle, blocksGridStyle } from '../src/components/_utils';

// Recursively render swatches
const Swatch = ({ color, name }) => {
	if (!chroma.valid(color)) return null;
	const { SPACING } = useBrand();

	const [r, g, b] = chroma(color).rgb();
	return (
		<div>
			<div css={{ background: color, height: SPACING(15) }} />
			<div
				css={{
					padding: SPACING(1),
					display: 'flex',
					flexDirection: 'column',
					background: 'white',
				}}
			>
				<strong css={{ marginTop: SPACING(2) }}>{name}</strong>
				<span css={{ marginTop: SPACING(1) }}>{color}</span>
				<span css={{ marginTop: SPACING(1) }}>{`R:${r} G:${g} B:${b}`}</span>
			</div>
		</div>
	);
};

// Separator
export const ColorSwatch = {
	editor: ({ value, onChange }) => {
		const { COLORS } = useBrand();

		const swatches = Object.entries({ ...COLORS, ...secondaryColors })
			.filter(([key, value]) => typeof value === 'string')
			.map(([key, value]) => {
				return { value: value, label: key.charAt(0).toUpperCase() + key.slice(1) };
			});

		return (
			<Select
				isMulti={true}
				isSearchable={true}
				options={swatches}
				value={value.colors}
				onChange={values => {
					onChange({ colors: values });
				}}
			/>
		);
	},
	component: ({ colors }) => {
		const { COLORS } = useBrand();
		return (
			<Container css={blocksContainerStyle}>
				<Grid columns={12} css={blocksGridStyle}>
					{colors.map(color => (
						<Cell width={[6, 4, 4, 3]}>
							<Swatch key={color.value} color={color.value} name={color.label} />
						</Cell>
					))}
				</Grid>
			</Container>
		);
	},
};
