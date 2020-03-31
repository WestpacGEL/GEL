/** @jsx jsx */
import { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Error from 'next/error';

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';

import {
	AccessibilityTab,
	CodeTab,
	DesignTab,
	PageHeader,
} from '../components/pages/single-component';
import { ALL_PAGES } from '../../graphql';

const ComponentWrapper = () => {
	const { data, error } = useQuery(ALL_PAGES);
	const router = useRouter();
	const path = router.query.page.join('/');
	if (error) return 'error!';
	if (!data) return 'loading...';
	let currentComponent =
		data.allPages.find(component => {
			return component.url === `/${path}`;
		}) || '';

	if (currentComponent) {
		return <Component component={currentComponent} />;
	} else {
		return <Error statusCode={404} />;
	}
};

const Component = ({ component }) => {
	const { name, version } = component;
	return (
		<Fragment>
			<PageHeader name={name} version={version} />
			<Tabs component={component} />
		</Fragment>
	);
};

const Tabs = ({ component }) => {
	const { SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();
	const tabOverrides = {
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
				backgroundColor: COLORS.background,
			}),
		},
	};
	return (
		<Tabcordion mode="tabs" overrides={tabOverrides}>
			<Tab overrides={overrides} text="Design">
				<DesignTab description={component.description} blocks={component.design} item={component} />
			</Tab>
			<Tab overrides={overrides} text="Accessibility">
				<AccessibilityTab blocks={component.accessibility} item={component} />
			</Tab>
			<Tab overrides={overrides} text="Code">
				<CodeTab blocks={component.code} item={component} />
			</Tab>
		</Tabcordion>
	);
};

export default ComponentWrapper;
