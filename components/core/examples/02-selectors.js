/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Stacked classes</h2>
			<p css={{ '&&': { color: 'red' } }}>&&</p>
			<p css={{ '&&&': { color: 'red' } }}>&&&</p>
			<p css={{ '&&&&': { color: 'red' } }}>&&&&</p>

			<hr />

			<h2>Combinator selectors</h2>

			<h3>Descendant selector (space)</h3>
			<p css={{ 'div &': { color: 'blue' } }}>div &</p>

			<h3>child selector (>)</h3>
			<div css={{ 'p > span': { color: 'blueviolet' } }}>
				<p>
					<span>p > span</span>
				</p>
			</div>
			<p css={{ 'div > &': { color: 'pink' } }}>div > &</p>
			<div css={{ '& > &': { color: 'fuchsia' } }}>
				<p css={{ '& > &': { color: 'fuchsia' } }}>& > &</p>
			</div>

			<h3>adjacent sibling selector (+)</h3>
			<p css={{ '& + &': { color: 'green' } }}>& + &</p>
			<p css={{ '& + &': { color: 'green' } }}>& + &</p>

			<h3>general sibling selector (~)</h3>
			<p css={{ '& ~ &': { color: 'orange' } }}>& ~ &</p>
			<div>Bla</div>
			<p css={{ '& ~ &': { color: 'orange' } }}>& ~ &</p>
		</GEL>
	);
}

export default Example;
