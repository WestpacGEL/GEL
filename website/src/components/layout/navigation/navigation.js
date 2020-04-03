/** @jsx jsx */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { NavigationBlock } from './navigation-block';
import ROOT_PAGE_PATHS from '../../../root-pages.json';

export const Navigation = ({ items }) => {
	const { SPACING } = useBrand();

	const renderNavigationItems = items => {
		const router = useRouter();
		return items.map(item => {
			if (item.children) {
				let isCurrentBlock = false;
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

			const page = router.query && router.query.page;

			let isCurrentChild = false;
			// For non-dynamic paths we can check if the pathname matches item.path.
			if (!page) {
				isCurrentChild = router.pathname === item.path;
				console.log('here? 1', router.pathname, item.path, isCurrentChild);
			}
			// For dynamic routes we check if the page route matches item.path.
			if (page && page[0]) {
				isCurrentChild = `/${page[0]}` === item.path;
			}
			// For dynamic routes with children we check if the combined page route matches item.path.
			if (page && page[1]) {
				isCurrentChild = `/${page.join('/')}` === item.path;
			}

			let href = '[...page]';
			if (item.path.indexOf('://') !== -1 || ROOT_PAGE_PATHS.indexOf(item.path) !== -1) {
				href = item.path;
			}

			return (
				<LinkItem
					isCurrent={isCurrentChild}
					key={item.title + item.path}
					name={item.title}
					as={item.path}
					path={href}
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

const LinkItem = ({ isCurrent, name, as, tag: Tag = 'li', children, href }) => {
	const { SPACING, COLORS } = useBrand();
	const brandName = useRouter().query.b || '';
	return (
		<Tag>
			<Link as={`${as}?b=${brandName}`} href={`${href}?b=${brandName}`} passHref>
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
