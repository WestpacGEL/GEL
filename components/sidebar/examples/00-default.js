/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Sidebar } from '@westpac/sidebar';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Sidebar heading="Sidebar heading" contentHeading="Sidebar content heading">
				<p>Sidebar content</p>
			</Sidebar>
		</GEL>
	);
}

export default Example;
