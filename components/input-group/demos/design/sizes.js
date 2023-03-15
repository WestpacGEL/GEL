import { jsx } from '@westpac/core';
import { Fragment } from 'react';
import { InputGroup } from '@westpac/input-group';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Container } from '../../../../helpers/demos';

const SIZES = [
	{
		label: 'Small',
		value: 'small',
	},
	{
		label: 'Medium',
		value: 'medium',
	},
	{
		label: 'Large',
		value: 'large',
	},
	{
		label: 'XLarge',
		value: 'xlarge',
	},
];

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Container width={50}>
				{SIZES.map(({ value, label }) => (
					<Fragment key={value}>
						<InputGroup
							name="example-text"
							label="Total amount"
							size={value}
							before="AUS $"
							after=".00"
						/>
						<br />
					</Fragment>
				))}
			</Container>
		</Playground>
	);
};

export default Demo;
