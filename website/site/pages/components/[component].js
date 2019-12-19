/** @jsx jsx */
import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { jsx } from '@westpac/core';
import { Heading } from '@westpac/heading';

// import ReactLive from '../../components/react-live';
import ChangelogWrapper from '../../components/changelog';
import { ALL_COMPONENTS, COMPONENTS } from '../../../graphql';

let Component = ({ component }) => {
	let Example = useMemo(() => {
		return dynamic(
			() =>
				import(`@westpac/a11y/examples/00-VisuallyHidden`)
					.then(x => x.default)
					.catch(error => () => <p>{JSON.stringify(error, null, 4)}</p>),
			{
				loading: () => <p>loading...</p>,
			}
		);
	}, [component.packageName]);

	return (
		<div css={{ maxWidth: 700 }}>
			<Heading size={1} css={{ textTransform: 'capitalize' }}>
				{component.packageName}
			</Heading>
			<p>
				This is the intro text for the {component.packageName} component. It will probably come from
				Keystone.
			</p>
			<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
				Code examples
			</Heading>
			<Example editor={true} />
			<Heading tag="h2" size={6} css={{ marginTop: 40, marginBottom: 10 }}>
				Changelog
			</Heading>
			{/* <ChangelogWrapper data={changelog}></ChangelogWrapper> */}
		</div>
	);
};

Component.getInitialProps = async ({ apolloClient, query: { component } }) => {
	try {
		const { data, error } = await apolloClient.query(ALL_COMPONENTS);
		console.log({ c: data.allComponents.find(c => c.packageName === component) });
		return {
			error: error,
			component: data.allComponents.find(c => c.packageName === component),
		};
	} catch (error) {
		// If there was an error, we need to pass it down so the page can handle it.
		console.log('error', error);
		return { error, component };
	}
};

export default Component;
