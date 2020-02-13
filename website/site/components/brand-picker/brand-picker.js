/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@westpac/core';
import { useBrandSwitcher } from '../providers/brand-switcher';
export const BrandPicker = () => {
	const { brands } = useBrandSwitcher();
	const [hovered, setHovered] = useState(false);

	return (
		<div css={{ padding: '100px' }}>
			<h1 css={{ textAlign: 'center' }}>Select your default brand</h1>
			<ul
				css={{
					margin: '0 auto',
					padding: '40px 20px',
					maxWidth: '1160px',
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
								flexBasis: '250px',
								background: 'white',
								position: 'relative',
								margin: '20px',
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
							<a href={`/?b=${brandName}`}>
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
