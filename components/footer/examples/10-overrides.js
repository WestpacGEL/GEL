/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Footer } from '@westpac/footer';
import { Wrapper, Content } from './_utils';

function Example({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/footer'] = {
		Footer: {
			styles: (styles) => ({
				...styles,
				border: '4px solid palevioletred',
			}),
		},
	};

	return (
		<GEL brand={overridesWithTokens}>
			<Wrapper>
				<h2>With overrides applied</h2>
				<Footer>
					<Content />
				</Footer>
				<hr />

				<h2>With overrides and component overrides</h2>
				<Footer
					overrides={{
						Footer: {
							styles: (styles) => ({
								...styles,
								border: '4px dashed darkcyan',
							}),
						},
					}}
				>
					<Content />
				</Footer>
			</Wrapper>
		</GEL>
	);
}

export default Example;
