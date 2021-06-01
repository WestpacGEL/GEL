/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { FormCheck, Option } from '@westpac/form-check';

import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Dropdown with radios" look="primary" soft>
				<Heading>Checkboxes</Heading>
				<FormCheck
					name="example-default"
					type="radio"
					overrides={{
						FormCheck: {
							styles: (styles) => ({
								...styles,
								margin: '1rem 0 0',
							}),
						},
					}}
				>
					<Option value="1">Option 1</Option>
					<Option value="2">Option 2</Option>
					<Option value="3">Option 3</Option>
					<Option value="4">Option 4</Option>
				</FormCheck>
			</ButtonDropdown>
		</Playground>
	);
};

export default Demo;
