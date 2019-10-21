/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';

function Example({ brand }) {
	const TOKENS = useBrand();

	return (
		<GEL brand={brand}>
			<h2>Type</h2>
			<div
				css={{
					...TOKENS.TYPE.files,
					marginBottom: '3rem',
				}}
			>
				<span
					css={{
						display: 'block',
						fontSize: '3rem',
						margin: '1rem 0',
						fontFamily: TOKENS.TYPE.brandFont.fontFamily,
					}}
				>
					Brand front
				</span>

				<ul
					css={{
						listStyle: 'none',
						padding: 0,
						margin: 0,
					}}
				>
					{TOKENS.TYPE.brandFont.weights.map((weight, i) => (
						<li
							key={i}
							css={{
								display: 'block',
								fontSize: '2rem',
								fontFamily: TOKENS.TYPE.brandFont.fontFamily,
								fontWeight: weight,
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
						fontFamily: TOKENS.TYPE.bodyFont.fontFamily,
					}}
				>
					Body front
				</span>

				<ul
					css={{
						listStyle: 'none',
						padding: 0,
						margin: 0,
					}}
				>
					{TOKENS.TYPE.bodyFont.weights.map((weight, i) => (
						<li
							key={i}
							css={{
								display: 'block',
								fontSize: '2rem',
								fontFamily: TOKENS.TYPE.bodyFont.fontFamily,
								fontWeight: weight,
							}}
						>
							weight {weight}
						</li>
					))}
				</ul>
			</div>
		</GEL>
	);
}

export default Example;
