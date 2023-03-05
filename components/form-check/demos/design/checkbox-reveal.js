import { jsx } from '@westpac/core';
import { FormCheckReveal, Option } from '@westpac/form-check';
import { Grid, Cell } from '@westpac/grid';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={6}>
					<Title>Medium</Title>
					<FormCheckReveal name="example-checkbox-reveal-medium" size="medium" show={3}>
						<Option value="1">Option 1</Option>
						<Option value="2">Option 2</Option>
						<Option value="3">Option 3</Option>
						<Option value="4">Option 4</Option>
						<Option value="5">Option 5</Option>
						<Option value="6">Option 6</Option>
						<Option value="7">Option 7</Option>
						<Option value="8">Option 8</Option>
						<Option value="9">Option 9</Option>
						<Option value="10">Option 10</Option>
					</FormCheckReveal>
				</Cell>
				<Cell width={6}>
					<Title>Large</Title>
					<FormCheckReveal name="example-checkbox-reveal-large" size="large" show={3}>
						<Option value="1">Option 1</Option>
						<Option value="2">Option 2</Option>
						<Option value="3">Option 3</Option>
						<Option value="4">Option 4</Option>
						<Option value="5">Option 5</Option>
						<Option value="6">Option 6</Option>
						<Option value="7">Option 7</Option>
						<Option value="8">Option 8</Option>
						<Option value="9">Option 9</Option>
						<Option value="10">Option 10</Option>
					</FormCheckReveal>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
