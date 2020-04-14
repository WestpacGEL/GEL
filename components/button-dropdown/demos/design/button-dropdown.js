/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown } from '@westpac/button-dropdown';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Default Dropdown">
				<p>Example dropdown content...</p>
			</ButtonDropdown>
		</Playground>
	);
};
