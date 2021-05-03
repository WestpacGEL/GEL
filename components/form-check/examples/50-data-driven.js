/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { FormCheck } from '@westpac/form-check';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
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
		</GEL>
	);
}

export default Example;
