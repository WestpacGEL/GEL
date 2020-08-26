/** @jsx jsx */

import { GEL, jsx, useMediaQuery } from '@westpac/core';

function Example({ brand }) {
	const mq = useMediaQuery();

	return (
		<GEL brand={brand}>
			<h2>Standard styling</h2>
			<p css={{ color: 'green' }}>This is green</p>

			<hr />

			<h2>Stacked classes</h2>
			<p css={{ '&': { color: 'green' } }}>&</p>
			<p css={{ '&&': { color: 'green' } }}>&&</p>
			<p css={{ '&&&': { color: 'green' } }}>&&&</p>
			<p css={{ '&&&&': { color: 'green' } }}>&&&&</p>

			<hr />

			<h2>Combinator selectors</h2>

			<h3>Descendant selector (space)</h3>
			<p css={{ 'div &': { color: 'green' } }}>div &</p>

			<h3>Child selector (>)</h3>
			<div css={{ 'p > span': { color: 'green' } }}>
				<p>
					<span>p > span</span>
				</p>
			</div>
			<div>
				<p css={{ 'div > &': { color: 'green' } }}>div > &</p>
			</div>
			<div css={{ '& > &': { color: 'green' } }}>
				<p css={{ '& > &': { color: 'green' } }}>& > &</p>
			</div>

			<h3>Adjacent sibling selector (+)</h3>
			<p css={{ '& + &': { color: 'green' } }}>& + &</p>
			<p css={{ '& + &': { color: 'green' } }}>& + &</p>
			<div>&lt;div&gt;</div>
			<p css={{ '& + &': { color: 'green' } }}>& + &</p>

			<h3>General sibling selector (~)</h3>
			<p css={{ '& ~ &': { color: 'green' } }}>& ~ &</p>
			<p css={{ '& ~ &': { color: 'green' } }}>& ~ &</p>
			<div>&lt;div&gt;</div>
			<p css={{ '& ~ &': { color: 'green' } }}>& ~ &</p>

			<hr />

			<h2>Array values</h2>
			<p
				css={mq({
					fontWeight: 'bold',
					color: ['red', 'green', 'blue', 'purple', 'orange'],
				})}
			>
				['red', 'green', 'blue', 'purple', 'orange']
			</p>
			<div>
				<p css={mq({ 'div &': { color: [null, 'green', 'blue', 'purple', 'orange'] } })}>
					div & ([null, 'green', 'blue', 'purple', 'orange'])
				</p>
			</div>
		</GEL>
	);
}

export default Example;
