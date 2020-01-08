/** @jsx jsx */
import { Fragment, useMemo } from 'react';
import dynamic from 'next/dynamic';

import { jsx, useBrand } from '@westpac/core';
import { Alert } from '@westpac/alert';
import { Container, Grid, Cell } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { ArrowRightIcon } from '@westpac/icon';
import { Item, List } from '@westpac/list';
import { Tab, Tabcordion } from '@westpac/tabcordion';

// import ReactLive from '../../components/react-live';
import { Playground } from '../../components/playground';
import ChangelogWrapper from '../../components/changelog';
import { ALL_COMPONENTS } from '../../../graphql';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

const ComponentWrapper = () => {
	const { data, error } = useQuery(ALL_COMPONENTS);
	const router = useRouter();

	const componentParam = router.query.component;

	if (error) return 'error!';
	if (!data) return 'loading...';

	const currentComponent =
		data.allComponents.filter(component => component.name === componentParam)[0] || '';

	if (!currentComponent) return 'no component matched!';

	return <Component component={currentComponent} />;
};

const Component = ({ component }) => {
	const { COLORS, SPACING, PACKS } = useBrand();
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
		<div>
			<div>
				<section
					css={{
						background: COLORS.primary,
						color: COLORS.light,
						paddingTop: SPACING(12),
						paddingBottom: SPACING(8),
					}}
				>
					<Container>
						<Heading size={1} css={{ textTransform: 'capitalize' }}>
							{name}
						</Heading>
						<span>Version {version}</span>
					</Container>
				</section>
				<Tabcordion>
					<Tab text="Design">
						<Grid css={{ padding: `${SPACING(4)} 0` }}>
							<Cell width={7}>
								<p css={{ ...PACKS.lead, marginTop: 0 }}>{description}</p>
								<p css={{ ...PACKS.lead }}>
									This is some placeholder text to make the intro section look nicer, until the
									content is entered in the system.
								</p>
							</Cell>
							<Cell width={1} />
							<Cell width={4}>
								<PageLinks title="Page content" links={['Item 1', 'Item 2', 'Item 3']} />
							</Cell>
						</Grid>
					</Tab>

					<Tab text="Accessibility">
						<Grid css={{ padding: `${SPACING(4)} 0` }}>
							<Cell width={7}>
								<p css={{ ...PACKS.lead, marginTop: 0 }}>
									This is some accessibility tab placeholder text to make the intro section look
									nicer, until the content is entered in the system.
								</p>
							</Cell>
							<Cell width={1} />
							<Cell width={4}>
								<PageLinks title="Page content" links={['Item 4', 'Item 5', 'Item 6']} />
							</Cell>
						</Grid>
					</Tab>

					<Tab text="Code">
						<Grid css={{ padding: `${SPACING(4)} 0` }}>
							<Cell width={7}>
								<p css={{ ...PACKS.lead, marginTop: 0 }}>
									Developer focused overview text goes here it will need to be at least this long.
								</p>
							</Cell>
							<Cell width={1} />
							<Cell width={4}>
								<PageLinks title="Page content" links={['Item 4', 'Item 5', 'Item 6']} />
							</Cell>
						</Grid>

						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Code examples
						</Heading>
						<p>// TODO: examples</p>
						<DataComponent></DataComponent>

						{/*<Examples examples={examples} name={name} />*/}
						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Changelog
						</Heading>
						<p>// TODO: changelog</p>
						{/*<ChangelogWrapper data={changelog}></ChangelogWrapper>*/}
					</Tab>
				</Tabcordion>
			</div>
		</div>
	);
};

const PageLinks = ({ title, links }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<Fragment>
			<Heading tag="h2" size={6}>
				{title}
			</Heading>

			<hr
				css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(2)} 0` }}
			/>

			<List type="icon" icon={ArrowRightIcon}>
				{links.map((link, index) => (
					<Item key={index}>{link}</Item>
				))}
			</List>
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
