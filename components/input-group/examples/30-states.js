import { GEL, jsx } from '@westpac/core';
import { InputGroup, Before, After } from '@westpac/input-group';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Invalid</h2>

			<h3>Composed</h3>
			<InputGroup
				name="example-invalid-text"
				label="Total amount"
				invalid
				defaultValue="This value is marked invalid"
			>
				<Before inputType="text" data="AUS $" />
			</InputGroup>

			<h3>Data-driven</h3>
			<InputGroup
				name="example-invalid-text-datadriven"
				label="Total amount"
				invalid
				defaultValue="This value is marked invalid"
				data={{
					before: { inputType: 'text', data: 'AUS $' },
				}}
			/>
			<br />

			<hr />

			<h2>Disabled</h2>

			<h3>Composed</h3>
			<InputGroup
				name="example-disabled-text"
				label="Total amount"
				disabled
				defaultValue="This input is disabled and contains a value"
			>
				<Before inputType="text" data="AUS $" />
			</InputGroup>

			<h3>Data-driven</h3>
			<InputGroup
				name="example-disabled-text-datadriven"
				label="Total amount"
				disabled
				defaultValue="This input is disabled and contains a value"
				data={{
					before: { inputType: 'text', data: 'AUS $' },
				}}
			/>
			<br />

			<hr />

			<h2>Read only</h2>

			<h3>Composed</h3>
			<InputGroup
				name="example-readonly-text"
				label="Total amount"
				readOnly
				defaultValue="This input is read only and contains a value"
			>
				<Before inputType="text" data="AUS $" />
			</InputGroup>

			<h3>Data-driven</h3>
			<InputGroup
				name="example-readonly-text-datadriven"
				label="Total amount"
				readOnly
				defaultValue="This input is read only and contains a value"
				data={{
					before: { inputType: 'text', data: 'AUS $' },
				}}
			/>
		</GEL>
	);
}

export default Example;
