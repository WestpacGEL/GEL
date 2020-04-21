/** @jsx jsx */
import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand } from '@westpac/core';
import chroma from 'chroma-js';
import Select from '@arch-ui/select';

// Recursively render swatches
const Swatch = ({ color, name }) => {
	if (!chroma.valid(color)) return null;
	const { SPACING } = useBrand();

	const [r, g, b] = chroma(color).rgb();
	return (
		<div css={{ margin: SPACING(1) }}>
			<div
				css={{
					background: color,
					width: SPACING(40),
					height: SPACING(15),
				}}
			/>
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

const Component = ({ colors }) => (
	<Fragment>
		<div css={{ display: 'flex', flexWrap: 'wrap' }}>
			{colors.map(color => (
				<Swatch key={color.value} color={color.value} name={color.label} />
			))}
		</div>
	</Fragment>
);

// Separator
export const ColorSwatch = {
	editor: ({ value, onChange }) => {
		const { COLORS, BRAND } = useBrand();

		const sillyColors = {
			WBC: {
				Violet: '#9f4585',
				'Energy Slide Dark': '#b6000b',
				'Energy Slide Mid': '#c30019',
				'Energy Slide Light': '#dd3a46',
			},
			BOM: {
				'Dark Purple': '#20024e',
				'Mid Purple': '#685ac0',
				'Light Purple': '#a094fc',
			},
			STG: {
				Sky: '#3fc3eb',
				Plum: '#502d79',
				Amber: '#ff7f29',
				'St.George Yellow': '#ffcd00',
				'Access Green': '#048938',
			},
			BTFG: {
				'BT Blue': '#00afd7',
				'BT Black': '#2c2a29',
				'BT Steel': '#80a1b6',
			},
			BSA: {
				Deep: '#00204f',
				Bight: '#00adbd',
				Gum: '#5cbb3e',
				Grape: '#a22269',
				Sky: '#abe2ec',
				Outback: '#f7921e',
			},
			WBG: {
				Westpac: '#d5002b',
				WIB: '#9f0029',
				BankSA: '#002f6c',
				'St.George': '#78be20',
				BTFG: '#7998ac',
				Rams: '#00adef',
				'Bank of Melbourne': '#1f252c',
			},
		};

		const swatches = Object.entries({ ...COLORS, ...sillyColors[BRAND] }).map(([key, value]) => {
			if (typeof value === 'string') {
				return { value: value, label: key.charAt(0).toUpperCase() + key.slice(1) };
			}
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
	component: Component,
};
