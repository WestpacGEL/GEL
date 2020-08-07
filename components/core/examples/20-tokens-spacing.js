/** @jsx jsx */

import { GEL, jsx, useBrand } from '@westpac/core';
import { useState } from 'react';

function Example({ brand }) {
	const { COLORS, SPACING } = useBrand();
	const { tints, ...primaryColors } = COLORS;
	const [showMinor, setShowMinor] = useState(true);
	const [count, setCount] = useState(11);

	return (
		<GEL brand={brand}>
			<h2>Spacing</h2>
			<label
				css={{
					display: 'block',
					marginTop: SPACING(2),
				}}
			>
				Show Minor:{' '}
				<input type="checkbox" checked={showMinor} onChange={() => setShowMinor(!showMinor)} />
			</label>
			<label
				css={{
					display: 'block',
					marginTop: SPACING(2),
				}}
			>
				Units:
				<input
					type="number"
					value={count}
					onChange={(e) => setCount(parseInt(e.target.value))}
					css={{
						marginLeft: SPACING(1),
						width: '3em',
					}}
				/>
			</label>

			<ul
				css={{
					listStyle: 'none',
					margin: `${SPACING(5)} 0 0 0`,
					padding: 0,
				}}
			>
				{Array(count)
					.fill()
					.map((_, i) => (
						<li
							key={i}
							css={{
								verticalAlign: 'middle',
								background: i % 2 ? 'transparent' : primaryColors.background,
							}}
						>
							<span
								css={{
									display: 'inline-block',
									minWidth: '1.5em',
									marginLeft: '0.5em',
								}}
							>
								{i}
							</span>
							<div
								css={{
									display: 'inline-block',
									verticalAlign: 'middle',
									marginLeft: '1rem',
								}}
							>
								<div
									css={{
										margin: '0.5rem 0',
										verticalAlign: 'middle',
									}}
								>
									<div
										css={{
											display: 'inline-block',
											width: SPACING(i, 'minor'),
											height: '1rem',
											border: `1px solid ${primaryColors.borderDark}`,
											background: primaryColors.background,
											marginRight: '0.5rem',
											opacity: showMinor ? 1 : 0,
											transition: 'opacity 0.3s ease',
											verticalAlign: 'middle',
										}}
									/>
									<span
										css={{
											verticalAlign: 'middle',
											fontSize: '12px',
										}}
									>
										{SPACING(i, 'minor')} (Minor)
									</span>
								</div>
								<div
									css={{
										margin: '0.5rem 0',
										verticalAlign: 'middle',
									}}
								>
									<div
										css={{
											display: 'inline-block',
											width: SPACING(i),
											height: '1rem',
											border: `1px solid ${primaryColors.borderDark}`,
											background: primaryColors.primary,
											marginRight: '0.5rem',
											verticalAlign: 'middle',
										}}
									/>
									<span
										css={{
											verticalAlign: 'middle',
											fontSize: '12px',
										}}
									>
										{SPACING(i)}
									</span>
								</div>
							</div>
						</li>
					))}
			</ul>
		</GEL>
	);
}

export default Example;
