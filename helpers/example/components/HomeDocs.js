import { jsx } from '@westpac/core';
import { Container } from '@westpac/grid';

import { Article } from './Article';

export function HomeDocs() {
	return (
		<Article>
			<Container>
				<h1>GEL Examples</h1>
				<p>Click one of the examples on the left to view it.</p>
			</Container>
		</Article>
	);
}
