/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { Select } from '@westpac/text-input';
import { Cell, Grid } from '@westpac/grid';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, null, 6]}>
					<Form>
						<Field label="Label" hint="If there is hint text, it can go here">
							<Select name="example-select" width={20}>
								<option>Select</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</Select>
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
							<Select name="example-select" width={20}>
								<option>Select</option>
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</Select>
						</Field>
					</Form>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
