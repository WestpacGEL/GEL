/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Header } from '@westpac/header';
import { Wrapper } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<h3>Arrow</h3>
				<Header leftIcon="arrow" />
				<h3>Arrow with onClick</h3>
				<Header leftIcon="arrow" leftOnClick={() => console.log('Arrow clicked')} />
				<h3>Hamburger (Only visible at xs breakpoint)</h3>
				<Header leftIcon="hamburger" logoCenter />
				<h3>Hamburger with onClick</h3>
				<Header
					leftIcon="hamburger"
					logoCenter
					leftOnClick={() => console.log('Hamburger clicked')}
				/>
			</Wrapper>
		</GEL>
	);
}

export default Example;
