/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { PasswordInput } from '@westpac/form';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<PasswordInput width={10} />
		</GEL>
	);
}

export default Example;
