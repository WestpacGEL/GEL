/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useRouter } from 'next/router';
import { Heading } from '@westpac/heading';
import { ArrowRightIcon, CubeIcon, GenericFileIcon } from '@westpac/icon';
import { BASE_URL, BASE_PAGE } from '../config';
import { Container, Grid, Cell } from '@westpac/grid';
import { SlateContent, TextOnlySlateContent } from './pages/single-component/blocks-hub';
import Link from 'next/link';

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
				<SlateContent content={blocks} item={item} />
			) : (
				<Container css={blocksContainerStyle}>
					<Grid columns={12} css={blocksGridStyle}>
						<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
							<p>No documentation specified for this section.</p>
						</Cell>
					</Grid>
				</Container>
			)}
		</div>
	);
};

const getURL = d => {
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

export const RelatedInformation = ({ item }) => {
	const { SPACING } = useBrand();
	const { relatedPages, relatedInfo } = item;
	const mq = useMediaQuery();

	return (
		<div
			css={{
				background: 'white',
				paddingTop: SPACING(8),
				paddingBottom: SPACING(12),
				marginBottom: SPACING(3),
			}}
		>
			<Container css={blocksContainerStyle}>
				<Grid css={blocksGridStyle} columns={12}>
					<Cell width={[12, 12, 12, 10, 10]} left={[1, 1, 1, 2, 2]}>
						<Heading tag="h2" size={5}>
							Related information
						</Heading>
					</Cell>
				</Grid>

				<Grid
					columns={12}
					css={mq({
						...blocksGridStyle,
						marginTop: ['1.875rem', '1.875rem', '5.625rem'],
					})}
				>
					{relatedPages && (
						<Cell
							width={[12, 12, relatedInfo ? 4 : 10, relatedInfo ? 4 : 10, relatedInfo ? 4 : 10]}
							left={[1, 1, 2, 2, 2]}
						>
							<IconTitle icon={CubeIcon}>Components</IconTitle>
							<ul css={{ marginBottom: SPACING(4), padding: 0 }}>
								{relatedPages.map(d => {
									return (
										<ComponentLink key={d.id} link={getURL(d)}>
											{d.pageTitle}
										</ComponentLink>
									);
								})}
							</ul>
						</Cell>
					)}
					{relatedInfo && (
						<Cell
							width={[12, 12, relatedInfo ? 5 : 10, relatedInfo ? 5 : 10, relatedInfo ? 5 : 10]}
							left={[1, 1, relatedInfo ? 7 : 2, relatedInfo ? 7 : 2, relatedInfo ? 7 : 2]}
						>
							<IconTitle icon={GenericFileIcon}>Articles</IconTitle>
							<TextOnlySlateContent
								content={relatedInfo}
								item={item}
								cssOverrides={{ p: { paddingLeft: 0 } }}
							/>
						</Cell>
					)}
				</Grid>
			</Container>
		</div>
	);
};

const ComponentLink = ({ children, link }) => {
	const { COLORS, SPACING } = useBrand();
	const brandName = useRouter().query.b || '';
	return (
		<li
			css={{
				listStyle: 'none',
				padding: `${SPACING(3)} 0`,
				borderBottom: `solid 1px ${COLORS.border}`,
			}}
		>
			<Link href={`${BASE_PAGE}?b=${brandName}`} as={link}>
				<a
					css={{
						cursor: 'pointer',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<span>{children}</span>
					<ArrowRightIcon color={COLORS.primary} />
				</a>
			</Link>
		</li>
	);
};

const IconTitle = ({ icon: Icon, children }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingBottom: SPACING(2),
				borderBottom: `solid 1px ${COLORS.neutral}`,
			}}
		>
			<Heading tag="h3" size={6}>
				{children}
			</Heading>
			<Icon size="small" />
		</div>
	);
};

export const brandHeaderColors = {
	WBC: COLORS => COLORS.primary,
	WBG: COLORS => COLORS.hero,
	STG: COLORS => COLORS.hero,
	BSA: COLORS => `linear-gradient(to right, ${COLORS.hero} 0%, #00468e 50%, #00adbd 100%)`,
	BOM: COLORS => COLORS.hero,
	BTFG: COLORS => COLORS.hero,
};

export const brandIconHighlightColors = {
	WBC: COLORS => COLORS.primary,
	WBG: COLORS => COLORS.primary,
	STG: COLORS => COLORS.hero,
	BSA: () => '#00adbd',
	BOM: COLORS => COLORS.hero,
	BTFG: () => '#00afd7',
};

export const blocksGridStyle = {
	maxWidth: '60rem',
	margin: '0 auto',
	width: '100%',
};
export const blocksContainerStyle = {
	margin: 0,
	maxWidth: 'unset',
};
