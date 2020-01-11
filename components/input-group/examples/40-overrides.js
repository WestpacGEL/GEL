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
					data={[
						{ label: 'Select', value: '' },
						{ label: '1', value: '', onClick: () => console.log('Selected 1') },
						{ label: '2', value: '', onClick: () => console.log('Selected 2') },
						{ label: '3', value: '', onClick: () => console.log('Selected 3') },
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
						data: [
							{ label: 'AUD $', onClick: () => console.log('Selected AUD') },
							{ label: 'USD $', onClick: () => console.log('Selected USD') },
							{ label: 'EUR €', onClick: () => console.log('Selected EUR') },
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
						data: [
							{ label: 'AUD $', onClick: () => console.log('Selected AUD') },
							{ label: 'USD $', onClick: () => console.log('Selected USD') },
							{ label: 'EUR €', onClick: () => console.log('Selected EUR') },
						],
					},
					right: { type: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>
		</GEL>
	);
}

export default Example;
