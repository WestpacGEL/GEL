import { GEL, jsx } from '@westpac/core';
import { InputGroup } from '@westpac/input-group';
import { Select } from '@westpac/text-input';
import { Button } from '@westpac/button';
import { Fragment } from 'react';

const sizes = [
	{ value: undefined, label: 'Default' },
	{ value: 'small', label: 'Small' },
	{ value: 'medium', label: 'Medium' },
	{ value: 'large', label: 'Large' },
	{ value: 'xlarge', label: 'Xlarge' },
];

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			{sizes.map(({ value, label }) => (
				<Fragment key={value}>
					<h2>{label}</h2>

					<InputGroup
						size={value}
						name={`example-${label.toLocaleLowerCase()}-text`}
						label="Total amount"
						before="AUS $"
					/>
					<br />

					<InputGroup
						size={value}
						name={`example-${label.toLocaleLowerCase()}-button`}
						label="Filter by name"
						after={<Button size={value}>Go</Button>}
					/>
					<br />

					<InputGroup
						size={value}
						name={`example-${label.toLocaleLowerCase()}-text-button`}
						label="Total amount"
						before="AUS $"
						after={
							<Button size={value} onClick={() => console.log('Go clicked')}>
								Go
							</Button>
						}
					/>
					<br />

					<InputGroup
						size={value}
						name={`example-${label.toLocaleLowerCase()}-select-button`}
						label="Total amount"
						before={
							<Select
								size={value}
								label="Currency"
								data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
							/>
						}
						after={<Button size={value}>Go</Button>}
					/>
					<br />

					<InputGroup
						size={value}
						name={`example-${label.toLocaleLowerCase()}-select`}
						label="Total amount"
						after={
							<Select
								label="Currency"
								data={[{ text: 'AUD $' }, { text: 'USD $' }, { text: 'EUR €' }]}
							/>
						}
					/>
					<br />

					<hr />
				</Fragment>
			))}
		</GEL>
	);
}

export default Example;
