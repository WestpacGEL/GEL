import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { InputGroup, Before, After } from '@westpac/input-group';
import { Cell, Grid } from '@westpac/grid';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, null, 6]}>
					<Form>
						<Field label="Label" hint="If there is hint text, it can go here">
							<InputGroup name="example-text" label="User input text" width={20}>
								<Before inputType="text" data="AUS $" />
								<After inputType="text" data=".00" />
							</InputGroup>
						</Field>
					</Form>
				</Cell>
				<Cell width={[12, null, 6]}>
					<Form>
						<Field
							label="Label"
							hint="If there is hint text, it can go here"
							error="If there is an error, it can go here"
						>
							<InputGroup name="example-text" label="User input text" width={20}>
								<Before inputType="text" data="AUS $" />
								<After inputType="text" data=".00" />
							</InputGroup>
						</Field>
					</Form>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
