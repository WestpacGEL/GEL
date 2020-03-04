/** @jsx jsx */
import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx, useBrand } from '@westpac/core';

// Recursively render swatches
const Swatch = ({ color, name }) => (
	<div>
		<div css={{ background: color, width: 100, height: 100 }}></div>
		<p>{name}</p>
	</div>
);

const Component = props => {
	const { COLORS } = useBrand();
	const swatches = [];
	const nestedSwatches = {};
	for (const key in COLORS) {
		if (typeof COLORS[key] === 'string') {
			swatches.push(<Swatch color={COLORS[key]} name={key} />);
		} else {
			nestedSwatches[key] = [];
			for (const nestedKey in COLORS[key]) {
				nestedSwatches[key].push(<Swatch color={COLORS[key][nestedKey]} name={nestedKey} />);
			}
		}
	}
	return (
		<Fragment>
			<div css={{ display: 'flex', flexWrap: 'wrap' }}>{swatches}</div>
			{Object.keys(nestedSwatches).map((key, i) => {
				return (
					<Fragment key={`${key}-${i}`}>
						<h4>{key}</h4>
						<div css={{ display: 'flex', flexWrap: 'wrap' }}>{nestedSwatches[key]}</div>
					</Fragment>
				);
			})}
		</Fragment>
	);
};

// Separator
export const ColorSwatch = {
	component: Component,
};
