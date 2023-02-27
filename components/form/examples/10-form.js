import { GEL, jsx } from '@westpac/core';
import { Form, FormGroup } from '@westpac/form';
import { TextInput } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { Box } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default instance (no styling props)</h2>
			<Form>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</Form>

			<hr />

			<h2>Spacing</h2>

			<h3>Medium</h3>
			<Form spacing="medium">
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</Form>

			<h3>Large</h3>
			<Form spacing="large">
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
				<FormGroup>
					<Box>FormGroup content</Box>
				</FormGroup>
			</Form>

			<hr />

			<h2>Size</h2>

			<h3>Small</h3>
			<Form size="small">
				<FormGroup>
					<TextInput />
				</FormGroup>
			</Form>

			<h3>Medium</h3>
			<Form size="medium">
				<FormGroup>
					<TextInput />
				</FormGroup>
			</Form>

			<h3>Large</h3>
			<Form size="large">
				<FormGroup>
					<TextInput />
				</FormGroup>
			</Form>

			<h3>XLarge</h3>
			<Form size="xlarge">
				<FormGroup>
					<TextInput />
				</FormGroup>
			</Form>

			<hr />

			<h2>Inline mode (SM+)</h2>
			<Form inline>
				<FormGroup>
					<TextInput />
				</FormGroup>
				<FormGroup>{/* <Button>Go</Button> */}</FormGroup>
			</Form>
		</GEL>
	);
}

export default Example;
