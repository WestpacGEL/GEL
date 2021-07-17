/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Footer } from '@westpac/footer';
import { Wrapper, Content } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<h3>Default</h3>
				<Footer>
					<Content />
				</Footer>
				<h3>With srOnly logo link text</h3>
				<Footer srOnlyText="Go to home">
					<Content />
				</Footer>
			</Wrapper>
		</GEL>
	);
}

export default Example;
