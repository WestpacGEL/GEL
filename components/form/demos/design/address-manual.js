/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Form, FormGroup, Field, Fieldset, InputCluster, Item } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Heading } from '@westpac/heading';
import { Fork, Content } from '@westpac/fork';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

const FormHeading = (props) => {
	const { COLORS } = useBrand();
	return (
		<Heading
			tag="h3"
			size={8}
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
};

const Demo = ({ context, showCode, showDemo }) => {
	const mq = useMediaQuery();
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form spacing="large">
				<FormHeading>Home address</FormHeading>
				<Address hint />
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
		</Playground>
	);
};

export default Demo;
