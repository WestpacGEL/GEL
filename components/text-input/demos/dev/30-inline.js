import { jsx } from '@westpac/core';
import { TextInput, Select, Textarea } from '@westpac/text-input';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Title } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<TextInput inline />{' '}
			<Select name="thing" inline>
				<option>Select</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</Select>{' '}
			<Textarea inline />
		</Playground>
	);
};

export default Demo;
