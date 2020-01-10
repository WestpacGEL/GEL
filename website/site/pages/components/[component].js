/** @jsx jsx */
import { Fragment, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { Alert } from '@westpac/alert';
import { jsx, useBrand } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';

// import ReactLive from '../../components/react-live';
import { AccessibilityTab, CodeTab, DesignTab, PageHeader } from '../../components/component-view';
import { Playground } from '../../components/playground';
import ChangelogWrapper from '../../components/changelog';
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
	const { SPACING, PACKS } = useBrand();
	const { id, name, packageName, version, description, author } = component;

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
					<DesignTab description={description} />
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

// ==============================
// Examples
// ==============================

const Examples = ({ examples, name }) => {
	// Bail out if there are no examples in the snippets folder
	if (!Object.keys(examples).length > 0 || Object.keys(examples)[0] === 'default') {
		return (
			<Alert look="warning">
				No live code examples for this component. They can be added in{' '}
				<code>
					@westpac/{name}
					/website/snippets
				</code>
				.
			</Alert>
		);
	}

	// If we have examples, display each group (file) in a Tab
	return (
		<Tabcordion mode="tabs" appearance="soft">
			{Object.entries(examples).map(([name, snippets]) => (
				<Tab key={name} label={name.charAt(0).toUpperCase() + name.slice(1).replace('_', ' ')}>
					<ExamplesGroup key={name} snippets={snippets} />
				</Tab>
			))}
		</Tabcordion>
	);
};

const Nest = () => {
	return <p>Hello</p>;
};

const Test = () => {
	return (
		<p>
			<Nest />
		</p>
	);
};

const myTest = elm => {
	const c = elm.props.children;
	console.log(React.Children.count(c));
	console.log(React.Children.toArray(c));
};

const ExamplesGroup = ({ snippets }) => {
	return Object.entries(snippets).map(([name, code]) => {
		if (name !== 'scope') {
			return (
				<Playground scope={{ Test }}>
					<Test prop="string" />
				</Playground>
			);
			//<Example key={name} name={name} code={code} scope={snippets.scope} />;
		}
	});
};

// const Example = ({ code, scope }) => <ReactLive code={code} scope={scope}></ReactLive>;

export default ComponentWrapper;
