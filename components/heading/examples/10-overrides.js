/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/site/components/playground/macro';

function Example({ context }) {
	const overridesWithTokens = {};
	overridesWithTokens['@westpac/heading'] = {
		Heading: {
			styles: styles => ({
				...styles,
				outline: '1px solid red',
			}),
		},
	};

	return (
		<Playground context={context} brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>
				Without <code>tag</code> prop
			</h2>
			<Heading size={1}>Size: 1</Heading>
			<Heading size={2}>Size: 2</Heading>
			<Heading size={3}>Size: 3</Heading>
			<Heading size={4}>Size: 4</Heading>
			<Heading size={5}>Size: 5</Heading>
			<Heading size={6}>Size: 6</Heading>
			<Heading size={7}>Size: 7</Heading>
			<Heading size={8}>Size: 8</Heading>
			<Heading size={9}>Size: 9</Heading>

			<h2>With overrides and component overrides</h2>
			<Heading
				size={1}
				overrides={{
					Heading: {
						styles: styles => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			>
				Heading text
			</Heading>
		</Playground>
	);
}

export default Example;
