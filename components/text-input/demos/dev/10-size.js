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
					<br />
					<TextInput size="medium" placeholder="medium" />
					<br />
					<br />
					<TextInput size="large" placeholder="large" />
					<br />
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
					<br />
					<Select>
						<option>Medium</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<br />
					<Select size="large">
						<option>Large</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
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
					<br />
					<Textarea size="medium" placeholder="medium" />
					<br />
					<br />
					<Textarea size="large" placeholder="large" />
					<br />
					<br />
					<Textarea size="xlarge" placeholder="xlarge" />
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
