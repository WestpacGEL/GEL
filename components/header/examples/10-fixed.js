import { GEL, jsx } from '@westpac/core';
import { Header } from '@westpac/header';
import { Button } from '@westpac/button';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h3>Fixed</h3>
			<Header fixed />
			<div css={{ height: '100vh' }} />
		</GEL>
	);
}

export default Example;
