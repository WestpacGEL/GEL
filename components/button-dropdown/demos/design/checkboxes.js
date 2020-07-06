/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { FormCheck, Option } from '@westpac/form-check';

import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Dropdown with checkboxes">
				<Heading>Checkboxes</Heading>
				<FormCheck
					name="example-default"
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
