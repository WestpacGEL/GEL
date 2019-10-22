/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Breadcrumb, Crumb } from '@westpac/breadcrumb';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Breadcrumb>
				<Crumb>
					<a href="/">Home</a>
				</Crumb>
				<Crumb>
					<a href="/personal-banking/">Personal</a>
				</Crumb>
				<Crumb>Credit cards</Crumb>
			</Breadcrumb>
		</GEL>
	);
}

export default Example;
