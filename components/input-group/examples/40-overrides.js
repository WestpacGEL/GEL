/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

const Label = ({ data, overrides, ...rest }) => (
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
		Label: {
			component: Label,
		},
		Text: {
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
			<InputGroup>
				<Left type="label" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>

			<br />
			<hr />
			<br />

			<InputGroup
				data={{
					left: {
						type: 'label',
						data: 'AUS $',
					},
					right: { type: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>

			<br />
			<hr />
			<br />

			<InputGroup>
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
			<hr />
			<br />

			<InputGroup
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

			<h2>With overrides and component overrides</h2>
			<InputGroup
				overrides={{
					Button: {
						styles: styles => ({
							...styles,
							outline: '3px dotted blue',
						}),
					},
				}}
			>
				<Left type="label" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>

			<br />
			<hr />
			<br />

			<InputGroup
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
