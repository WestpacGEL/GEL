/** @jsx jsx */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { useQuery } from '@apollo/react-hooks';
import { NavigationBlock } from './navigation-block';
import { ColorSwatch } from '../../../../dynamic-blocks/color-swatch';

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

	const renderNavigationItems = items =>
		items.map(item => {
			if (item.children) {
				return (
					<NavigationBlock key={item.title} title={item.title} tag="li">
						<LinkList>{renderNavigationItems(item.children)}</LinkList>
					</NavigationBlock>
				);
			}
			return (
				<LinkItem key={item.title + item.path} name={item.title} as={item.path} href={item.path} />
			);
		});

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

const LinkItem = ({ name, href, as, tag: Tag = 'li', children }) => {
	const { SPACING } = useBrand();
	const brandName = useRouter().query.b || '';
	return (
		<Tag>
			<Link href={`${href}?b=${brandName}`} as={`${as}?b=${brandName}`}>
				<a
					css={{
						cursor: 'pointer',
						display: 'block',
						textDecoration: 'none',
						padding: `${SPACING(3)} 0`,
					}}
				>
					{name}
				</a>
			</Link>
			{children}
		</Tag>
	);
};
