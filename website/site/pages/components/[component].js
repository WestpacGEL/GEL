/** @jsx jsx */
import { Fragment, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';

import {
	AccessibilityTab,
	CodeTab,
	DesignTab,
	PageHeader,
} from '../../components/pages/single-component';
import { ALL_COMPONENTS } from '../../../graphql';

const ComponentWrapper = () => {
	const { data, error } = useQuery(ALL_COMPONENTS);
	const router = useRouter();
	const componentParam = router.query.component;
	if (error) return 'error!';
	if (!data) return 'loading...';

	const currentComponent =
		data.allComponents.filter(component => component.name === componentParam)[0] || '';

	return currentComponent ? (
		<Component component={currentComponent} />
	) : (
		'Sorry, no component matching!'
	);
};

const Component = ({ component }) => {
	const { name, version } = component;

	const DataComponent = useMemo(() => {
		return dynamic(
			() =>
				Promise.all([
					import(`@westpac/${name}/examples`),
					import(`@westpac/${name}/CHANGELOG.md`).then(x => x.default),
				])
					.then(modules => ({ children }) => children(modules))
					.catch(error => () => <p>{JSON.stringify(error, null, 4)}</p>),
			{
				loading: () => <p>loading...</p>,
			}
		);
	}, [name]);

	return (
		<Fragment>
			<PageHeader name={name} version={version} />
			<Tabs component={component} dataComponent={DataComponent} />
		</Fragment>
	);
};

const Tabs = ({ component, dataComponent: DataComponent }) => {
	const { SPACING, COLORS } = useBrand();
	const mq = useMediaQuery();
	const tabOverrides = {
		TabItem: {
			styles: (styles, { selected }) =>
				mq({
					...styles,
					backgroundColor: 'white',
					border: 'none',
					margin: 0,
					marginTop: [SPACING(2), SPACING(3)],
					borderRight: `solid 1px ${COLORS.border}`,
					padding: [`${SPACING(2)} ${SPACING(4)}`, `${SPACING(3)} ${SPACING(10)}`],
					borderBottom: `solid 2px ${selected ? COLORS.primary : 'transparent'}`,
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
				<DesignTab description={component.description} doc={component.doc} />
			</Tab>
			<Tab overrides={overrides} text="Accessibility">
				<AccessibilityTab />
			</Tab>
			<Tab overrides={overrides} text="Code">
				<CodeTab dataComponent={DataComponent} />
			</Tab>
		</Tabcordion>
	);
};

export default ComponentWrapper;
