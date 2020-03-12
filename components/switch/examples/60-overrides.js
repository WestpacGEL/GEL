/** @jsx jsx */

import { useState } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const Label = ({ state: { label }, ...rest }) => <strong {...rest}>{label}</strong>;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/switch'] = {
		Label: {
			component: Label,
			styles: styles => ({
				...styles,
				color: 'palevioletred',
				paddingRight: '2rem',
			}),
		},
		Toggle: {
			styles: (styles, { checked }) => ({
				...styles,
				borderColor: 'mediumvioletred',
				backgroundColor: checked ? 'palevioletred' : 'white',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Switch name="example-overrides" label="eStatements" />

			<h2>With overrides and component overrides</h2>
			<Switch
				name="example-component-overrides"
				label="eStatements"
				overrides={{
					Toggle: {
						styles: (styles, { checked }) => ({
							...styles,
							backgroundColor: checked ? 'magenta' : 'white',
						}),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
