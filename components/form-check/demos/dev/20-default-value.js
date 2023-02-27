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
					<FormCheck type="checkbox" name="example-checkbox-default" defaultValue={['1', '3']}>
						<Option value="1" disabled>
							Option 1
						</Option>
						<Option value="2">Option 2</Option>
						<Option value="3">Option 3</Option>
					</FormCheck>
				</Cell>
				<Cell width={6}>
					<Title>Radio</Title>
					<FormCheck type="radio" name="example-radio-default" defaultValue="2">
						<Option value="1">Option 1</Option>
						<Option value="2">Option 2</Option>
						<Option value="3" disabled>
							Option 3
						</Option>
					</FormCheck>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
