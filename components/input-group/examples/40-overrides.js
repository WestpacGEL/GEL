import { GEL, jsx } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';
import { InputGroup, Before, After } from '@westpac/input-group';

const TextOverride = ({ data, state: _, ...rest }) => (
	<span {...rest}>
		<HouseIcon size="small" /> {data}
	</span>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		InputGroup: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
		},
		Text: {
			component: TextOverride,
		},
		TextInput: {
			styles: (styles) => ({
				...styles,
				outline: '4px dotted green',
			}),
		},
		Select: {
			styles: (styles) => ({
				...styles,
				outline: '4px dotted purple',
			}),
		},
		Button: {
			styles: (styles) => ({
				...styles,
				outline: '4px dotted blue',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<InputGroup name="example-overrides-l">
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup
				name="example-overrides-2"
				data={{
					before: {
						inputType: 'text',
						data: 'AUS $',
					},
					after: { inputType: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>
			<br />

			<InputGroup name="example-overrides-3">
				<Before
					inputType="select"
					label="Currency"
					onChange={(event) => console.log(`Select ${event.target.value}`)}
					data={[
						{ text: 'Select', value: '' },
						{ text: 'AUD $', value: 'AUD $' },
						{ text: 'NZD $', value: 'NZD $' },
						{ text: 'USD $', value: 'USD $' },
					]}
				/>
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup
				name="example-overrides-4"
				data={{
					before: {
						inputType: 'select',
						label: 'Currency',
						onChange: (event) => console.log(`Select ${event.target.value}`),
						data: [
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'NZD $', value: 'NZD $' },
							{ text: 'USD $', value: 'USD $' },
						],
					},
					after: { inputType: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>

			<hr />

			<h2>With overrides and component overrides</h2>
			<InputGroup
				name="example-overrides-component-1"
				overrides={{
					Button: {
						styles: (styles) => ({
							...styles,
							outline: '4px solid blue',
						}),
					},
				}}
			>
				<Before inputType="text" data="AUS $" />
				<After inputType="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup
				name="example-overrides-component-2"
				overrides={{
					Select: {
						styles: (styles) => ({
							...styles,
							outline: '4px solid purple',
						}),
					},
				}}
				data={{
					before: {
						inputType: 'select',
						label: 'Currency',
						onChange: (event) => console.log(`Select ${event.target.value}`),
						data: [
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'NZD $', value: 'NZD $' },
							{ text: 'USD $', value: 'USD $' },
						],
					},
					after: { inputType: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>
		</GEL>
	);
}

export default Example;
