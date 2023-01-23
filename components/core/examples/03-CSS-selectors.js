/** @jsx jsx */

import { GEL, jsx, useMediaQuery, Global } from '@westpac/core';

function Example({ brand }) {
	const mq = useMediaQuery();
	const {
		LAYOUT: { breakpoints },
	} = brand;

	return (
		<GEL brand={brand}>
			<h2>Global styles</h2>
			<Global
				styles={{
					'html, body': { content: '"Test \'html, body\'"' },
					html: { content: '"Test \'html\'"' },
					body: { content: '"Test \'body\'"' },
				}}
			/>
			<p>
				html, body: <em>Check DOM for html and body styling</em>
			</p>

			<h2>Standard styling</h2>
			<p css={{ color: 'green' }}>This is green</p>

			<hr />

			<h2>Child selectors</h2>
			<p
				css={{
					color: 'black',
					span: {
						color: 'green',
					},
				}}
			>
				span: This is black, <span>and this is green</span>
			</p>
			<p
				css={{
					color: 'black',
					em: {
						color: 'black',
					},
					'span, em': {
						color: 'green',
					},
				}}
			>
				span, em: This is black, <span>this is green</span>,{' '}
				<span>
					<em>and this is green</em>
				</span>
			</p>

			<hr />

			<h2>Element selectors</h2>
			<p
				css={{
					color: 'black',
					'p&': {
						color: 'green',
					},
				}}
			>
				p&: This is green
			</p>
			<p
				css={{
					'&, p&': {
						color: 'green',
						':hover': { color: 'pink' },
					},
				}}
			>
				&, p&: This is green (hover pink)
			</p>

			<hr />

			<h2>Pseudo-class selectors</h2>
			<span
				css={{
					color: 'black',
					'*:not(p)': {
						color: 'green',
					},
				}}
			>
				*:not(p): This is black, <span>and this is green</span>
			</span>

			<hr />

			<h2>Stacked classes</h2>
			<p css={{ '&': { color: 'green' } }}>&: This is green</p>
			<p css={{ '&&': { color: 'green' } }}>&&: This is green</p>
			<p css={{ '&&&': { color: 'green' } }}>&&&: This is green</p>
			<p css={{ '&&&&': { color: 'green' } }}>&&&&: This is green</p>

			<hr />

			<h2>Combinator selectors</h2>

			<h3>Descendant selector (space)</h3>
			<div>
				<p css={{ 'div &': { color: 'green' } }}>div &: This is green</p>
			</div>
			<div className="parentClass">
				<p css={{ '.parentClass &': { color: 'green' } }}>.parentClass &: This is green</p>
			</div>

			<h3>Child selector (&gt;)</h3>
			<div css={{ 'p > span': { color: 'green' } }}>
				<p>
					<span>p &gt; span: This is green</span>
				</p>
			</div>
			<div>
				<p css={{ 'div > &': { color: 'green' } }}>div &gt; &: This is green</p>
			</div>
			<div css={{ '& > &': { color: 'green' } }}>
				<p css={{ '& > &': { color: 'green' } }}>& &gt; &: This is green</p>
			</div>

			<h3>Adjacent sibling selector (+)</h3>
			<p css={{ '& + &': { color: 'green' } }}>& + &: This is not green</p>
			<p css={{ '& + &': { color: 'green' } }}>& + &: This is green</p>
			<div>&lt;div&gt;: This is not green</div>
			<p css={{ '& + &': { color: 'green' } }}>& + &: This is not green</p>

			<h3>General sibling selector (~)</h3>
			<p css={{ '& ~ &': { color: 'green' } }}>& ~ &: This is not green</p>
			<p css={{ '& ~ &': { color: 'green' } }}>& ~ &: This is green</p>
			<div>&lt;div&gt;: This is not green</div>
			<p css={{ '& ~ &': { color: 'green' } }}>& ~ &: This is green</p>

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
			<p
				css={mq({
					padding: [10, 20],
					'p + &': { color: [null, 'green', 'blue', 'purple', 'orange'] },
				})}
			>
				[10, 20], p + &: [null, 'green', 'blue', 'purple', 'orange']
			</p>

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
					div &: [null, 'green', 'blue', 'purple', 'orange']
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
					div &: [null, 'green', 'blue', 'purple', 'orange']
				</p>
			</div>
		</GEL>
	);
}

export default Example;
