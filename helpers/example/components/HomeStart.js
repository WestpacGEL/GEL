/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Container } from '@westpac/grid';

import { Article } from './Article';
import { Code } from './Code';

export function HomeStart({ packageName, pkg }) {
	return (
		<Article>
			<Container>
				<h1>{packageName} Examples</h1>
				<p>Click one of the examples on the left to view it.</p>
				<Code>yarn add @westpac/{pkg}</Code>
				<p>To run this component locally:</p>
				<Code>yarn start {pkg}</Code>
				<p>To load the examples for another package run the above code with another package name</p>
			</Container>
		</Article>
	);
}
