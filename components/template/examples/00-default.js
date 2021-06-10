/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Template, Header } from '@westpac/template';

const Wrapper = (props) => (
	<div css={{ backgroundColor: '#f3f4f6', height: '80vh', padding: '1rem' }} {...props} />
);

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<Header />
			</Wrapper>
		</GEL>
	);
}

export default Example;
