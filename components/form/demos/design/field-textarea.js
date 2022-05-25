/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Form, Field } from '@westpac/form';
import { Textarea } from '@westpac/text-input';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Form>
				<Field label="Label" hint="Hint text">
					<Textarea width={20} />
				</Field>
			</Form>
		</Playground>
	);
};

export default Demo;
