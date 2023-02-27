import { GEL, jsx, useFonts } from '@westpac/core';
import { Heading, BrandHeading } from '@westpac/heading';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/heading'] = {
		Heading: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
		},
		BrandHeading: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid blue',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens} css={{ ...useFonts({ path: 'assets/' }) }}>
			<h2>
				Without <code>tag</code> prop
			</h2>

			<h3>Heading</h3>
			<Heading size={1}>Size: 1</Heading>
			<Heading size={2}>Size: 2</Heading>
			<Heading size={3}>Size: 3</Heading>
			<Heading size={4}>Size: 4</Heading>
			<Heading size={5}>Size: 5</Heading>
			<Heading size={6}>Size: 6</Heading>
			<Heading size={7}>Size: 7</Heading>
			<Heading size={8}>Size: 8</Heading>
			<Heading size={9}>Size: 9</Heading>

			<h3>BrandHeading</h3>
			<BrandHeading size={1}>Size: 1</BrandHeading>
			<BrandHeading size={2}>Size: 2</BrandHeading>
			<BrandHeading size={3}>Size: 3</BrandHeading>
			<BrandHeading size={4}>Size: 4</BrandHeading>
			<BrandHeading size={5}>Size: 5</BrandHeading>
			<BrandHeading size={6}>Size: 6</BrandHeading>
			<BrandHeading size={7}>Size: 7</BrandHeading>

			<hr />

			<h2>With overrides and component overrides</h2>

			<h3>Heading</h3>
			<Heading
				size={1}
				overrides={{
					Heading: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted green',
						}),
					},
				}}
			>
				Heading text
			</Heading>

			<h3>BrandHeading</h3>
			<BrandHeading
				size={1}
				overrides={{
					BrandHeading: {
						styles: (styles) => ({
							...styles,
							outline: '3px dotted purple',
						}),
					},
				}}
			>
				BrandHeading text
			</BrandHeading>
		</GEL>
	);
}

export default Example;
