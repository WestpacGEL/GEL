/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Heading } from '@westpac/heading';

import { MaxWidthContainer, Row } from './_utils';
import { Changelog } from '../../changelog';
import { PageLinks } from './page-links';
import { Playground } from '../../playground';
// import { ReactLive } from '../../components/react-live';

export const CodeTab = ({ dataComponent: DataComponent }) => {
	const { SPACING, PACKS } = useBrand();
	return (
		<MaxWidthContainer>
			<Grid>
				<Cell width={7}>
					<p css={{ ...PACKS.lead, marginTop: 0 }}>
						Developer focused overview text goes here it will need to be at least this long.
					</p>
				</Cell>
				<Cell width={1} />
				<Cell width={4}>
					<PageLinks title="Page content" links={['Item 4', 'Item 5', 'Item 6']} />
				</Cell>

				<Row>
					<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
						Code examples
					</Heading>
					<p>// TODO: examples</p>
					<DataComponent></DataComponent>

					{/*<Examples examples={examples} name={name} />*/}
				</Row>

				<Row>
					<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
						Changelog
					</Heading>
					<p>// TODO: changelog</p>
					{/*<Changelog data={changelog}></Changelog>*/}
				</Row>
			</Grid>
		</MaxWidthContainer>
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
