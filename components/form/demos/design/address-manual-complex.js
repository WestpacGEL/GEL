/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, FormGroup, Field } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Fragment, useState } from 'react';
import { Container } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const AddressManualComplexPattern = ({ property = 'house' }) => {
	let propertyStr;
	let extraStreetNum = false;

	switch (property) {
		case 'house':
		case 'villa':
			propertyStr = 'Street number';
			break;
		case 'townhouse':
		case 'unit':
			propertyStr = 'Unit number';
			extraStreetNum = true;
			break;
		case 'duplex':
			propertyStr = 'Unit number (if applicable)';
			extraStreetNum = true;
			break;
		case 'land':
			propertyStr = 'Lot number';
			break;
		default:
			break;
	}

	return (
		<Fragment>
			<FormGroup>
				<Field label={propertyStr}>
					<TextInput size="large" width={5} />
				</Field>
			</FormGroup>
			{extraStreetNum && (
				<FormGroup>
					<Field label="Street number">
						<TextInput size="large" width={5} />
					</Field>
				</FormGroup>
			)}
			<FormGroup>
				<Field label="Street name">
					<TextInput size="large" width={20} />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Street type">
					<Select size="large" width={10}>
						<option>Select</option>
						<option>Street</option>
						<option>Road</option>
						<option>Avenue</option>
					</Select>
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Suburb">
					<TextInput size="large" width={20} autocomplete="address-level2" />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="State">
					<Select size="large" width={10} autocomplete="address-level1">
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
				<Field label="Postcode">
					<TextInput size="large" width={4} autocomplete="postal-code" />
				</Field>
			</FormGroup>
		</Fragment>
	);
};

const PropertySelect = (props) => (
	<Select size="large" width={10} {...props}>
		<option value="">Select</option>
		<option value="house">House</option>
		<option value="duplex">Duplex</option>
		<option value="townhouse">Townhouse</option>
		<option value="unit">Unit</option>
		<option value="land">Land</option>
		<option value="villa">Villa</option>
	</Select>
);

const Demo = ({ context, showCode, showDemo }) => {
	const [property, setProperty] = useState();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<FormGroup>
						<Field label="Property type" hint="Must be a residential address">
							<PropertySelect value={property} onChange={(e) => setProperty(e.target.value)} />
						</Field>
					</FormGroup>
					{property && <AddressManualComplexPattern property={property} />}
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
