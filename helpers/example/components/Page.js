import { jsx } from '@westpac/core';
import { Container } from '@westpac/grid';
import React from 'react';

import { Article } from './Article';
import { HomeStart } from './HomeStart';

export class Page extends React.Component {
	state = { error: null, info: null };

	componentDidCatch(error, info) {
		this.setState({ error, info });
	}

	render() {
		const { Module, filename, label, slug, location, version, pkgVersion, ...rest } = this.props;
		const { error, info } = this.state;

		if (error) {
			const errorLabel = `Error in ${filename}`;
			console.error(errorLabel, error);

			return (
				<Article>
					<Container>
						<h1>{errorLabel}</h1>
						<h2 css={{ color: '#BF2600' }}>
							<code>{error.message}</code>
						</h2>
						<pre
							css={{
								backgroundColor: '#FFEBE6',
								borderRadius: 4,
								color: '#DE350B',
								paddingBottom: '1em',
							}}
						>
							<code>{info.componentStack}</code>
						</pre>
					</Container>
				</Article>
			);
		}

		if (location.pathname.split('/').length === 2) {
			return <HomeStart packageName={label} pkg={slug} version={pkgVersion} />;
		}

		return (
			<Article>
				<Container css={{ marginBottom: '3rem' }}>
					<h1>
						{label}
						<span
							css={{
								display: 'inline-block',
								fontSize: '1rem',
								fontWeight: 400,
								marginLeft: '1rem',
							}}
						>
							v{version}
						</span>
					</h1>
					<Module.default {...rest} />
				</Container>
			</Article>
		);
	}
}
