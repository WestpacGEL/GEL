/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Heading } from '@westpac/heading';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

const FormHeading = (props) => {
	const { COLORS } = useBrand();
	return (
		<Heading
			tag="h3"
			size="8"
			overrides={{
				Heading: {
					styles: (styles) => ({
						...styles,
						marginBottom: '1rem',
						color: COLORS.hero,
					}),
				},
			}}
			{...props}
		/>
	);
};

const Address = ({ hint }) => (
	<Fragment>
		<FormGroup>
			<Fieldset legend="Street" hint={hint ? 'Not a PO Box' : undefined}>
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
			<Field label="City">
				<TextInput size="large" width={20} />
			</Field>
		</FormGroup>
		<FormGroup>
			<Field label="State">
				<TextInput size="large" width={20} />
			</Field>
		</FormGroup>
		<FormGroup>
			<Field label="Postcode">
				<TextInput size="large" width={4} />
			</Field>
		</FormGroup>
	</Fragment>
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormHeading>Home address</FormHeading>
				<Address hint />
				{/* Fork goes here */}
				<Fieldset legend="Do you have a different mailing address?"></Fieldset>
				<FormHeading>Mailing address</FormHeading>
				<Address />
			</Form>
		</Playground>
	);
};

export default Demo;
