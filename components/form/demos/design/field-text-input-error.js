import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { TextInput } from '@westpac/text-input';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form>
				<Field label="Label" hint="Hint text" error="Error text">
					<TextInput width={20} invalid />
				</Field>
			</Form>
		</Playground>
	);
};

export default Demo;
