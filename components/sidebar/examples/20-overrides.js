import { GEL, jsx } from '@westpac/core';
import { Sidebar } from '@westpac/sidebar';

const Text = (props) => <p css={{ padding: '0 1rem' }} {...props} />;

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/sidebar'] = {
		Sidebar: {
			styles: (styles) => ({
				...styles,
				outline: '1px solid red',
			}),
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<Sidebar heading="Sidebar heading" contentHeading="Sidebar content heading">
				<Text>Sidebar content</Text>
			</Sidebar>
		</GEL>
	);
}

export default Example;
