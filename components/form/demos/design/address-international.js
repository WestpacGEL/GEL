/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FormGroup, Field, Fieldset } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			{/* Should be wrapping in a form here */}
			{/* Need to look into the textinput size restrictions */}
			<FormGroup>
				<Fieldset legend="Street">
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
				<Field label="City, town or suburb">
					<TextInput />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="State, province or region">
					<TextInput />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field label="Postcode or Zip code">
					<TextInput />
				</Field>
			</FormGroup>
			<FormGroup>
				<Field
					label="Search for your country"
					hint="Start typing your country and select from the list"
				>
					{/* This needs to be autocomplete */}
					<TextInput />
				</Field>
			</FormGroup>
		</Playground>
	);
};

export default Demo;
