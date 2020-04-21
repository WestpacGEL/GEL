/** @jsx jsx */
import { Fragment, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { Footer } from '../../components/layout';

import { AccessibilityTab, CodeTab, DesignTab } from '../../components/pages/single-component';
import PageHeader from '../../components/header/page-header';
import { ALL_PAGES } from '../../../graphql';

const ComponentWrapper = () => {
	const { data, error } = useQuery(ALL_PAGES);
	const router = useRouter();
	const tabIndex = router.query.tab;
	const path = router.query.page.join('/');
	if (error) return <Error statusCode={500} />;
	if (!data) return null;
	let currentComponent =
		data.allPages.find(component => {
			console.log({ c: component.url, p: `/${path}` });
			return component.url === `/${path}`;
		}) || '';

	if (currentComponent) {
		return <Component component={currentComponent} tabIndex={tabIndex} />;
	} else {
		return <Error statusCode={404} />;
	}
};

const Component = ({ component, tabIndex }) => {
	const { pageTitle, version } = component;

	return (
		<Fragment>
			<PageHeader name={pageTitle} version={version} />
			<Tabs component={component} tabIndex={tabIndex} />
			<Footer />
		</Fragment>
	);
};

const Tabs = ({ component, tabIndex }) => {
	const { SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();
	const router = useRouter();
	const brandName = router.query.b || '';

	const onOpen = useCallback(({ idx: tabIdx }) => {
		if (tabIdx === tabIndex) return;
		window.history.pushState(
			null,
			'',
			`${router.asPath.split('?')[0]}?b=${brandName}&tab=${tabIdx}`
		);
	});
	const tabOverrides = {
		Tabcordion: {
			styles: styles => ({
				...styles,
				flexGrow: 1,
				backgroundColor: COLORS.background,
			}),
		},
		TabRow: {
			styles: styles => ({
				...styles,
				backgroundColor: '#fff',
				borderBottom: `solid 1px ${COLORS.border}`,
				position: 'sticky',
				top: '65px',
			}),
		},
		TabButton: {
			styles: (styles, { selected }) =>
				mq({
					...styles,
					borderRadius: 0,
					backgroundColor: 'white',
					border: 'none',
					margin: 0,
					marginTop: SPACING(2),
					borderRight: `solid 1px ${COLORS.border}`,
					padding: [`${SPACING(2)} ${SPACING(4)}`, `${SPACING(3)} ${SPACING(10)}`],
					boxShadow: selected ? `inset 0 -2px 0 ${COLORS.primary}` : 'none',
					fontWeight: 600,
					color: selected ? COLORS.text : COLORS.muted,
				}),
		},
	};
	const overrides = {
		Panel: {
			styles: styles => ({
				...styles,
				padding: `${SPACING(4)} 0 0`,
				maxWidth: '60rem',
				margin: '0 auto',
				border: 'none',
			}),
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
		<Tabcordion mode="tabs" openTab={+tabIndex || 0} onOpen={onOpen} overrides={tabOverrides}>
			{tabs}
		</Tabcordion>
	);
};

export default ComponentWrapper;
