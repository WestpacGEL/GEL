/** @jsx jsx */
import { useState, useCallback, useEffect, forwardRef, Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import throttle from 'lodash.throttle';
import Error from 'next/error';

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { Gridly, Footer } from '../../components/layout';

import { PageContext, usePageContext } from '../../components/providers/pageContext';
import { AccessibilityTab, CodeTab, DesignTab } from '../../components/pages/single-component';
import PageHeader from '../../components/header/page-header';
import { Head } from '../../components/head';
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
	const { pageTitle } = component;
	const [showGrid, setShowGrid] = useState(false);

	return (
		<Fragment>
			<Head title={`${pageTitle} · Westpac GEL`} />
			<PageContext.Provider value={{ showGrid, setShowGrid }}>
				<PageHeader name={pageTitle} />
				<Tabs component={component} tabName={tabName} />
				<Footer />
			</PageContext.Provider>
		</Fragment>
	);
};

const Tabs = ({ component, tabName }) => {
	const { SPACING, COLORS } = useBrand();
	const [hasScrolled, setHasScrolled] = useState(false);

	const mq = useMediaQuery();
	const router = useRouter();
	const brandName = router.query.b || '';
	const tabMap = ['design', 'accessibility', 'code'];

	useEffect(() => {
		const setTabs = () => {
			const scroll = window.scrollY;

			setHasScrolled(scroll > 156);
		};
		setTabs();

		const scrollHandler = throttle(setTabs, 10);

		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
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
			}),
		},
		TabRow: {
			styles: (styles) => ({
				...styles,
				alignItems: 'flex-end',
				backgroundColor: '#fff',
				position: 'sticky',
				top: 66,
				zIndex: 5,
				boxShadow: hasScrolled && '0 2px 5px rgba(0,0,0,0.3)',
				transition: 'box-shadow 0.2s',
				...mq({
					height: [66, null, 90],
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
					height: [54, null, 66],
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
		<main
			id="content"
			css={{
				backgroundColor: COLORS.background,
			}}
		>
			<Tabcordion
				mode="tabs"
				openTab={tabName ? tabMap.indexOf(tabName) : 0}
				onOpen={onOpen}
				overrides={tabOverrides}
			>
				{tabs}
			</Tabcordion>
		</main>
	);
};

export default ComponentWrapper;
