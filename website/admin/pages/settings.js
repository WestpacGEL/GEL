/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { PageTitle } from '@arch-ui/typography';

import { useToasts } from 'react-toast-notifications';
import gql from 'graphql-tag';
import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { LoadingIndicator } from '@arch-ui/loading';
import { Container } from '@arch-ui/layout';
import { Button } from '@arch-ui/button';
import { FieldContainer, FieldLabel } from '@arch-ui/fields';
const slugify = require('slugify');
slugify.extend({ _: '-' });

const getURL = (d) => {
	if (d.url) {
		if (d.url.charAt(0) !== '/') {
			return `${BASE_URL}/${d.url}`;
		}
		return `${BASE_URL}${d.url}`;
	}
	if (d.packageName) {
		return `/components/${slugify(resolvedData.packageName).toLowerCase()}`;
	}
	if (d.pageTitle) {
		return `/${slugify(resolvedData.pageTitle).toLowerCase()}`;
	}
	return '';
};

const getInitialPageData = (pages) => {
	if (!pages) return {};

	const components = pages.map((d) => {
		const key = d.pageTitle ? d.pageTitle : d._label_;
		let url = getURL(d);
		return {
			title: key,
			path: url,
		};
	});
	return [
		{
			title: 'Home',
			path: '/',
		},
		{
			title: 'Accessibility',
			path: '/accessibility',
		},
		{
			title: 'Design Tokens',
			path: '/tokens',
		},
		{
			title: 'Downloads',
			path: '/downloads',
		},
		{
			title: 'Components',
			children: components,
		},
	];
};

export default function Index() {
	let { data, error } = useQuery(
		gql`
			query AllSettings {
				allSettings(where: { name: "navigation" }) {
					id
					name
					value
				}
				allPages {
					id
					_label_
					pageTitle
				}
			}
		`,
		{ fetchPolicy: 'cache-and-network' }
	);

	const { addToast } = useToasts();

	let [updateNavigation] = useMutation(gql`
		mutation updateNavigation($id: ID!, $data: String!) {
			updateSetting(id: $id, data: { name: "navigation", value: $data }) {
				id
			}
		}
	`);

	let [createNavigation] = useMutation(gql`
		mutation createNavigation($data: String!) {
			createSetting(data: { name: "navigation", value: $data }) {
				id
			}
		}
	`);

	let [navigation, setNavigation] = useState(false);

	if (error) return <p>There was an error fetching data for the dashboard.</p>;

	if (data) {
		const { allSettings, allPages } = data;
		if (allPages && allSettings && !navigation) {
			if (allSettings[0]) {
				setNavigation(allSettings[0].value);
			} else {
				const initialData = JSON.stringify(getInitialPageData(allPages), null, 2);
				setNavigation(initialData);
			}
		}
	}

	if (!navigation) return <LoadingIndicator />;
	return (
		<Container>
			<PageTitle>Settings</PageTitle>
			<p>The navigation object. It allows us to manage the navigation of the site.</p>
			<FieldContainer>
				<FieldLabel htmlFor={'navigation'} field={{ label: 'Navigation', config: {} }} />
				<textarea
					id={'navigation'}
					css={{
						width: '80%',
						padding: 8,
						fontSize: '1em',
						borderRadius: 4,
						border: '1px solid hsl(200,20%,70%)',
						height: 500,
						resize: 'none',
					}}
					name="navigation"
					value={navigation}
					onChange={(e) => {
						setNavigation(e.target.value);
					}}
				/>
			</FieldContainer>
			<Button
				appearance="primary"
				onClick={async () => {
					try {
						JSON.parse(navigation);
					} catch (e) {
						console.log(e);
						addToast('Invalid JSON.', {
							appearance: 'error',
							autoDismiss: true,
						});
						return null;
					}
					if (data.allSettings[0]) {
						const id = data.allSettings[0].id;
						await updateNavigation({ variables: { id, data: navigation } });
					} else {
						const initialData = JSON.stringify(getInitialPageData(data.allPages), null, 2);
						await createNavigation({
							variables: { data: initialData },
						});
					}
					addToast('Changes saved successfully.', {
						appearance: 'success',
						autoDismiss: true,
					});
				}}
			>
				Save
			</Button>
		</Container>
	);
}
