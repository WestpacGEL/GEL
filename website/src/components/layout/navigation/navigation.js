/** @jsx jsx */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { useQuery } from '@apollo/react-hooks';
import { NavigationBlock } from './navigation-block';

export const Navigation = ({ items }) => {
	const { SPACING } = useBrand();
	console.log('items', items);

	const renderNavigationItems = items => {
		const router = useRouter();
		return items.map(item => {
			if (item.children) {
				let isCurrentBlock;
				item.children.map(i => {
					if (router.asPath.includes(i.path)) {
						isCurrentBlock = true;
					}
				});

				return (
					<NavigationBlock
						isBlockOpen={isCurrentBlock}
						key={item.title}
						title={item.title}
						tag="li"
					>
						<LinkList>{renderNavigationItems(item.children)}</LinkList>
					</NavigationBlock>
				);
			}

			let isCurrentChild = false;
			isCurrentChild = router.asPath.includes(item.path);
			if (item.path === '/' && router.route !== '/') {
				isCurrentChild = false;
			}
			return (
				<LinkItem
					isCurrent={isCurrentChild}
					key={item.title + item.path}
					name={item.title}
					as={item.path}
					item={item}
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
			<LinkList>{renderNavigationItems(items)}</LinkList>
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

const LinkItem = ({ isCurrent, name, href, as, tag: Tag = 'li', children, item }) => {
	const { SPACING, COLORS } = useBrand();
	const brandName = useRouter().query.b || '';
	return (
		<Tag>
			<Link as={`${as}?b=${brandName}`} href={`${item.component}?b=${brandName}`} passHref>
				<a
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
			</Link>

			{children}
		</Tag>
	);
};
