import { Fragment } from 'react';
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { BASE_URL } from '../config';
import { Container, Grid, Cell } from '@westpac/grid';
import { SlateContent } from './pages/single-component/blocks-hub';

export const pluralize = (str, length, plural = '') => {
	return length === 1 ? str : `${plural ? plural : `${str}s`}`;
};

export const BlocksDocs = ({ title, blocks, item }) => {
	const { SPACING } = useBrand();
	return (
		<Fragment>
			{title && (
				<Grid css={{ ...blocksContainerStyle, marginBottom: SPACING(2) }}>
					<Cell width={[12, null, null, 10]} left={[1, null, null, 2]}>
						<Heading tag="h2" size={5}>
							{title}
						</Heading>
					</Cell>
				</Grid>
			)}
			{blocks ? (
				<SlateContent content={blocks} item={item} />
			) : (
				<Container css={blocksContainerStyle}>
					<Grid>
						<Cell width={[12, null, null, 10]} left={[1, null, null, 2]}>
							<p>No documentation specified for this section.</p>
						</Cell>
					</Grid>
				</Container>
			)}
		</Fragment>
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

export const antialiasingStyling = {
	WebkitFontSmoothing: 'antialiased',
	MozOsxFontSmoothing: 'grayscale',
};

export const brandHeaderStyling = {
	WBC: (COLORS) => ({
		background: COLORS.primary,
		color: '#fff',
		...antialiasingStyling,
	}),
	WBG: (COLORS) => ({
		background: COLORS.hero,
		color: '#fff',
		...antialiasingStyling,
	}),
	STG: (COLORS) => ({
		background: COLORS.hero,
		color: '#fff',
		...antialiasingStyling,
	}),
	BSA: (COLORS) => ({
		background: `linear-gradient(to right, ${COLORS.hero} 0%, #00468e 50%, #00adbd 100%)`,
		color: '#fff',
		...antialiasingStyling,
	}),
	BOM: (COLORS) => ({
		background: COLORS.hero,
		color: '#fff',
		...antialiasingStyling,
	}),
	BTFG: (COLORS) => ({
		background: COLORS.hero,
		color: '#fff',
		...antialiasingStyling,
	}),
	RAMS: (COLORS) => ({
		background: COLORS.primary,
		color: '#fff',
		...antialiasingStyling,
	}),
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
