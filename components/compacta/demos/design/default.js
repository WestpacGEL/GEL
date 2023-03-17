import { jsx } from '@westpac/core';
import { useState } from 'react';
import { Compacta } from '@westpac/compacta';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { InputGroup } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';

export const CompactaDemo = ({ error }) => {
	const [inputs, setInputs] = useState({});

	const handleChange = (e) => {
		setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	return (
		<Compacta>
			{({ id, setPrimaryTitle, setSecondaryTitle, setTertiaryTitle }) => (
				<Form spacing="large">
					<FormGroup>
						<Field
							label="Primary"
							hint="Select your card insitution"
							error={error ? 'Error message goes here if activated' : null}
						>
							<Select
								name={`input-primary-${id}`}
								value={inputs[`input-primary-${id}`] || ''}
								onChange={(e) => {
									handleChange(e);
									setPrimaryTitle(e.target.value);
								}}
								width={30}
								invalid={error}
							>
								<option>Select</option>
								<option>AMP Bank</option>
								<option>ANZ - Australia and New Zealand Banking Group</option>
								<option>Bank of Queensland</option>
								<option>Bendigo Bank</option>
								<option>CBA - Commonwealth Bank</option>
								<option>Macquarie Bank</option>
								<option>NAB - National Australian Bank</option>
								<option>Westpac Bank</option>
							</Select>
						</Field>
					</FormGroup>
					<FormGroup>
						<Field
							label="Account number"
							hint="Refer to a statement from the card’s financial institution"
							error={error ? 'Error message goes here if activated' : null}
						>
							<TextInput
								name={`input-secondary-${id}`}
								value={inputs[`input-secondary-${id}`] || ''}
								onChange={(e) => {
									handleChange(e);
									setSecondaryTitle(e.target.value);
								}}
								width={30}
								invalid={error}
							/>
						</Field>
					</FormGroup>
					<FormGroup>
						<Field
							label="Amount to transfer"
							error={error ? 'Error message goes here if activated' : null}
						>
							<InputGroup
								label="Total amount"
								name={`input-tertiary-${id}`}
								value={inputs[`input-tertiary-${id}`] || ''}
								onChange={(e) => {
									handleChange(e);
									setTertiaryTitle(e.target.value);
								}}
								width={20}
								invalid={error}
								before="$"
							/>
						</Field>
					</FormGroup>
				</Form>
			)}
		</Compacta>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<CompactaDemo />
		</Playground>
	);
};

export default Demo;
