import { GEL, jsx } from '@westpac/core';
import { Header } from '@westpac/header';
import { Wrapper } from './_utils';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/header'] = {
		Header: {
			styles: (styles) => ({
				...styles,
				border: '2px solid darkmagenta',
			}),
		},
	};
	return (
		<GEL brand={overridesWithTokens}>
			<Wrapper>
				<h2>With overrides applied</h2>
				<Header />

				<h2>With overrides and component overrides</h2>
				<Header
					overrides={{
						Header: {
							styles: (styles) => ({
								...styles,
								border: '2px dashed lightcoral',
							}),
						},
					}}
				/>
			</Wrapper>
		</GEL>
	);
}

export default Example;
