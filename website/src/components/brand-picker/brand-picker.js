/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useBrandSwitcher } from '../providers/brand-switcher';
import { useRouter } from 'next/router';
import { Container, Grid, Cell } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { Section } from '../../components/layout/section';
import { Body } from '../../components/body';
import { BASE_URL } from '../../config.js';
import { findByDisplayValue } from '@testing-library/react';

export const BrandPicker = () => {
	const { brands } = useBrandSwitcher();
	const { PACKS } = useBrand();
	const mq = useMediaQuery();

	return (
		<div css={{ height: '100%' }}>
			<header
				css={mq({
					backgroundColor: '#C80038',
					height: ['66px', null, '294px'],
					paddingBottom: [null, null, '63px'],
					display: 'flex',
					alignItems: ['center', null, 'flex-end'],
					color: 'white',
				})}
			>
				<Container>
					<Heading size={[7, null, 2]} css={mq({})}>
						Brand{' '}
						<em css={{ fontWeight: 200, fontFamily: '"guardian","Times New Roman","Times",serif' }}>
							picker
						</em>
					</Heading>
				</Container>
			</header>
			<Section bgFill>
				<Container>
					<Grid>
						<Cell width={[12, null, null, 3]}>
							<Body>
								<Heading
									tag="h1"
									size={[6, null, 4]}
									css={mq({
										'&&': {
											color: 'unset',
											marginTop: '0',
											marginBottom: ['1.125rem', null, '1.5rem'],
										},
									})}
								>
									Select your brand
								</Heading>
								<p css={{ ...PACKS.typeScale.bodyFont[8] }}>
									This selection will determine which GUI you’ll see. Don’t worry, you’ll be able to
									change the brand you’ve selected at any time.
								</p>
							</Body>
						</Cell>
						<Cell width={[12, null, null, 9]}>
							<Grid
								tag="ul"
								role="list"
								rowGap="24px"
								css={{
									listStyle: 'none',
									paddingLeft: 0,
									margin: 0,
								}}
							>
								<BrandCard brand={brands.WBC} />
								<BrandCard brand={brands.STG} />
								<BrandCard brand={brands.BOM} />
								<BrandCard brand={brands.BSA} />
								<BrandCard brand={brands.WBG} />
							</Grid>
						</Cell>
					</Grid>
				</Container>
			</Section>
		</div>
	);
};

const BrandCard = ({ brand }) => {
	const { PACKS } = useBrand();
	const currentPath = useRouter().asPath;
	return (
		<Cell tag="li" width={[6, 4]}>
			{/* This is not a Next Link as I want the server to re-render and set a cookie */}
			<a
				href={`${currentPath}?b=${brand.BRAND}`}
				css={{
					display: 'block',
					backgroundColor: 'white !important',
					textDecoration: 'unset',
					color: '#1976D2',
					':hover': {
						boxShadow: '0px 0px 13px rgba(46,46,46,0.51)',
						transition: 'box-shadow 0.3s ease-in-out',
					},
				}}
			>
				<img
					css={{ maxWidth: '100%', display: 'block' }}
					src={`${BASE_URL}/images/${brand.BRAND.toLowerCase()}-gui.png`}
					alt=""
				/>
				<Body
					css={{ padding: '0.875rem 0.75rem' }}
					overrides={{
						Body: {
							styles: (styles) => ({
								...styles,
								...PACKS.typeScale.bodyFont[10],
							}),
						},
					}}
				>
					{brand.name}
				</Body>
			</a>
		</Cell>
	);
};
