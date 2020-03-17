/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { ArrowRightIcon, CubeIcon, GenericFileIcon } from '@westpac/icon';
import { useQuery } from '@apollo/react-hooks';
import { RELATED_INFORMATION } from '../../../../graphql';
import { SlateContent } from './blocks-hub';

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

export const RelatedInformation = ({ item }) => {
	const { COLORS, SPACING } = useBrand();

	const { categories } = item;
	if (!categories || !categories.length) return null;
	const categoryWhere = `{ categories_some: { id_in: [${categories.map(c => c.id).join(', ')}] } }`;
	let { data, error } = useQuery(RELATED_INFORMATION(categoryWhere), {
		fetchPolicy: 'cache-and-network',
	});
	if (!data) return '';
	return (
		<div
			css={{
				background: 'white',
				paddingTop: SPACING(8),
				paddingBottom: SPACING(12),
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
							<Cell width={5}>
								<IconTitle icon={GenericFileIcon}>Articles</IconTitle>
								<SlateContent content={item.relatedInfo} item={item} />
							</Cell>
							<Cell width={1} />
							<Cell width={4}>
								<IconTitle icon={CubeIcon}>Components</IconTitle>
								<ul css={{ margin: 0, padding: 0 }}>
									{data.allPages
										.filter(d => d.id !== item.id)
										.map(d => {
											return (
												<ComponentLink key={d.id} link={`components/${d.name}`}>
													{d.pageTitle}
												</ComponentLink>
											);
										})}
								</ul>
							</Cell>
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
			<a
				css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
				href={link}
			>
				<span>{children}</span>
				<ArrowRightIcon color={COLORS.primary} />
			</a>
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
