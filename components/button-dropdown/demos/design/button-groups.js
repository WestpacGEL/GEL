/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { ButtonGroup, Item } from '@westpac/button-group';

import { Playground } from '../../../../website/src/components/playground/macro';
import { Hr } from '../../../../helpers/demos';

const Wrapper = (props) => (
	<div
		css={{
			marginTop: '1rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
		}}
		{...props}
	/>
);

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Dropdown with button groups" dropdownSize="large" look="primary" soft>
				<Heading>Button Groups</Heading>
				<Wrapper>
					<label>
						Enable
						<br />
						Notifications?{' '}
					</label>
					<ButtonGroup name="example-1">
						<Item value="left">Yes</Item>
						<Item value="right">No</Item>
					</ButtonGroup>
				</Wrapper>
				<Hr />
				<Wrapper>
					<label>
						Enable
						<br />
						Notifications?{' '}
					</label>
					<ButtonGroup name="example-1">
						<Item value="left">Yes</Item>
						<Item value="right">No</Item>
					</ButtonGroup>
				</Wrapper>
			</ButtonDropdown>
		</Playground>
	);
};

export default Demo;
