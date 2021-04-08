/** @jsx jsx */
import { useState, useCallback, useEffect, forwardRef, Fragment } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { PageContext, usePageContext } from '../../components/providers/pageContext';
import { AccessibilityTab, CodeTab, DesignTab } from '../../components/pages/single-component';
import PageHeader from '../../components/header/page-header';
import { Gridly, Footer } from '../../components/layout';
import { Head } from '../../components/head';
import { ALL_PAGES } from '../../../graphql';
import { useScrolled } from '../../components/_utils';

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

	useScrolled();

	return (
		<Fragment>
			<Head title={pageTitle} />
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
	const mq = useMediaQuery();
	const router = useRouter();
	const brandName = router.query.b || '';
	const tabMap = ['design', 'accessibility', 'code'];

	const onOpen = useCallback(
		({ idx: tabIdx }) => {
			if (tabMap[tabIdx] !== tabName) {
				router.replace(
					`${router.pathname}?b=${brandName}${tabMap[tabIdx] ? `&tab=${tabMap[tabIdx]}` : ''}`,
					`${router.asPath.split('?')[0]}?b=${brandName}${
						tabMap[tabIdx] ? `&tab=${tabMap[tabIdx]}` : ''
					}`,
					{ shallow: true }
				);
			}
			window.scrollTo(0, 0);
		},
		[brandName, tabName]
	);

	const tabcordionOverrides = {
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
				transition: 'box-shadow 0.2s ease, boxShadow 0.2s ease',
				'body.hasScrolled &': {
					boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
				},
				...mq({
					height: [66, null, 90],
				})[0],
			}),
		},
		TabBtn: {
			styles: (styles, { selected }) =>
				mq({
					...styles,
					flexGrow: [1, null, 0],
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: [54, null, 66],
					borderRadius: 0,
					border: 0,
					backgroundColor: 'transparent',
					margin: 0,
					borderRight: `solid 1px ${COLORS.border}`,
					padding: [0, null, `0 ${SPACING(10)}`],
					boxShadow: selected ? `inset 0 -3px 0 ${COLORS.primary}` : 'none',
					fontWeight: 600,
					color: selected ? COLORS.text : COLORS.muted,

					':last-child': {
						borderRightColor: ['#fff', null, `${COLORS.border}`],
					},
					':hover': {
						backgroundColor: undefined, //strip
					},
				}),
		},
	};

	const PanelOverride = forwardRef(({ state, children, ...rest }, ref) => {
		const { showGrid } = usePageContext();
		return (
			<div ref={ref} {...rest}>
				<Gridly show={showGrid} />
				{children}
			</div>
		);
	});

	const PanelBodyOverride = ({ state: _, setPanelHeight, ...rest }) => <div {...rest} />;

	const tabOverrides = {
		Panel: {
			component: PanelOverride,
			styles: (styles) => ({
				...styles,
				border: undefined, //strip
				borderWidth: undefined, //strip
			}),
		},
		PanelBody: {
			component: PanelBodyOverride,
			styles: () => null, //remove all styling
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
		<Tab key={'design-tab'} overrides={tabOverrides} text="Design">
			<DesignTab description={component.description} blocks={component.design} item={component} />
		</Tab>
	);
	if (!component.hideAccessibilityTab) {
		tabs.push(
			<Tab key={'accessibility-tab'} overrides={tabOverrides} text="Accessibility">
				<AccessibilityTab blocks={component.accessibility} item={component} />
			</Tab>
		);
	}
	if (!component.hideCodeTab) {
		tabs.push(
			<Tab key={'code-tab'} overrides={tabOverrides} text="Code">
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
				overrides={tabcordionOverrides}
			>
				{tabs}
			</Tabcordion>
		</main>
	);
};

export default ComponentWrapper;
