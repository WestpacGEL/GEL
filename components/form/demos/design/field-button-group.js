import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Cell, Grid } from '@westpac/grid';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, null, 6]}>
					<Form>
						<Field label="Label" hint="If there is hint text, it can go here">
							<ButtonGroup name="example-1" look="primary">
								<Item value="left">Left</Item>
								<Item value="right">Right</Item>
							</ButtonGroup>
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
							<ButtonGroup name="example-1" look="primary">
								<Item value="left">Left</Item>
								<Item value="right">Right</Item>
							</ButtonGroup>
						</Field>
					</Form>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
