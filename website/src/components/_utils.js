/** @jsx jsx */

import { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { BASE_URL } from '../config';
import { Container, Grid, Cell } from '@westpac/grid';
import { SlateContent } from './pages/single-component/blocks-hub';

export const BlocksDocs = ({ title, blocks, item }) => {
	const { SPACING } = useBrand();
	return (
		<div>
			{title && (
				<Grid columns={12} css={{ ...blocksContainerStyle, marginBottom: SPACING(2) }}>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
						<Heading tag="h2" size={5}>
							{title}
						</Heading>
					</Cell>
				</Grid>
			)}
			{blocks ? (
				<Fragment>
					<SlateContent content={blocks} item={item} />
				</Fragment>
			) : (
				<Container css={blocksContainerStyle}>
					<Grid columns={12}>
						<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
							<p>No documentation specified for this section.</p>
						</Cell>
					</Grid>
				</Container>
			)}
		</div>
	);
};

export const getURL = (d) => {
	if (d.url) {
		if (d.url.charAt(0) !== '/') {
			return `${BASE_URL}/${d.url}`;
		}
		return `${BASE_URL}${d.url}`;
	}
	if (d.packageName) {
		return `${BASE_URL}/components/${slugify(resolvedData.packageName).toLowerCase()}`;
	}
	if (d.pageTitle) {
		return `${BASE_URL}/${slugify(resolvedData.pageTitle).toLowerCase()}`;
	}
	return '';
};

export const brandHeaderStyling = {
	WBC: (COLORS) => ({
		background: COLORS.primary,
		color: '#fff',
	}),
	WBG: (COLORS) => ({
		background: COLORS.hero,
		color: '#fff',
	}),
	STG: (COLORS) => ({
		background: COLORS.hero,
		color: COLORS.text,
	}),
	BSA: (COLORS) => ({
		background: `linear-gradient(to right, ${COLORS.hero} 0%, #00468e 50%, #00adbd 100%)`,
		color: '#fff',
	}),
	BOM: (COLORS) => ({
		background: COLORS.hero,
		color: '#fff',
	}),
	BTFG: (COLORS) => ({
		background: COLORS.hero,
		color: '#fff',
	}),
};

export const brandIconHighlightColors = {
	WBC: (COLORS) => COLORS.primary,
	WBG: (COLORS) => COLORS.primary,
	STG: (COLORS) => COLORS.hero,
	BSA: () => '#00adbd',
	BOM: (COLORS) => COLORS.hero,
	BTFG: () => '#00afd7',
};

export const gridlyIconColors = {
	WBC: '#b6000b',
	WBG: '#808990',
	STG: '#a1d263',
	BSA: 'rgba(255, 255, 255, 0.3)',
	BOM: 'rgba(255, 255, 255, 0.3)',
	BTFG: '#669ec3',
};
export const blocksGridStyle = {
	maxWidth: '60rem',
	margin: '0 auto',
	width: '100%',
};
export const blocksContainerStyle = {
	margin: '30px auto',
	'@media (max-width: 768px)': {
		margin: '18px 0',
	},
};
