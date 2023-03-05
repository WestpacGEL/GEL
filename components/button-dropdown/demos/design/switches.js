import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { Switch } from '@westpac/switch';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Hr } from '../../../../helpers/demos';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Dropdown with switches" dropdownSize="large" look="primary" soft>
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

export default Demo;
