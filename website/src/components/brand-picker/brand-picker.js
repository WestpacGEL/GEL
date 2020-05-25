/** @jsx jsx */

import { Heading } from '@westpac/heading';
import { jsx } from '@westpac/core';
import { useBrandSwitcher } from '../providers/brand-switcher';
import { useRouter } from 'next/router';
import { Container, Grid, Cell } from '@westpac/grid';
import { BASE_URL } from '../../config.js';

export const BrandPicker = () => {
	const { brands } = useBrandSwitcher();

	return (
		<div css={{ height: '100%' }}>
			<Container
				fluid
				css={{
					backgroundColor: '#C80038',
					margin: 0,
					maxWidth: 'unset',
					display: 'flex',
					alignItems: 'flex-end',
					height: '250px',
					fontSize: '56px',
					paddingBottom: '56px',
					'@media (max-width: 576px)': {
						height: '66px',
						paddingBottom: '20px',
					},
				}}
			>
				<Grid
					columns={12}
					css={{
						maxWidth: '70rem',
						margin: '0 auto',
						width: '100%',
					}}
				>
					<Cell width={12}>
						<h1
							css={{
								margin: '0 !important',
								color: 'white',
								fontSize: '56px !important',
								'@media (max-width: 576px)': {
									fontSize: '34px !important',
								},
							}}
						>
							Brand{' '}
							<i
								css={{ fontWeight: 200, fontFamily: '"guardian","Times New Roman","Times",serif' }}
							>
								picker
							</i>
						</h1>
					</Cell>
				</Grid>
			</Container>
			<Container
				fluid
				css={{
					backgroundColor: '#f4f3f0',
					margin: 0,
					height: '100%',
					maxWidth: 'unset',
					paddingTop: '66px',
					paddingBottom: '18rem',
					'@media (max-width: 576px)': {
						paddingTop: '2rem',
					},
				}}
			>
				<Grid
					columns={12}
					css={{
						maxWidth: '70rem',
						margin: '0 auto',
						width: '100%',
					}}
				>
					<Cell width={[12, 12, 12, 3, 3]}>
						<h1 css={{ fontSize: '42px', lineHeight: 1.2, marginTop: '0 !important' }}>
							Select your brand
						</h1>
						<p css={{ fontSize: '20px', color: 'rgb(45, 55, 62)' }}>
							This selection will determine which GUI you’ll see. Don’t worry, you’ll be able to
							change the brand you’ve selected at any time.
						</p>
					</Cell>
					<BrandCard brand={brands.WBC} />
					<BrandCard brand={brands.STG} />
					<BrandCard brand={brands.BOM} />
					<BrandCard brand={brands.BSA} left={[0, 0, 0, 4, 4]} />
					<BrandCard brand={brands.WBG} />
				</Grid>
			</Container>
		</div>
	);
};

const BrandCard = ({ brand, left }) => {
	const currentPath = useRouter().asPath;
	return (
		<Cell
			left={left && left}
			width={[6, 4, 4, 3, 3]}
			css={{
				boxSizing: 'border-box',
				backgroundColor: 'white',
				position: 'relative',
				padding: '0.5rem',
				':hover': {
					boxShadow: '0px 0px 13px rgba(46,46,46,0.51)',
					transition: 'box-shadow 0.3s ease-in-out',
				},
			}}
		>
			{/* This is not a Next Link as I want the server to re-render and set a cookie */}
			<a
				href={`${currentPath}?b=${brand.BRAND}`}
				css={{ backGroundColor: 'white', textDecoration: 'unset', color: 'rgb(0, 116, 196)' }}
			>
				<img
					css={{ maxWidth: '100%', display: 'block' }}
					src={`${BASE_URL}/images/${brand.BRAND.toLowerCase()}-gui.png`}
					alt={`An abstract brand image for ${brand.name}.`}
				/>
				<span css={{ margin: '0.5rem', marginTop: '1.5rem', display: 'block' }}>{brand.name}</span>
			</a>
		</Cell>
	);
};
