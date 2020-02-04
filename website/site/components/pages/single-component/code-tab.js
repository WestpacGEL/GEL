import React, { Fragment } from 'react';

import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';

import { IntroSection, Separator } from './_utils';
import { Playground } from '../../playground';

import { Changelog } from '../../changelog';
import { ReactLive } from '../../react-live';

export const CodeTab = ({ dataComponent: DataComponent }) => {
	return (
		<Fragment>
			<IntroSection
				description="Developer focused overview text goes here it will need to be at least this long."
				pageLinks={['Woo', 'Weee', 'Hooaa']}
			/>
			<Separator />

			<Container>
				<Grid>
					<Cell width={10} left={2}>
						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Code examples
						</Heading>
						<p>// TODO: examples</p>
						<DataComponent></DataComponent>
						{/*<Examples examples={examples} name={name} />*/}
					</Cell>
					<Cell width={10} left={2}>
						<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
							Changelog
						</Heading>
						<p>// TODO: changelog</p>
						{/*<Changelog data={changelog}></Changelog>*/}
					</Cell>
				</Grid>
			</Container>
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
