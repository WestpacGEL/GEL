/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/selector'] = {
		Selector: {
			styles: (styles) => ({
				...styles,
				padding: 5,
				outline: `2px solid palevioletred`,
			}),
		},
		Option: {
			styles: (styles, { checked }) => ({
				...styles,
				backgroundColor: !checked ? 'white' : 'palevioletred',

				':hover': {
					backgroundColor: 'rgba(219,112,147,0.7)',
				},
			}),
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<Selector name="example-overrides">
				<Option value="left">Left</Option>
				<Option value="middle">Middle</Option>
				<Option value="right">Right</Option>
			</Selector>
			<h3>Data Driven</h3>
			<Selector
				name="example-data-driven"
				data={[
					{ text: 'Left', value: 'left' },
					{ text: 'Middle', value: 'middle' },
					{ text: 'Right', value: 'right' },
				]}
			/>
			<h2>With overrides and component overrides</h2>
			<Selector
				name="example-overrides"
				overrides={{
					Selector: {
						styles: (styles) => ({
							...styles,
							padding: 5,
							outline: `2px solid blue`,
						}),
					},
				}}
			>
				<Option value="left">Left</Option>
				<Option value="middle">Middle</Option>
				<Option value="right">Right</Option>
			</Selector>
			<h3>Data Driven</h3>
			<Selector
				name="example-data-driven-overrides"
				data={[
					{ text: 'Left', value: 'left' },
					{ text: 'Middle', value: 'middle' },
					{ text: 'Right', value: 'right' },
				]}
				overrides={{
					Selector: {
						styles: (styles) => ({
							...styles,
							padding: 5,
							outline: `2px solid red`,
						}),
					},
					Option: {
						styles: (styles, { checked }) => ({
							...styles,
							backgroundColor: !checked ? 'white' : 'dodgerblue',

							':hover': {
								backgroundColor: 'rgba(30,144,255,0.7)',
							},
						}),
					},
				}}
			/>
		</GEL>
	);
}

export default Example;
