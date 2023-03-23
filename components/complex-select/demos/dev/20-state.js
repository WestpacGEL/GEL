import { jsx } from '@westpac/core';
import { TextInput, Select, Textarea } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, 12, 3]}>Invalid</Cell>
				<Cell width={[12, 12, 3]}>
					<TextInput invalid />
				</Cell>
				<Cell width={[12, 12, 3]}>
					<Select invalid>
						<option>Invalid</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</Cell>
				<Cell width={[12, 12, 3]}>
					<Textarea placeholder="invalid" invalid />
				</Cell>
				<Cell width={[12, 12, 3]}>Disabled</Cell>
				<Cell width={[12, 12, 3]}>
					<TextInput disabled />
				</Cell>
				<Cell width={[12, 12, 3]}>
					<Select disabled>
						<option>disabled</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</Cell>
				<Cell width={[12, 12, 3]}>
					<Textarea disabled />
				</Cell>
				<Cell width={[12, 12, 3]}>Read-only</Cell>
				<Cell width={[12, 12, 3]}>
					<TextInput defaultValue="This value is readonly" readOnly />
				</Cell>
				<Cell width={[12, 12, 3]}></Cell>
				<Cell width={[12, 12, 3]}>
					<Textarea defaultValue="This value is readonly" readOnly />
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
