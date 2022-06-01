/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { FormCheck, Option } from '@westpac/form-check';
import { Cell, Grid } from '@westpac/grid';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, null, 6]}>
					<Form>
						<Field label="Label" hint="If there is hint text, it can go here">
							<FormCheck name="example-checkbox" type="radio">
								<Option value="1">Option 1</Option>
								<Option value="2">Option 2</Option>
								<Option value="3">Option 3</Option>
							</FormCheck>
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
							<FormCheck name="example-checkbox" type="radio">
								<Option value="1">Option 1</Option>
								<Option value="2">Option 2</Option>
								<Option value="3">Option 3</Option>
							</FormCheck>
						</Field>
					</Form>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
