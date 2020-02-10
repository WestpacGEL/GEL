import React, { Fragment } from 'react';
import { Cell, Container, Grid } from '@westpac/grid';
import { Heading } from '@westpac/heading';
import { IntroSection, Separator, BlocksDocs } from './_utils';
import dynamic from 'next/dynamic';
// import Test from '@westpac/a11y/examples/00-VisuallyHidden';
//``import(`@westpac/heading`

const DynamicExample = dynamic(
	() =>
		import(`@westpac/a11y/examples/00-VisuallyHidden`)
			.then(mod => mod)
			.catch(error => () => <p>{JSON.stringify(error, null, 4)}</p>),
	{
		loading: () => <p>Loading...</p>,
		ssr: false,
	}
);
const Example = () => <DynamicExample editor={true} />;

// const Example = useMemo(() => {
// 	return dynamic(
// 		() =>
// 			Promise.all([])
// 				.then(modules => ({ children }) => {
// 					console.log(modules);
// 					return <p>test</p>; //children(modules);
// 				})
// 		{
// 			loading: () => <p>loading...</p>,
// 			ssr: false,
// 		}
// 	);
// }, [name]);

export const CodeTab = ({ blocks }) => {
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
						<BlocksDocs blocks={blocks} />
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
