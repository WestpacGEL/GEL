/** @jsx jsx */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { useQuery } from '@apollo/react-hooks';
import { NavigationBlock } from './navigation-block';

export const Navigation = ({ components }) => {
	const { SPACING } = useBrand();

	let { data, error } = useQuery(
		gql`
			query AllSettings {
				allSettings(where: { name: "navigation" }) {
					id
					name
					value
				}
			}
		`,
		{ fetchPolicy: 'cache-and-network' }
	);
	if (error) return <p>There was an error fetching data for the navigation.</p>;
	if (!data || !data.allSettings) return <p>Loading...</p>;
	const navigation = data.allSettings[0] ? JSON.parse(data.allSettings[0].value) : [];

	const renderNavigationItems = items => {
		return items.map(item => {
			const router = useRouter();

			if (item.children) {
				const currentRoute = router.query && router.query.page && router.query.page[0];
				const currentBlock = item.children[0] && item.children[0].path;
				const isCurrentBlock = currentBlock && currentRoute && currentBlock.includes(currentRoute);

				return (
					<NavigationBlock
						isCurrentBlock={isCurrentBlock}
						key={item.title}
						title={item.title}
						tag="li"
					>
						<LinkList>{renderNavigationItems(item.children)}</LinkList>
					</NavigationBlock>
				);
			}
			const currentChildRoute = router.query && router.query.page && router.query.page[1];
			const isCurrentChild = item.path.includes(currentChildRoute);
			return (
				<LinkItem
					isCurrent={isCurrentChild}
					key={item.title + item.path}
					name={item.title}
					as={item.path}
					href={item.path}
				/>
			);
		});
	};

	return (
		<Fragment>
			<Heading
				tag="h2"
				size={6}
				css={{
					paddingLeft: SPACING(3),
					marginTop: SPACING(1),
					marginBottom: SPACING(5),
					color: 'rgba(0, 0, 0, 0.75)',
				}}
			>
				GEL
			</Heading>
			<LinkList>{renderNavigationItems(navigation)}</LinkList>
		</Fragment>
	);
};

const LinkList = props => {
	const { SPACING } = useBrand();
	return (
		<ul
			css={{
				listStyle: 'none',
				paddingLeft: SPACING(3),
				margin: 0,
				'> li a, > div button': {
					fontWeight: 500,
					color: 'rgba(0, 0, 0, 0.75)',
					margin: `${SPACING(3)} 0`,
					padding: 0,
					cursor: 'pointer',
				},
				'ul > li a': {
					fontWeight: 400,
					color: 'rgba(0, 0, 0, 0.55)',
				},
			}}
			{...props}
		/>
	);
};

const LinkItem = ({ isCurrent, name, href, as, tag: Tag = 'li', children }) => {
	const { SPACING, COLORS } = useBrand();
	const brandName = useRouter().query.b || '';
	return (
		<Tag>
			<a
				as={`${as}?b=${brandName}`}
				href={`${href}?b=${brandName}`}
				style={{
					cursor: 'pointer',
					display: 'block',
					textDecoration: 'none',
					margin: `${SPACING(3)} 0`,
					color: isCurrent && COLORS.info,
				}}
			>
				{name}
			</a>
			{children}
		</Tag>
	);
};
