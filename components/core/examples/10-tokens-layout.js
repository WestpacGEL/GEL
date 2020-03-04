/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';

import { Intopia } from '../../../helpers/example/components/Intopia.js';
import { Playground } from '../../../website/src/components/playground/macro';

export default ({ context, showCode, showDemo }) => {
	const { LAYOUT } = useBrand();

	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Intopia ignore />
			<h2>Layout</h2>
			Breakpoints:
			<ul
				css={{
					listStyle: 'none',
					margin: 0,
					padding: 0,
				}}
			>
				{Object.entries(LAYOUT.breakpoints).map(([name, breakpoint], i) => (
					<li key={i}>
						{name}: {breakpoint}px
					</li>
				))}
			</ul>
		</Playground>
	);
};
