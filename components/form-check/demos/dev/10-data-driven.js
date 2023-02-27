import { jsx } from '@westpac/core';
import { FormCheck } from '@westpac/form-check';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={6}>
					<Title>Checkbox</Title>
					<FormCheck
						type="checkbox"
						name="example-checkbox-data-driven"
						defaultValue={['2', '3']}
						data={[
							{ value: '1', text: 'Option 1' },
							{ value: '2', text: 'Option 2' },
							{ value: '3', text: 'Option 3' },
						]}
					/>
				</Cell>
				<Cell width={6}>
					<Title>Radio</Title>
					<FormCheck
						type="radio"
						name="example-radio-data-driven"
						defaultValue="2"
						data={[
							{ value: '1', text: 'Option 1' },
							{ value: '2', text: 'Option 2' },
							{ value: '3', text: 'Option 3' },
						]}
					/>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
