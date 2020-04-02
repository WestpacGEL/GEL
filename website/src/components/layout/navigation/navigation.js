/** @jsx jsx */
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';
import { NavigationBlock } from './navigation-block';

// root paths that don't need to be dynamic
const PATHS = ['/', '/tokens'];

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
					path={item.path}
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

const LinkItem = ({ isCurrent, name, path, as, tag: Tag = 'li', children }) => {
	const { SPACING, COLORS } = useBrand();
	const brandName = useRouter().query.b || '';
	let href = '[...page]';
	if (path.indexOf('://') !== -1 || PATHS.indexOf(path) !== -1) {
		href = path;
	}
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
