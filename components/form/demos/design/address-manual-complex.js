/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Fork, Content } from '@westpac/fork';
import { Fragment, useState } from 'react';
import { Container, FormHeading, Link } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Address = ({ property = 'house' }) => {
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
				<Field label="Street type" hint="For example, road">
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
					<TextInput size="large" width={20} />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="State">
					<Select size="large" width={10}>
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
					<TextInput size="large" width={4} />
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
	const [property2, setProperty2] = useState();
	const mq = useMediaQuery();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<FormHeading spacing="small">What's the address?</FormHeading>
				<Link spacing>Search for your address instead</Link>
				<Form spacing="large">
					<FormGroup>
						<Field label="Property type" hint="Must be a residential address">
							<PropertySelect value={property} onChange={(e) => setProperty(e.target.value)} />
						</Field>
					</FormGroup>
					{property && <Address property={property} />}
					<Fieldset legend="Do you have a different mailing address?">
						{/* <Fork
							size="large"
							css={mq({ marginBottom: ['1.5rem', '1.875rem'] })}
						>
							<Content text="Yes">
								<FormGroup>
									<Field label="Property type" hint="Must be a residential address">
										<PropertySelect
											value={property2}
											onChange={(e) => setProperty2(e.target.value)}
										/>
									</Field>
								</FormGroup>
								{property2 && <Address property={property2} />}
							</Content>
							<Content text="No" />
						</Fork> */}
					</Fieldset>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
