import { jsx } from '@westpac/core';
import { Option } from '@westpac/form-check';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={6}>
					<Title>Checkbox</Title>
					<Option value="1">Option 1</Option>
				</Cell>
				<Cell width={6}>
					<Title>Radio</Title>
					<Option value="1" type="radio">
						Option 1
					</Option>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
