/** @jsx jsx */
import { useState } from 'react';
import { Heading } from '@westpac/heading';
import { jsx } from '@westpac/core';
import { useBrandSwitcher } from '../providers/brand-switcher';

export const BrandPicker = () => {
	const { brands } = useBrandSwitcher();
	const [hovered, setHovered] = useState(false);

	return (
		<div
			css={{
				padding: '100px',
				textAlign: 'center',
				fontFamily:
					'-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif',
			}}
		>
			<h1>Select your default brand</h1>
			<p css={{ fontSize: '20px', color: 'rgb(45, 55, 62)' }}>
				Once you've made this selection you can change it at any time.
			</p>
			<ul
				css={{
					margin: '0 auto',
					padding: '40px 20px',
					maxWidth: '1080px',
					background: '#e7ecee',
					listStyle: 'none',
					display: 'flex',
					flexWrap: 'wrap',
					alignItems: 'center',
				}}
			>
				{Object.entries(brands).map(([brandName, { name }], i) => {
					return (
						<li
							key={i}
							css={{
								flexBasis: '100%',
								'@media min-width(600px)': {
									flexBasis: '100%',
									maxWidth: '15.625rem',
								},
								margin: 10,
								background: 'white',
								position: 'relative',
								':hover': {
									outline: 'solid 1px rgba(0,0,0,0.2)',
								},
								'&::before': {
									content: '""',
									display: 'block',
									position: 'absolute',
									transition: 'background 0.5s',
									background: !hovered || hovered === brandName ? 'transparent' : 'rgba(0,0,0,0.2)',
									width: '100%',
									top: 0,
									left: 0,
									bottom: 0,
									pointerEvents: 'none',
								},
							}}
							onMouseEnter={() => {
								setHovered(brandName);
							}}
							onMouseLeave={() => {
								setHovered(false);
							}}
						>
							{/* This is not a Next Link as I want the server to re-render and set a cookie */}
							<a
								href={`/?b=${brandName}`}
								css={{ textDecoration: 'unset', color: 'rgb(0, 116, 196)' }}
							>
								<img
									css={{ maxWidth: '100%', margin: 0, display: 'block' }}
									src={`/images/${brandName.toLowerCase()}-gui.png`}
									alt={`An abstract brand image for ${name}.`}
								/>
								<span css={{ margin: '20px', display: 'block' }}>{name}</span>
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
