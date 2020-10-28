/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Small dropdown" dropdownSize="small">
				<Heading>Small dropdown menu: 130px wide</Heading>
			</ButtonDropdown>{' '}
			<ButtonDropdown text="Medium dropdown" dropdownSize="medium">
				<Heading>Medium (default) dropdown menu: 190px wide</Heading>
			</ButtonDropdown>{' '}
			<ButtonDropdown text="Large dropdown" dropdownSize="large">
				<Heading>Large dropdown menu: 250px wide</Heading>
			</ButtonDropdown>
		</Playground>
	);
};

export default Demo;
