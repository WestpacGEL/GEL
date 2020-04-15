/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { ArrowRightIcon, CubeIcon, GenericFileIcon } from '@westpac/icon';
import { SlateContent } from './blocks-hub';
import Link from 'next/link';

export const BlocksDocs = ({ title, blocks, item }) => {
	const { SPACING } = useBrand();
	return (
		<Container>
			<Grid css={{ marginBottom: SPACING(2) }}>
				<Cell width={10} left={2}>
					<Heading tag="h2" size={5}>
						{title}
					</Heading>
				</Cell>
			</Grid>
			{blocks ? (
				<SlateContent content={blocks} item={item} />
			) : (
				<Grid>
					<Cell width={10} left={2}>
						<p>No documentation specified for this section.</p>
					</Cell>
				</Grid>
			)}
		</Container>
	);
};

const getURL = d => {
	if (d.url) {
		return d.url;
	}
	if (d.packageName) {
		return `/design-system/components/${slugify(resolvedData.packageName).toLowerCase()}`;
	}
	if (d.pageTitle) {
		return `/design-system/${slugify(resolvedData.pageTitle).toLowerCase()}`;
	}
	return '';
};

export const RelatedInformation = ({ item }) => {
	const { SPACING } = useBrand();
	const { relatedPages, relatedInfo } = item;

	return (
		<div
			css={{
				background: 'white',
				paddingTop: SPACING(8),
				paddingBottom: SPACING(12),
				marginBottom: SPACING(3),
			}}
		>
			<Container>
				<Grid>
					<Cell width={10} left={2}>
						<Heading tag="h2" size={5}>
							Related information
						</Heading>
					</Cell>
				</Grid>

				<Grid
					css={{
						marginTop: SPACING(8),
					}}
				>
					<Cell width={10} left={2}>
						<Grid columns={10}>
							{relatedPages && (
								<Cell width={relatedInfo ? 4 : 12}>
									<IconTitle icon={CubeIcon}>Components</IconTitle>
									<ul css={{ margin: 0, padding: 0 }}>
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
							{relatedInfo && data && <Cell width={1} />}
							{relatedInfo && (
								<Cell width={data ? 5 : 10}>
									<IconTitle icon={GenericFileIcon}>Articles</IconTitle>
									<SlateContent
										content={relatedInfo}
										item={item}
										cssOverrides={{ p: { paddingLeft: 0 } }}
									/>
								</Cell>
							)}
							<Cell width={1} />
						</Grid>
					</Cell>
				</Grid>
			</Container>
		</div>
	);
};

const ComponentLink = ({ children, link }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<li
			css={{
				listStyle: 'none',
				padding: `${SPACING(3)} 0`,
				borderBottom: `solid 1px ${COLORS.border}`,
			}}
		>
			<Link href={link}>
				<a
					css={{
						cursor: 'pointer',
						isplay: 'flex',
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
	WBG: COLORS => COLORS.primary,
	STG: COLORS => COLORS.hero,
	BSA: COLORS => `linear-gradient(to right, ${COLORS.hero} 0%, #00468e 50%, #00adbd 100%)`,
	BOM: COLORS => COLORS.hero,
	BTFG: COLORS => COLORS.hero,
};
