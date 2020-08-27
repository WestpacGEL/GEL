/** @jsx jsx */

import { GEL, jsx, useMediaQuery } from '@westpac/core';

function Example({ brand }) {
	const mq = useMediaQuery();
	const {
		LAYOUT: { breakpoints },
	} = brand;

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

			<h2>Responsive</h2>

			<h3>Array values</h3>
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

			<h3>@media queries</h3>
			<p
				css={{
					fontWeight: 'bold',
					color: 'red',
					[`@media (min-width: ${breakpoints.xsl}px)`]: { color: 'green' },
					[`@media (min-width: ${breakpoints.sm}px)`]: { color: 'blue' },
					[`@media (min-width: ${breakpoints.md}px)`]: { color: 'purple' },
					[`@media (min-width: ${breakpoints.lg}px)`]: { color: 'orange' },
				}}
			>
				['red', 'green', 'blue', 'purple', 'orange']
			</p>
			<div>
				<p
					css={{
						'div &': {
							[`@media (min-width: ${breakpoints.xsl}px)`]: { color: 'green' },
							[`@media (min-width: ${breakpoints.sm}px)`]: { color: 'blue' },
							[`@media (min-width: ${breakpoints.md}px)`]: { color: 'purple' },
							[`@media (min-width: ${breakpoints.lg}px)`]: { color: 'orange' },
						},
					}}
				>
					div & ([null, 'green', 'blue', 'purple', 'orange'])
				</p>
			</div>
			<div>
				<p
					css={{
						[`@media (min-width: ${breakpoints.xsl}px)`]: { 'div &': { color: 'green' } },
						[`@media (min-width: ${breakpoints.sm}px)`]: { 'div &': { color: 'blue' } },
						[`@media (min-width: ${breakpoints.md}px)`]: { 'div &': { color: 'purple' } },
						[`@media (min-width: ${breakpoints.lg}px)`]: { 'div &': { color: 'orange' } },
					}}
				>
					div & ([null, 'green', 'blue', 'purple', 'orange'])
				</p>
			</div>
		</GEL>
	);
}

export default Example;
