/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Selector } from '@westpac/selector';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Data driven</h2>
			<Selector
				type="checkbox"
				name="example-checkbox-data-driven"
				defaultValue={['2', '3']}
				data={[
					{ value: '1', text: 'Here is a label' },
					{ value: '2', text: 'Here is a label' },
					{ value: '3', text: 'Here is a label' },
				]}
			/>

			<hr />

			<Selector
				type="radio"
				name="example-radio-data-driven"
				defaultValue="2"
				data={[
					{ value: '1', text: 'Here is a label' },
					{ value: '2', text: 'Here is a label' },
					{ value: '3', text: 'Here is a label' },
				]}
			/>
		</GEL>
	);
}

export default Example;
