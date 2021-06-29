/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Header } from '@westpac/header';
import { Button } from '@westpac/button';
import { Wrapper } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<h3>Basic</h3>
				<Header />
				<h3>Arrow</h3>
				<Header leftIcon="arrow" leftOnClick={() => console.log('test')} />
				<h3>Hamburger and center logo both xs only</h3>
				<Header leftIcon="hamburger" logoCenter />
				<h3>With button</h3>
				<Header>
					<Button look="faint" soft>
						Sign out
					</Button>
				</Header>
				<h3>Skip link</h3>
				<Header skipToContentId="#" />
			</Wrapper>
		</GEL>
	);
}

export default Example;
