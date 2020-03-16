/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { ArrowRightIcon, CubeIcon, GenericFileIcon } from '@westpac/icon';

import { SlateContent } from './blocks-hub';
import { PageLinks } from './page-links';

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

export const RelatedInformation = () => {
	const { COLORS, SPACING } = useBrand();
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
								<TextBlock title="Iconography">
									<p css={{ marginTop: 0 }}>
										How to use icons, when and when not to use icons.{' '}
										<a href="#" css={{ color: COLORS.primary }}>
											Read about our UI icon library
										</a>
									</p>
								</TextBlock>

								<TextBlock title="Sketch UI Kit">
									<p css={{ marginTop: 0 }}>
										Design assets to help you create high quality consistent digital experiences.{' '}
										<a href="#" css={{ color: COLORS.primary }}>
											Read about the Sketch UI Kit
										</a>
									</p>
								</TextBlock>
							</Cell>
							<Cell width={1} />
							<Cell width={4}>
								<IconTitle icon={CubeIcon}>Components</IconTitle>
								<ul css={{ margin: 0, padding: 0 }}>
									<ComponentLink>Button drop downs</ComponentLink>
									<ComponentLink>Button groups</ComponentLink>
									<ComponentLink>Icons</ComponentLink>
								</ul>
							</Cell>
						</Grid>
					</Cell>
				</Grid>
			</Container>
		</div>
	);
};

const TextBlock = ({ title, children }) => {
	const { SPACING } = useBrand();
	return (
		<div css={{ marginTop: SPACING(4) }}>
			<Heading tag="h4" size={9}>
				{title}
			</Heading>
			{children}
		</div>
	);
};

const ComponentLink = ({ children }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<li
			css={{
				listStyle: 'none',
				padding: `${SPACING(3)} 0`,
				borderBottom: `solid 1px ${COLORS.border}`,
			}}
		>
			<div css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<span>{children}</span>
				<ArrowRightIcon color={COLORS.primary} />
			</div>
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
