/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { List } from '@westpac/list';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Link from 'next/link';

import { NavigationItem, StyledItem } from './navigation-item';
import { ROOT_PAGES, BASE_PAGE } from '../../../config';
import { NavigationGroup } from './navigation-group';
import { useSidebar } from '../../providers/sidebar';
import BackToGelSvg from './BackToGelSvg';

// `<List />` uses `<Body />` and provides link styling we don't need
const NavListOverride = (props) => <ul {...props} />;

export const Navigation = ({ items }) => {
	const ref = useRef();
	const { COLORS, SPACING } = useBrand();
	const { isScrolled, setIsScrolled } = useSidebar();

	const handleScroll = () => {
		const scrollTop = ref.current.scrollTop;
		if (!isScrolled && scrollTop > 0) {
			setIsScrolled(true);
		} else if (scrollTop === 0) {
			setIsScrolled(false);
		}
	};

	const renderNavigationItems = (items, level = 0) => {
		const router = useRouter();
		const brandName = router.query.b || '';

		return items.map((item) => {
			if (item.children) {
				let isCurrentBlock = false;
				item.children.map((i) => {
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
						<List
							type="unstyled"
							overrides={{
								List: {
									component: NavListOverride,
								},
							}}
						>
							{renderNavigationItems(item.children, level + 1)}
						</List>
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
			if (page) {
				const regex = new RegExp(`${page.join('/')}$`);
				isCurrentChild = regex.test(item.path);
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
		<nav
			ref={ref}
			onScroll={handleScroll}
			css={{ flex: 1, overflowY: 'scroll', '-webkitOverflowScrolling': 'touch' }}
			role="navigation"
		>
			<a
				href="/"
				css={{ display: 'block !important', overflow: 'hidden', height: 90 }}
				aria-label="Back to GEL"
			>
				<BackToGelSvg />
			</a>
			<List
				type="unstyled"
				css={{ paddingBottom: SPACING(4) }}
				overrides={{
					List: {
						component: NavListOverride,
					},
				}}
			>
				{renderNavigationItems(items)}
			</List>
		</nav>
	);
};
