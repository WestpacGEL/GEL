import { GEL, jsx } from '@westpac/core';
import { Form, FormGroup, Fieldset } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Box } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default instance (no styling props)</h2>
			<Form>
				<FormGroup>
					<Fieldset legend="This is a legend">
						<Box>Fieldset content</Box>
					</Fieldset>
				</FormGroup>
			</Form>

			<hr />

			<h2>Spacing</h2>

			<h3>Medium</h3>
			<Form spacing="medium">
				<FormGroup>
					<Fieldset legend="This is a legend">
						<Box>Fieldset content</Box>
					</Fieldset>
				</FormGroup>
			</Form>

			<h3>Large</h3>
			<Form spacing="large">
				<FormGroup>
					<Fieldset legend="This is a legend">
						<Box>Fieldset content</Box>
					</Fieldset>
				</FormGroup>
			</Form>

			<h3>Error list</h3>
			<Fieldset
				legend="I am legend too"
				hint="I am a hint"
				error={['I am error 1', 'I am error 2']}
			>
				<TextInput invalid />
			</Fieldset>
		</GEL>
	);
}

export default Example;
