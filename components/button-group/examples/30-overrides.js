import { GEL, jsx } from '@westpac/core';
import { ButtonGroup, Item } from '@westpac/button-group';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/button-group'] = {
		ButtonGroup: {
			styles: (styles) => ({
				...styles,
				padding: 5,
				outline: `2px solid palevioletred`,
			}),
		},
		Item: {
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
			<ButtonGroup name="example-overrides">
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h3>Data Driven</h3>
			<ButtonGroup
				name="example-data-driven"
				data={[
					{ text: 'Left', value: 'left' },
					{ text: 'Middle', value: 'middle' },
					{ text: 'Right', value: 'right' },
				]}
			/>
			<h2>With overrides and component overrides</h2>
			<ButtonGroup
				name="example-overrides"
				overrides={{
					ButtonGroup: {
						styles: (styles) => ({
							...styles,
							padding: 5,
							outline: `2px solid blue`,
						}),
					},
				}}
			>
				<Item value="left">Left</Item>
				<Item value="middle">Middle</Item>
				<Item value="right">Right</Item>
			</ButtonGroup>
			<h3>Data Driven</h3>
			<ButtonGroup
				name="example-data-driven-overrides"
				data={[
					{ text: 'Left', value: 'left' },
					{ text: 'Middle', value: 'middle' },
					{ text: 'Right', value: 'right' },
				]}
				overrides={{
					ButtonGroup: {
						styles: (styles) => ({
							...styles,
							padding: 5,
							outline: `2px solid red`,
						}),
					},
					Item: {
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
