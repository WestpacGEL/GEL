/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Sidebar } from '@westpac/sidebar';

const Text = (props) => <p css={{ padding: '0 1rem' }} {...props} />;

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Sidebar heading="Sidebar heading" contentHeading="Sidebar content heading">
				<Text>Sidebar content</Text>
			</Sidebar>
		</GEL>
	);
}

export default Example;
