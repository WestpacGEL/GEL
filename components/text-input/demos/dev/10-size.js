/** @jsx jsx */

import { jsx } from '@westpac/core';
import { TextInput, Select, Textarea } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, 12, 4]}>
					<TextInput size="small" placeholder="small" />
					<br />
					<TextInput size="medium" placeholder="medium" />
					<br />
					<TextInput size="large" placeholder="large" />
					<br />
					<TextInput size="xlarge" placeholder="xlarge" />
				</Cell>
				<Cell width={[12, 12, 4]}>
					<Select size="small">
						<option>Small</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<Select>
						<option>Medium</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<Select size="large">
						<option>Large</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<Select size="xlarge">
						<option>XLarge</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</Cell>
				<Cell width={[12, 12, 4]}>
					<Textarea size="small" placeholder="small" />
					<br />
					<Textarea size="medium" placeholder="medium" />
					<br />
					<Textarea size="large" placeholder="large" />
					<br />
					<Textarea size="xlarge" placeholder="xlarge" />
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
