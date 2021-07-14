/** @jsx jsx */

import { jsx, useMediaQuery } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput, Select } from '@westpac/text-input';
import { Fork, Content } from '@westpac/fork';
import { Container, FormHeading } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

const Address = ({ hint }) => {
	const hintId = hint ? 'street-hint' : undefined;
	return (
		<Fragment>
			<FormGroup>
				<Fieldset
					legend="Street"
					hint={hint ? 'Not a PO Box' : undefined}
					hintIdPrefix={hintId}
					ariadescribedby={hintId}
				>
					<InputCluster>
						<Item>
							<Field hideLabel label="Line 1 of 2">
								<TextInput size="large" />
							</Field>
						</Item>
						<Item>
							<Field hideLabel label="Line 2 of 2">
								<TextInput size="large" />
							</Field>
						</Item>
					</InputCluster>
				</Fieldset>
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

const Demo = ({ context, showCode, showDemo }) => {
	const mq = useMediaQuery();
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container>
				<Form spacing="large">
					<Fieldset legend="Do you have a different mailing address?">
						<Fork size="large" css={mq({ marginBottom: ['1.5rem', '1.875rem'] })}>
							<Content text="Yes">
								<FormHeading>Mailing address</FormHeading>
								<Address />
							</Content>
							<Content text="No" />
						</Fork>
					</Fieldset>
				</Form>
			</Container>
		</Playground>
	);
};

export default Demo;
