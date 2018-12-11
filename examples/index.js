/* @jsx jsx */

import React, { Fragment, useEffect } from 'react';
import { Global, css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

import { slugify } from './utils';

export { stripIndent } from 'common-tags';
export { createRange } from './utils';

const GUTTER = 16;

// ==============================
// Docs API
// ==============================

export const Page = ({ children, title }) => {
	useEffect(() => {
		document.title = `${title} - GEL`;
	}, title);

	return (
		<Fragment>
			<Global
				styles={css`
					body {
						-moz-font-feature-settings: 'liga' on;
						-moz-osx-font-smoothing: grayscale;
						-webkit-font-smoothing: antialiased;
						background-color: #fafbfc;
						font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial,
							sans-serif;
						font-style: normal;
						font-weight: 400;
						letter-spacing: 0;
						line-height: 1.3;
						text-rendering: optimizeLegibility;
					}
					code {
						font-family: Monaco, monospace;
						font-size: 0.85em;
					}
					p > code {
						background-color: #ffebe6;
						color: #bf2600;
						border-radius: 3px;
						display: inline-block;
						padding: 1px 3px;
					}
				`}
			/>
			<Container>
				<h1>{title}</h1>
				{children}
			</Container>
		</Fragment>
	);
};

export const Example = ({ children, snippet, title }) => {
	const id = slugify(title);

	return (
		<ExampleWrapper id={id}>
			{title ? (
				<header css={{ padding: `${GUTTER}px ${GUTTER}px 0` }}>
					<H2>
						<Anchor href={`#${id}`}>{title}</Anchor>
					</H2>
				</header>
			) : null}

			<div css={{ padding: GUTTER }}>{children}</div>

			{snippet ? <Snippet>{snippet}</Snippet> : null}
		</ExampleWrapper>
	);
};

// ==============================
// Styled Components
// ==============================

export const Content = styled.div({
	marginBottom: '2em',

	'& p:first-of-type': {
		marginTop: 0,
	},
});

const Container = styled.div({
	marginLeft: 'auto',
	marginRight: 'auto',
	maxWidth: 840,
	paddingLeft: 20,
	paddingRight: 20,
});

const H2 = styled.h2({
	boxShadow: '0 1px 0 rgba(0, 0, 0, 0.1)',
	color: '#7A869A',
	fontSize: 14,
	// fontWeight: 500,
	margin: 0,
	paddingBottom: GUTTER,
	textTransform: 'uppercase',
});

const Anchor = styled.a({
	color: '#7A869A',
	textDecoration: 'none',
	':hover, :focus': { textDecoration: 'underline' },
});

const ExampleWrapper = styled.article({
	backgroundColor: 'white',
	boxShadow: '0 1px 3px 1px rgba(0, 0, 0, 0.1)',
	borderRadius: 4,
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '2em',
});

const Snippet = props => (
	<pre
		css={{
			backgroundColor: '#F4F5F7',
			borderBottomLeftRadius: 4,
			borderBottomRightRadius: 4,
			margin: 0,
			padding: GUTTER,
		}}
	>
		<code {...props} />
	</pre>
);
