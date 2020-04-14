/** @jsx jsx */

import { jsx } from '@westpac/core';
import { ButtonDropdown, Heading } from '@westpac/button-dropdown';
import { ButtonGroup, Item } from '@westpac/button-group';
import { Hr } from './_utils';
import { Playground } from '../../../../website/src/components/playground/macro';

const Wrapper = props => (
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

export default ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<ButtonDropdown text="Default Dropdown" open dropdownSize="large">
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
