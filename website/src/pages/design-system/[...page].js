/** @jsx jsx */
import { Fragment, useState, useCallback, useEffect, forwardRef } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import debounce from 'lodash.debounce';
import Error from 'next/error';

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { Gridly, Footer } from '../../components/layout';

import { PageContext, usePageContext } from '../../components/providers/pageContext';
import { AccessibilityTab, CodeTab, DesignTab } from '../../components/pages/single-component';
import PageHeader from '../../components/header/page-header';
import { ALL_PAGES } from '../../../graphql';

const ComponentWrapper = () => {
	const { data, error } = useQuery(ALL_PAGES);
	const router = useRouter();
	const tabName = router.query.tab;
	const path = router.query.page.join('/');

	if (error) {
		return <Error statusCode={500} />;
	}
	if (!data) return null;
	let currentComponent =
		data.allPages.find((component) => {
			return component.url === `/${path}`;
		}) || '';

	if (currentComponent) {
		return <Component component={currentComponent} tabName={tabName} />;
	} else {
		return <Error statusCode={404} />;
	}
};

const Component = ({ component, tabName }) => {
	const { pageTitle, version } = component;
	const [showGrid, setShowGrid] = useState(false);

	return (
		<PageContext.Provider value={{ showGrid, setShowGrid }}>
			<PageHeader name={pageTitle} version={version} />
			<Tabs component={component} tabName={tabName} />
			<Footer />
		</PageContext.Provider>
	);
};

const Tabs = ({ component, tabName }) => {
	const { SPACING, COLORS } = useBrand();
	const [scrolled, setScrolled] = useState(false);

	const mq = useMediaQuery();
	const router = useRouter();
	const brandName = router.query.b || '';
	const tabMap = ['design', 'accessibility', 'code'];

	useEffect(() => {
		const main = document.querySelector('main') || window;

		const scrollHandler = debounce(() => {
			if (main.scrollTop === 0) {
				setScrolled(false);
			} else if (main.scrollTop >= 162) {
				setScrolled(true);
			}
		}, 10);

		main.addEventListener('scroll', scrollHandler);
		return () => {
			main.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	const onOpen = useCallback(({ idx: tabIdx }) => {
		window.history.pushState(
			null,
			'',
			`${router.asPath.split('?')[0]}?b=${brandName}&tab=${tabMap[tabIdx]}`
		);
	});

	const tabOverrides = {
		Tabcordion: {
			styles: (styles) => ({
				...styles,
				flexGrow: 1,
				backgroundColor: COLORS.background,
			}),
		},
		TabRow: {
			styles: (styles) => ({
				...styles,
				alignItems: 'flex-end',
				backgroundColor: '#fff',
				position: 'sticky',
				top: '66px',
				zIndex: 5,
				boxShadow: scrolled && '0 2px 5px rgba(0,0,0,0.3)',
				transition: 'box-shadow 0.2s ease',
				...mq({
					height: ['66px', null, '90px'],
				})[0],
			}),
		},
		TabButton: {
			styles: (styles, { selected }) =>
				mq({
					...styles,
					flexGrow: [1, null, 0],
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: ['54px', null, '66px'],
					borderRadius: 0,
					backgroundColor: 'white',
					border: 'none',
					margin: 0,
					borderRight: `solid 1px ${COLORS.border}`,
					padding: [0, null, `0 ${SPACING(10)}`],
					boxShadow: selected ? `inset 0 -3px 0 ${COLORS.primary}` : 'none',
					fontWeight: 600,
					color: selected ? COLORS.text : COLORS.muted,

					':last-child': {
						borderRightColor: ['#fff', null, `${COLORS.border}`],
					},
				}),
		},
	};

	const Panel = forwardRef(({ state, children, ...rest }, ref) => {
		const { showGrid } = usePageContext();
		return (
			<div ref={ref} {...rest}>
				<Gridly show={showGrid} />
				{children}
			</div>
		);
	});

	const overrides = {
		Panel: {
			styles: (styles) => ({
				...styles,
				position: 'relative',
				padding: 0,
				margin: '0 auto',
				border: 'none',
			}),
			component: Panel,
		},
	};

	// No tabs
	if (component.hideAccessibilityTab && component.hideCodeTab) {
		return (
			<div
				css={{
					flexGrow: 1,
					backgroundColor: COLORS.background,
				}}
			>
				<DesignTab description={component.description} blocks={component.design} item={component} />
			</div>
		);
	}

	const tabs = [];
	tabs.push(
		<Tab key={'design-tab'} overrides={overrides} text="Design">
			<DesignTab description={component.description} blocks={component.design} item={component} />
		</Tab>
	);
	if (!component.hideAccessibilityTab) {
		tabs.push(
			<Tab key={'accessibility-tab'} overrides={overrides} text="Accessibility">
				<AccessibilityTab blocks={component.accessibility} item={component} />
			</Tab>
		);
	}
	if (!component.hideCodeTab) {
		tabs.push(
			<Tab key={'code-tab'} overrides={overrides} text="Code">
				<CodeTab blocks={component.code} item={component} />
			</Tab>
		);
	}

	return (
		<Tabcordion
			mode="tabs"
			openTab={tabName ? tabMap.indexOf(tabName) : 0}
			onOpen={onOpen}
			overrides={tabOverrides}
		>
			{tabs}
		</Tabcordion>
	);
};

export default ComponentWrapper;
