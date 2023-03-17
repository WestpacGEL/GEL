import { GEL } from '@westpac/core';
import { HouseIcon } from '@westpac/icon';
import { InputGroup } from '@westpac/input-group';
import { Button } from '@westpac/button';
import { Select } from '@westpac/text-input';

const TextOverride = ({ data, state: _, ...rest }) => (
	<span {...rest}>
		<HouseIcon size="small" /> {data}
	</span>
);

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/input-group'] = {
		InputGroup: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
		},
		Text: {
			component: TextOverride,
		},
		TextInput: {
			styles: (styles) => ({
				...styles,
				outline: '4px dotted green',
			}),
		},
		Select: {
			styles: (styles) => ({
				...styles,
				outline: '4px dotted purple',
			}),
		},
		Button: {
			styles: (styles) => ({
				...styles,
				outline: '4px dotted blue',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h2>With overrides applied</h2>
			<InputGroup
				name="example-overrides-l"
				before="AUS $"
				after={<Button onClick={() => console.log('Go clicked')}>Go</Button>}
			/>
			<br />

			<InputGroup
				name="example-overrides-2"
				before="AUS $"
				after={<Button onClick={() => console.log('Go clicked')}>Go</Button>}
			/>
			<br />

			<InputGroup
				name="example-overrides-3"
				before={
					<Select
						onChange={(event) => console.log(`Select ${event.target.value}`)}
						data={[
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'NZD $', value: 'NZD $' },
							{ text: 'USD $', value: 'USD $' },
						]}
					/>
				}
				after={<Button onClick={() => console.log('Go clicked')}>Go</Button>}
			/>
			<br />

			<InputGroup
				name="example-overrides-4"
				before={
					<Select
						onChange={(event) => console.log(`Select ${event.target.value}`)}
						data={[
							{ text: 'Select', value: '' },
							{ text: 'AUD $', value: 'AUD $' },
							{ text: 'NZD $', value: 'NZD $' },
							{ text: 'USD $', value: 'USD $' },
						]}
					/>
				}
				after={<Button onClick={() => console.log('Go clicked')}>Go</Button>}
			/>
		</GEL>
	);
}

export default Example;
