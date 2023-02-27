import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const getYearOptions = (from, num) => {
	let years = [];
	for (let i = 0; i < num; i++) {
		years.push(<option value={from + i}>{from + i}</option>);
	}
	return years;
};

export const ExpiryDateSelectPattern = ({ showErrors = false }) => {
	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;

	const minYear = new Date().getFullYear();
	const numYears = 8;

	return (
		<FormGroup>
			<Fieldset legend="Expiry date" error={error}>
				<InputCluster horizontal>
					<Item>
						<Field label="Month" subLabel>
							<Select inline size="large" invalid={invalid}>
								<option value="">Select</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option value="12">12</option>
							</Select>
						</Field>
					</Item>
					<Item>
						<Field label="Year" subLabel>
							<Select inline size="large">
								<option value="">Select</option>
								{getYearOptions(minYear, numYears)}
							</Select>
						</Field>
					</Item>
				</InputCluster>
			</Fieldset>
		</FormGroup>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<ExpiryDateSelectPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
