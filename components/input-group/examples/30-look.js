/** @jsx jsx */

import { jsx } from '@westpac/core';
import { InputGroup, Left, Right } from '@westpac/input-group';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
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
						{ label: 'Select', value: '' },
						{ label: '1', value: '' },
						{ label: '2', value: '' },
						{ label: '3', value: '' },
					]}
				/>
			</InputGroup>
			<br />

			<InputGroup look="hero">
				<Right
					type="select"
					data={[
						{ label: 'Select', value: '' },
						{ label: '1', value: '' },
						{ label: '2', value: '' },
						{ label: '3', value: '' },
					]}
				/>
			</InputGroup>
			<br />

			<InputGroup look="faint">
				<Right
					type="select"
					data={[
						{ label: 'Select', value: '' },
						{ label: '1', value: '' },
						{ label: '2', value: '' },
						{ label: '3', value: '' },
					]}
				/>
			</InputGroup>
		</Playground>
	);
};
