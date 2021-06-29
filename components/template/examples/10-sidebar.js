/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Template } from '@westpac/template';
import { Wrapper } from './_utils';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Wrapper>
				<Template />
			</Wrapper>
		</GEL>
	);
}

export default Example;
