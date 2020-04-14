/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { Playground } from '../../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Small Dropdown" dropdownSize="small" open>
				<Heading>Small dropdown menu: 130px wide</Heading>
			</ButtonDropdown>{' '}
			<ButtonDropdown text="Medium Dropdown" dropdownSize="medium" open>
				<Heading>Medium (default) dropdown menu: 190px wide</Heading>
			</ButtonDropdown>{' '}
			<ButtonDropdown text="Large Dropdown" dropdownSize="large" open>
				<Heading>Large dropdown menu: 250px wide</Heading>
			</ButtonDropdown>
		</Playground>
	);
};
