/** @jsx jsx */

import { jsx, useBrand, useFonts } from '@westpac/core';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ context }) {
	const { TYPE } = useBrand();
	const weights = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

	return (
		<Playground context={context} brand={brand} css={{ ...useFonts({ path: 'assets/' }) }}>
			<Intopia ignore />

			<h2>Type</h2>
			<div
				css={{
					marginBottom: '3rem',
				}}
			>
				<span
					css={{
						display: 'block',
						fontSize: '3rem',
						margin: '1rem 0',
						fontFamily: TYPE.brandFont.fontFamily,
					}}
				>
					Brand font
				</span>

				<ul
					css={{
						listStyle: 'none',
						padding: 0,
						margin: 0,
					}}
				>
					{weights.map((weight, i) => (
						<li
							key={i}
							css={{
								display: 'block',
								fontSize: '2rem',
								...TYPE.brandFont[weight],
							}}
						>
							weight {weight}
						</li>
					))}
				</ul>

				<span
					css={{
						display: 'block',
						fontSize: '3rem',
						margin: '1rem 0',
						fontFamily: TYPE.bodyFont.fontFamily,
					}}
				>
					Body font
				</span>

				<ul
					css={{
						listStyle: 'none',
						padding: 0,
						margin: 0,
					}}
				>
					{weights.map((weight, i) => (
						<li
							key={i}
							css={{
								display: 'block',
								fontSize: '2rem',
								...TYPE.bodyFont[weight],
							}}
						>
							weight {weight}
						</li>
					))}
				</ul>
			</div>
		</Playground>
	);
}

export default Example;
