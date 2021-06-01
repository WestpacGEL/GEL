/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FormGroup, Field, Fieldset } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			{/* need to import heading component */}
			<h3>Home address</h3>
			<FormGroup>
				<Fieldset legend="Street" hint="Not a PO Box">
					<Field hideLabel label="Line 1 of 2">
						<TextInput />
					</Field>
					{/* This is wrong, need to look into this */}
					<br />
					<Field hideLabel label="Line 2 of 2">
						<TextInput />
					</Field>
				</Fieldset>
			</FormGroup>
			<FormGroup>
				<Field label="City">
					<TextInput />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="State">
					<TextInput />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Postcode">
					<TextInput />
				</Field>
			</FormGroup>
			{/* Fork goes here */}
		</Playground>
	);
};

export default Demo;
