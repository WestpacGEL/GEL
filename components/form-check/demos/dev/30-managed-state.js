import { jsx } from '@westpac/core';
import { useState } from 'react';
import { FormCheck, Option } from '@westpac/form-check';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	const [formCheckValue, setFormCheckValue] = useState(['1', '3']);
	const [formCheckRadio, setFormCheckRadio] = useState('1');
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={6}>
					<Title>Checkbox</Title>
					<FormCheck
						type="checkbox"
						name="example-checkbox-controlled"
						value={formCheckValue}
						onChange={(value, event) => setFormCheckValue(value)}
					>
						<Option value="1">Option 1</Option>
						<Option value="2">Option 2</Option>
						<Option value="3">Option 3</Option>
					</FormCheck>
				</Cell>
				<Cell width={6}>
					<Title>Radio</Title>
					<FormCheck
						type="radio"
						name="example-radio-controlled"
						value={formCheckRadio}
						onChange={(value, event) => setFormCheckRadio(value)}
					>
						<Option value="1">Option 1</Option>
						<Option value="2">Option 2</Option>
						<Option value="3">Option 3</Option>
					</FormCheck>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
