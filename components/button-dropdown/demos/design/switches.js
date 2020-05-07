/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { Switch } from '@westpac/switch';
import { Hr } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Default Dropdown" open dropdownSize="large">
				<Heading>Switches</Heading>
				<Switch
					name="example-default"
					label="Enable notification"
					overrides={{
						Switch: {
							styles: (styles) => ({
								...styles,
								marginTop: '1rem',
							}),
						},
					}}
				/>
				<Hr />
				<Switch name="example-default" label="Enable notification" />
			</ButtonDropdown>
		</Playground>
	);
};
