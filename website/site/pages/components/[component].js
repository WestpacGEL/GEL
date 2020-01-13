/** @jsx jsx */
import { Fragment, useMemo, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { jsx, useBrand } from '@westpac/core';
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
	console.log({ component });
	const { SPACING, PACKS } = useBrand();
	const { id, name, packageName, version, description, author, doc } = component;

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
			<Tabcordion mode="tabs">
				<Tab text="Design">
					<DesignTab description={description} doc={doc} />
				</Tab>
				<Tab text="Accessibility">
					<AccessibilityTab />
				</Tab>
				<Tab text="Code">
					<CodeTab dataComponent={DataComponent} />
				</Tab>
			</Tabcordion>
		</Fragment>
	);
};

export default ComponentWrapper;
