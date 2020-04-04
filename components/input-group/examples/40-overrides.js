/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const Text = ({ data, overrides, ...rest }) => (
	<span {...rest}>
		<HouseIcon size="small" /> {data}
	</span>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		InputGroup: {
			styles: styles => ({
				...styles,
				outline: '1px solid red',
			}),
		},
		Text: {
			component: Text,
		},
		TextInput: {
			styles: styles => ({
				...styles,
				outline: '4px dotted green',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Intopia ignore />

			<h2>With overrides applied</h2>
			<InputGroup name="example-overrides-l">
				<Left type="text" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup
				name="example-overrides-2"
				data={{
					left: {
						type: 'text',
						data: 'AUS $',
					},
					right: { type: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>
			<br />

			<InputGroup name="example-overrides-3">
				<Left
					type="select"
					onChange={event => console.log(`Select ${event.target.value}`)}
					data={[
						{ text: 'Select', value: '' },
						{ text: '1', value: '1' },
						{ text: '2', value: '2' },
						{ text: '3', value: '3' },
					]}
				/>
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup
				name="example-overrides-4"
				data={{
					left: {
						type: 'select',
						onChange: event => console.log(`Select ${event.target.value}`),
						data: [
							{ text: 'AUD $', value: 'AUD' },
							{ text: 'USD $', value: 'USD' },
							{ text: 'EUR €', value: 'EUR' },
						],
					},
					right: { type: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>

			<hr />

			<h2>With overrides and component overrides</h2>
			<InputGroup
				name="example-overrides-component-1"
				overrides={{
					Button: {
						styles: styles => ({
							...styles,
							outline: '3px dotted blue',
						}),
					},
				}}
			>
				<Left type="text" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<InputGroup
				name="example-overrides-component-2"
				overrides={{
					Select: {
						styles: styles => ({
							...styles,
							outline: '3px dotted blue',
						}),
					},
				}}
				data={{
					left: {
						type: 'select',
						onChange: event => console.log(`Select ${event.target.value}`),
						data: [
							{ text: 'AUD $', value: 'AUD' },
							{ text: 'USD $', value: 'USD' },
							{ text: 'EUR €', value: 'EUR' },
						],
					},
					right: { type: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>
		</GEL>
	);
}

export default Example;
