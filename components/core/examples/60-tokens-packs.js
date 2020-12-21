/** @jsx jsx */

import { GEL, jsx, useBrand, useFonts } from '@westpac/core';
import { Fragment } from 'react';
import { Code } from './_utils';

function Example({ brand }) {
	const { COLORS, PACKS, SPACING } = useBrand();

	return (
		<GEL brand={brand} css={{ ...useFonts({ path: 'assets/' }) }}>
			<h2>Brand type scale</h2>
			{Array(7)
				.fill()
				.map((_, i) => (
					<Fragment key={i}>
						<span
							css={{
								display: 'block',
								margin: '0 0 1rem',
								...PACKS.typeScale.brandFont[i + 1],
							}}
						>
							{i + 1}
						</span>
						<Code>{JSON.stringify(PACKS.typeScale.brandFont[i + 1], null, 2)}</Code>
					</Fragment>
				))}

			<h2>Body type scale</h2>
			{Array(10)
				.fill()
				.map((_, i) => (
					<Fragment key={i}>
						<span
							css={{
								display: 'block',
								margin: '0 0 1rem',
								...PACKS.typeScale.bodyFont[i + 1],
							}}
						>
							{i + 1}
						</span>
						<Code>{JSON.stringify(PACKS.typeScale.bodyFont[i + 1], null, 2)}</Code>
					</Fragment>
				))}

			<h2>Lead</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam placeat eos culpa.
				Ipsum labore quis vitae at placeat sit vel iure sequi inventore repudiandae quod, corporis
				dicta doloremque excepturi, iusto.
			</p>
			<p css={{ ...PACKS.lead }}>
				The GUI Framework is a front-end development framework designed for multi-brand, accessible,
				responsive, mobile first projects. It provides HTML, CSS, LESS and JavaScript to describe
				how all of the core interface elements should look and behave. The GUI Framework can also be
				used as a point of reference for UX and UI designers. We’re continually refining and
				optimising the framework, adding elements and components as the brand’s UIs evolve.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ea quibusdam fugit ullam
				ducimus minus nesciunt dolores quia, eligendi sed atque alias unde quos deleniti eaque?
				Eveniet obcaecati saepe modi.
			</p>
			<Code>{JSON.stringify(PACKS.lead, null, 2)}</Code>

			<h2>Link</h2>
			<p>
				The GUI Framework is a front-end development framework designed for{' '}
				<a href="#0" css={{ ...PACKS.link }}>
					multi-brand
				</a>
				, accessible, responsive, mobile first projects.
			</p>
			<Code>{JSON.stringify(PACKS.link, null, 2)}</Code>

			<h2>Focus</h2>
			<div
				css={{
					...PACKS.focus,
					boxSizing: 'border-box',
					width: '90%',
					background: COLORS.background,
				}}
			>
				This box has focus styling!
			</div>
			<Code>{JSON.stringify(PACKS.focus, null, 2)}</Code>
		</GEL>
	);
}

export default Example;
