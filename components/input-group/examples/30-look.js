/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<h2>Label</h2>

			<InputGroup look="primary">
				<Left type="label" data="$$$" />
			</InputGroup>
			<br />

			<InputGroup look="hero">
				<Left type="label" data="$$$" />
			</InputGroup>
			<br />

			<InputGroup look="faint">
				<Left type="label" data="$$$" />
			</InputGroup>
			<br />

			<hr />

			<h2>Buttons</h2>

			<InputGroup look="primary">
				<Right type="button" data="Submit" />
			</InputGroup>
			<br />

			<InputGroup look="hero">
				<Right type="button" data="Submit" />
			</InputGroup>
			<br />

			<InputGroup look="faint">
				<Right type="button" data="Submit" />
			</InputGroup>
			<br />

			<hr />

			<h2>Select</h2>

			<InputGroup look="primary">
				<Right
					type="select"
					data={[
						{ text: 'Select', value: '' },
						{ text: '1', value: '1' },
						{ text: '2', value: '2' },
						{ text: '3', value: '3' },
					]}
				/>
			</InputGroup>
			<br />

			<InputGroup look="hero">
				<Right
					type="select"
					data={[
						{ text: 'Select', value: '' },
						{ text: '1', value: '1' },
						{ text: '2', value: '2' },
						{ text: '3', value: '3' },
					]}
				/>
			</InputGroup>
			<br />

			<InputGroup look="faint">
				<Right
					type="select"
					data={[
						{ text: 'Select', value: '' },
						{ text: '1', value: '1' },
						{ text: '2', value: '2' },
						{ text: '3', value: '3' },
					]}
				/>
			</InputGroup>
		</GEL>
	);
}

export default Example;
