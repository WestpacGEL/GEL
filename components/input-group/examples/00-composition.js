/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Single add-on</h2>

			<InputGroup>
				<Left type="label" data="AUS $" />
			</InputGroup>
			<br />

			<hr />
			<br />

			<InputGroup placeholder="Fill me out">
				<Right type="button" data="Go" />
			</InputGroup>
			<br />

			<hr />
			<br />

			<InputGroup>
				<Right
					type="select"
					onChange={event => console.log(`Selected ${event.target.value}`)}
					data={[
						{ text: 'Select', value: '' },
						{ text: '1', value: '1' },
						{ text: '2', value: '2' },
						{ text: '3', value: '3' },
					]}
				/>
			</InputGroup>
			<br />

			<hr />
			<br />

			<h2>Single add-on data-driven</h2>
			<InputGroup
				name="input name"
				data={{
					right: { type: 'label', data: 'EUR €' },
				}}
			/>
			<br />

			<hr />
			<br />

			<InputGroup
				name="input name"
				data={{
					left: { type: 'button', data: 'Submit' },
				}}
			/>
			<br />

			<hr />
			<br />

			<InputGroup
				name="input name"
				data={{
					left: {
						type: 'select',
						onChange: event => console.log(`Selected ${event.target.value}`),
						data: [
							{ text: 'Select', value: '' },
							{ text: '1', value: '1' },
							{ text: '2', value: '2' },
							{ text: '3', value: '3' },
						],
					},
				}}
			/>
			<br />

			<hr />
			<br />

			<h2>Combination</h2>
			<InputGroup>
				<Left type="label" data="AUS $" />
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<hr />
			<br />

			<InputGroup>
				<Left
					type="select"
					onChange={event => console.log(`Selected ${event.target.value}`)}
					data={[
						{ text: 'AUD $', value: 'AUD' },
						{ text: 'USD $', value: 'USD' },
						{ text: 'EUR €', value: 'EUR' },
					]}
				/>
				<Right type="button" data="Go" onClick={() => console.log('Go clicked')} />
			</InputGroup>
			<br />

			<hr />
			<br />

			<h2>Combination data-driven</h2>
			<InputGroup
				data={{
					left: { type: 'label', data: 'AUS $' },
					right: { type: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>
			<br />

			<hr />
			<br />

			<InputGroup
				look="primary"
				data={{
					left: {
						type: 'select',
						onChange: event => console.log(`Selected ${event.target.value}`),
						data: [{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }],
					},
					right: { type: 'button', data: 'Go', onClick: () => console.log('Go clicked') },
				}}
			/>
		</GEL>
	);
}

export default Example;
