/** @jsx jsx */
import { useState, Fragment, useRef } from 'react';
import { jsx } from '@westpac/core';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { PageContext } from '../../components/providers/pageContext';
import { PageTabs } from '../../components/page-tabs';
import { AccessibilityTab, CodeTab, DesignTab } from '../../components/pages/single-component';
import PageHeader from '../../components/header/page-header';
import { Gridly, Footer } from '../../components/layout';
import { Head } from '../../components/head';
import { ALL_PAGES } from '../../../graphql';

const ComponentWrapper = () => {
	const { data, error } = useQuery(ALL_PAGES);
	const router = useRouter();
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
		return <Component component={currentComponent} />;
	} else {
		return <Error statusCode={404} />;
	}
};

const Component = ({ component }) => {
	const { pageTitle } = component;
	const [showGrid, setShowGrid] = useState(false);
	const pageHeadingRef = useRef();

	return (
		<Fragment>
			<Head title={pageTitle} />
			<PageContext.Provider value={{ showGrid, setShowGrid, pageHeadingRef }}>
				<PageHeader name={pageTitle} />
				<main id="content" css={{ flexGrow: 1 }}>
					<Gridly show={showGrid} />
					<Page component={component} />
				</main>
				<Footer />
			</PageContext.Provider>
		</Fragment>
	);
};

const Page = ({ component }) => {
	const { pageTitle } = component;

	// No tabs
	if (component.hideAccessibilityTab && component.hideCodeTab) {
		return (
			<div>
				<DesignTab description={component.description} blocks={component.design} item={component} />
			</div>
		);
	}

	const tabs = [];
	tabs.push(
		<DesignTab
			key={'design-tab'}
			description={component.description}
			blocks={component.design}
			item={component}
			text="Design"
			tabId="design"
		/>
	);
	if (!component.hideAccessibilityTab) {
		tabs.push(
			<AccessibilityTab
				key={'accessibility-tab'}
				blocks={component.accessibility}
				item={component}
				text="Accessibility"
				tabId="accessibility"
			/>
		);
	}
	if (!component.hideCodeTab) {
		tabs.push(
			<CodeTab key={'code-tab'} blocks={component.code} item={component} text="Code" tabId="code" />
		);
	}

	return <PageTabs assistiveText={`${pageTitle} topics`}>{tabs}</PageTabs>;
};

export default ComponentWrapper;
