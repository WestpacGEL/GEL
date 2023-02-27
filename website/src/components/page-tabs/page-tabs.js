import { Children, useState, useEffect } from 'react';
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import { PageTabsBtn } from './page-tabs-btn';
import { useRouter } from 'next/router';

export const PageTabs = ({ assistiveText, onActive, children, ...rest }) => {
	const router = useRouter();
	const brandName = router.query.b || '';
	const tabName = router.query.tab;
	const tabMap = ['design', 'accessibility', 'code'];

	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const [activeIndex, setActiveIndex] = useState(tabName ? tabMap.indexOf(tabName) : 0);

	// Scroll to top, or where header collapses in SM+
	const repositionWindowScroll = () => {
		if (!window.matchMedia('(min-width: 768px)').matches) {
			window.scrollTo(0, 0);
		} else if (window.scrollY > 162) {
			window.scrollTo(0, 162);
		}
	};

	// Update URL hash
	const setUrl = (tabIdx) => {
		if (tabMap[tabIdx] !== tabName) {
			// Replace route
			router.replace(
				{
					pathname: router.pathname,
					query: {
						b: brandName,
						tab: tabMap[tabIdx] ? tabMap[tabIdx] : '',
					},
				},
				{
					pathname: router.asPath.split('?')[0],
					query: {
						b: brandName,
						tab: tabMap[tabIdx] ? tabMap[tabIdx] : '',
					},
				},
				{ scroll: false, shallow: true }
			);
		}
	};

	const handleClick = (e, idx) => {
		e.preventDefault();
		repositionWindowScroll();
		setActiveIndex(idx);
		setUrl(idx);
	};

	return (
		<div {...rest}>
			<nav
				aria-label={assistiveText}
				css={
					mq({
						display: 'flex',
						alignItems: 'flex-end',
						backgroundColor: '#fff',
						position: 'sticky',
						top: 66,
						zIndex: 5,
						height: [66, null, 90],
						transition: 'box-shadow 0.2s ease',

						'body.hasScrolledSmall &': {
							boxShadow: ['0 2px 5px rgba(0,0,0,0.3)', null, 'none'],
						},
						'body.hasScrolledLarge &': {
							boxShadow: [null, null, '0 2px 5px rgba(0,0,0,0.3)'],
						},
					})[0]
				}
			>
				<ul
					role="list"
					css={{
						listStyle: 'none',
						paddingLeft: 0,
						margin: 0,
						flex: 1,
						display: 'flex',
					}}
				>
					{Children.map(children, (child, idx) => {
						const active = activeIndex === idx;

						return (
							<li
								css={mq({
									flexGrow: [1, null, 0],
									display: 'flex',
									borderRight: `1px solid ${COLORS.border}`,

									':last-of-type': {
										borderRightWidth: [0, null, '1px'],
									},
								})}
							>
								<PageTabsBtn
									active={active}
									href={`#${child.props.tabId}`}
									onClick={(e) => {
										handleClick(e, idx);
									}}
								>
									{child.props.text}
								</PageTabsBtn>
							</li>
						);
					})}
				</ul>
			</nav>

			{Children.map(children, (child, idx) => {
				const active = activeIndex === idx;
				return (
					<div id={child.props.tabId} css={{ display: !active && 'none' }}>
						{child}
					</div>
				);
			})}
		</div>
	);
};
