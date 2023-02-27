import { jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={6}>
					<Title>Checkbox</Title>
					<FormCheck type="checkbox" name="example-checkbox-hint">
						<Option value="1" hint="This is hint text">
							Option 1
						</Option>
						<Option value="2" hint="This is hint text">
							Option 2
						</Option>
						<Option value="3" hint="This is hint text">
							Option 3
						</Option>
					</FormCheck>
				</Cell>
				<Cell width={6}>
					<Title>Radio</Title>
					<FormCheck type="radio" name="example-radio-hint">
						<Option value="1" hint="This is hint text">
							Option 1
						</Option>
						<Option value="2" hint="This is hint text">
							Option 2
						</Option>
						<Option value="3" hint="This is hint text">
							Option 3
						</Option>
					</FormCheck>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
