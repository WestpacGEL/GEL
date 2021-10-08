/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

export const AddressManual = ({ showErrors = false, mailing = false }) => {
	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;
	const token = mailing ? 'shipping ' : '';

	return (
		<Fragment>
			<FormGroup>
				<Fieldset legend="Street" hint="Not a PO Box" error={error}>
					<InputCluster>
						<Item>
							<Field label="Line 1 of 2" hideLabel>
								<TextInput size="large" autocomplete={`${token}address-line1`} invalid={invalid} />
							</Field>
						</Item>
						<Item>
							<Field label="Line 2 of 2" hideLabel>
								<TextInput size="large" autocomplete={`${token}address-line2`} />
							</Field>
						</Item>
					</InputCluster>
				</Fieldset>
			</FormGroup>
			<FormGroup>
				<Field label="Suburb" error={error}>
					<TextInput
						size="large"
						width={20}
						autocomplete={`${token}address-level2`}
						invalid={invalid}
					/>
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="State" error={error}>
					<Select size="large" width={10} autocomplete={`${token}address-level1`} invalid={invalid}>
						<option>Select</option>
						<option>NSW</option>
						<option>VIC</option>
						<option>QLD</option>
						<option>ACT</option>
						<option>SA</option>
						<option>WA</option>
						<option>NT</option>
					</Select>
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Postcode" error={error}>
					<TextInput
						size="large"
						width={4}
						autocomplete={`${token}postal-code`}
						invalid={invalid}
					/>
				</Field>
			</FormGroup>
		</Fragment>
	);
};

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<AddressManual />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
