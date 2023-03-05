import { jsx } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

export const StreetPattern = ({ hint, error, invalid, token = '', legendTabIndex, legendRef }) => {
	return (
		<FormGroup>
			<Fieldset
				legend="Street"
				hint={hint}
				error={error}
				legendTabIndex={legendTabIndex}
				legendRef={legendRef}
			>
				<InputCluster>
					<Item>
						<Field label="Line 1 of 2" hideLabel>
							<TextInput size="large" autoComplete={`${token}address-line1`} invalid={invalid} />
						</Field>
					</Item>
					<Item>
						<Field label="Line 2 of 2" hideLabel>
							<TextInput size="large" autoComplete={`${token}address-line2`} />
						</Field>
					</Item>
				</InputCluster>
			</Fieldset>
		</FormGroup>
	);
};

export const AddressManualPattern = ({
	streetHint = 'Not a PO Box',
	showErrors = false,
	mailing = false,
	streetLegendTabIndex,
	streetLegendRef,
}) => {
	const error = showErrors ? 'Error message goes here if activated' : '';
	const invalid = showErrors;
	const token = mailing ? 'shipping ' : '';

	return (
		<Fragment>
			<StreetPattern
				hint={streetHint}
				error={error}
				invalid={invalid}
				token={token}
				legendTabIndex={streetLegendTabIndex}
				legendRef={streetLegendRef}
			/>
			<FormGroup>
				<Field label="Suburb" error={error}>
					<TextInput
						size="large"
						width={20}
						autoComplete={`${token}address-level2`}
						invalid={invalid}
					/>
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="State" error={error}>
					<Select size="large" width={10} autoComplete={`${token}address-level1`} invalid={invalid}>
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
						autoComplete={`${token}postal-code`}
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
					<AddressManualPattern />
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
