/** @jsx jsx */

import { useState } from 'react';
import { jsx } from '@westpac/core';
import { Switch } from '@westpac/switch';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

const Label = ({ toggleText, assistiveText, ...props }) => <strong {...props} />;

function Example({ context }) {
	const overridesWithTokens = {};

	overridesWithTokens['@westpac/switch'] = {
		Label: {
			styles: styles => ({ ...styles, color: 'palevioletred', paddingRight: '2rem' }),
			component: Label,
		},
		Toggle: {
			styles: (styles, { checked }) => ({
				...styles,
				borderColor: 'mediumvioletred',
				backgroundColor: checked ? 'palevioletred' : 'white',
			}),
		},
		ToggleText: {
			styles: (styles, { checked }) => ({
				...styles,
				color: checked ? 'white' : 'firebrick',
			}),
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<Switch name="example-default" label="Turn notifications" />

			<h2>With overrides and component overrides</h2>
			<Switch
				name="example-default"
				label="Turn notifications"
				overrides={{
					Toggle: {
						styles: (styles, { checked }) => ({
							...styles,
							backgroundColor: checked ? 'magenta' : 'white',
						}),
					},
				}}
			/>
		</Playground>
	);
}

export default Example;
