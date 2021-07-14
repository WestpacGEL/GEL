/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Template, Main } from '@westpac/template';
import { Header } from '@westpac/header';
import { Footer } from '@westpac/footer';
import { Wrapper } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<Template>
					<Header />
					<Main>Main Content</Main>
					<Footer />
				</Template>
			</Wrapper>
		</GEL>
	);
}

export default Example;
