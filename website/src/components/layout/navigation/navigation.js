/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { List, Item } from '@westpac/list';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Link from 'next/link';

import { NavigationGroup } from './navigation-group';
import { NavigationItem, StyledItem } from './navigation-item';
import { ROOT_PAGES, BASE_PAGE } from '../../../config';
import BackToGelSvg from './BackToGelSvg';

export const Navigation = ({ items }) => {
	const renderNavigationItems = (items, level = 0) => {
		const router = useRouter();
		const { COLORS } = useBrand();
		const brandName = router.query.b || '';

		return items.map(item => {
			if (item.children) {
				let isCurrentBlock = false;
				item.children.map(i => {
					if (router.asPath.includes(i.path)) {
						isCurrentBlock = true;
					}
				});

				return (
					<NavigationGroup
						key={item.title}
						isBlockOpen={isCurrentBlock}
						title={item.title}
						level={level}
					>
						<List type="unstyled">{renderNavigationItems(item.children, level + 1)}</List>
					</NavigationGroup>
				);
			}

			const page = router.query && router.query.page;

			let isCurrentChild = false;
			// For non-dynamic paths we can check if the pathname matches item.path.
			if (!page) {
				isCurrentChild = router.pathname === item.path;
			}
			// For dynamic routes we check if the page route matches item.path.
			if (page && page[0]) {
				isCurrentChild = `/${page[0]}` === item.path;
			}
			// For dynamic routes with children we check if the combined page route matches item.path.
			if (page && page[1]) {
				isCurrentChild = `/${page.join('/')}` === item.path;
			}

			let href = BASE_PAGE;
			if (item.path.indexOf('://') !== -1 || ROOT_PAGES.indexOf(item.path) !== -1) {
				href = item.path;
			}

			return (
				<NavigationItem key={item.title}>
					<Link as={`${item.path}?b=${brandName}`} href={`${href}?b=${brandName}`} passHref>
						<StyledItem
							tag="a"
							level={level}
							css={{
								color: isCurrentChild && COLORS.primary,
								fontWeight: isCurrentChild && 500,
							}}
						>
							{item.title}
						</StyledItem>
					</Link>
				</NavigationItem>
			);
		});
	};

	return (
		<Fragment>
			<a
				href="https://gel.westpacgroup.com.au/"
				css={{ display: 'block !important', overflow: 'hidden' }}
			>
				<BackToGelSvg />
			</a>
			<List type="unstyled" css={{ paddingBottom: '1.5rem' }}>
				{renderNavigationItems(items)}
			</List>
		</Fragment>
	);
};
