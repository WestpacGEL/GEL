import { InputGroup } from '@westpac/input-group';
import { Button } from '@westpac/button';
import { Playground } from '../../../../website/src/components/playground/macro';
import { Fragment } from 'react';

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
			{SIZES.map(({ value, label }) => (
				<Fragment key={value}>
					<h2>{label}</h2>
					<InputGroup
						name={`example-${value}-text`}
						label="Total amount"
						size={value}
						before="AUS $"
						after={<Button size={value}>Go</Button>}
					/>
					<br />
				</Fragment>
			))}
		</Playground>
	);
};

export default Demo;
