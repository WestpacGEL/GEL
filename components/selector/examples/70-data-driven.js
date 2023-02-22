import { GEL, jsx } from '@westpac/core';
import { Selector } from '@westpac/selector';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Data driven</h2>
			<h3>checkbox</h3>
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

			<h3>Radio</h3>

			<Selector
				type="radio"
				name="example-radio-data-driven"
				defaultValue="2"
				data={[
					{ value: '1', text: 'Here is a label', secondaryLabel: 'Secondary label' },
					{ value: '2', text: 'Here is a label', secondaryLabel: 'Secondary label' },
					{ value: '3', text: 'Here is a label', secondaryLabel: 'Secondary label' },
				]}
			/>
		</GEL>
	);
}

export default Example;
