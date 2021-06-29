/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Header } from '@westpac/header';
import { Button } from '@westpac/button';
import { Wrapper } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<h3>Default</h3>
				<Header />
				<h3>With right button</h3>
				<Header>
					<Button look="faint" soft>
						Sign out
					</Button>
				</Header>
				<h3>Center logo (xs breakpoint only)</h3>
				<Header logoCenter />
				<h3>Logo with onClick</h3>
				<Header logoOnClick={() => console.log('Logo clicked')} />
				<h3>With skip link</h3>
				<Header skipToContentId="#" />
			</Wrapper>
		</GEL>
	);
}

export default Example;
