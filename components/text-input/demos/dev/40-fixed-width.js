import { jsx } from '@westpac/core';
import { TextInput, Select, Textarea } from '@westpac/text-input';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, 12, 4]}>
					<TextInput width={2} placeholder={2} />
					<br />
					<br />
					<TextInput width={3} placeholder={3} />
					<br />
					<br />
					<TextInput width={4} placeholder={4} />
					<br />
					<br />
					<TextInput width={5} placeholder={5} />
					<br />
					<br />
					<TextInput width={10} placeholder={10} />
					<br />
					<br />
					<TextInput width={20} placeholder={20} />
					<br />
					<br />
					<TextInput width={30} placeholder={30} />
				</Cell>
				<Cell width={[12, 12, 4]}>
					<Select width={2}>
						<option>Size 2</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<br />
					<Select width={3}>
						<option>Size 3</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<br />
					<Select width={4}>
						<option>Size 4</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<br />
					<Select width={5}>
						<option>Size 5</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<br />
					<Select width={10}>
						<option>Size 10</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<br />
					<Select width={20}>
						<option>Size 20</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
					<br />
					<br />
					<Select width={30}>
						<option>Size 30</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
					</Select>
				</Cell>
				<Cell width={[12, 12, 4]}>
					<Textarea width={2} placeholder={'W'.repeat(2)} />
					<br />
					<br />
					<Textarea width={3} placeholder={'W'.repeat(3)} />
					<br />
					<br />
					<Textarea width={4} placeholder={'W'.repeat(4)} />
					<br />
					<br />
					<Textarea width={5} placeholder={'W'.repeat(5)} />
					<br />
					<br />
					<Textarea width={10} placeholder={'W'.repeat(10)} />
					<br />
					<br />
					<Textarea width={20} placeholder={'W'.repeat(20)} />
					<br />
					<br />
					<Textarea width={30} placeholder={'W'.repeat(30)} />
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
