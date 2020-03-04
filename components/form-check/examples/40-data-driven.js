/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia />

			<h2>Data driven</h2>
			<FormCheck
				type="checkbox"
				name="example-checkbox-data-driven"
				defaultValue={['2', '3']}
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>

			<hr />

			<FormCheck
				type="radio"
				name="example-radio-data-driven"
				defaultValue="2"
				data={[
					{ value: '1', text: 'Option 1' },
					{ value: '2', text: 'Option 2' },
					{ value: '3', text: 'Option 3' },
				]}
			/>
		</Playground>
	);
};
