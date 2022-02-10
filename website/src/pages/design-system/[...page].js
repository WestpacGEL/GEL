/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@westpac/core';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { PageContextProvider } from '../../components/providers/pageContext';
import { PageTabs } from '../../components/page-tabs';
import { AccessibilityTab, CodeTab, DesignTab } from '../../components/pages/single-component';
import PageHeader from '../../components/header/page-header';
import { Gridly, Footer } from '../../components/layout';
import { Head } from '../../components/head';
import { ALL_PAGES, ALL_DRAFT_PAGES } from '../../../graphql';

const ComponentWrapper = () => {
	const router = useRouter();

	const { data, error } = useQuery(router.query.draft ? ALL_DRAFT_PAGES : ALL_PAGES);
	const path = router.query.page.join('/');

	if (error) {
		return <Error statusCode={500} />;
	}
	if (!data) return null;
	let currentComponent =
		data.pages.find((component) => {
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

	return (
		<Fragment>
			<Head title={pageTitle} />
			<PageContextProvider>
				<PageHeader name={pageTitle} />
				<main id="content" tabIndex="-1" css={{ flexGrow: 1 }}>
					<Page component={component} />
				</main>
				<Footer />
			</PageContextProvider>
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
