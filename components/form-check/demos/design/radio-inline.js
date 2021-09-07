/** @jsx jsx */

import { jsx } from '@westpac/core';
import { FormCheck, Option } from '@westpac/form-check';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<FormCheck type="radio" name="example-radio-inline" inline>
				<Option value="1">Option 1</Option>
				<Option value="2">Option 2</Option>
			</FormCheck>
		</Playground>
	);
};

export default Demo;
