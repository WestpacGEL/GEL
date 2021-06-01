/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import { useState, Fragment } from 'react';
import { gridSize } from '@arch-ui/theme';
import { Card } from '@arch-ui/card';
import { PageTitle, Title } from '@arch-ui/typography';
import { Route } from 'react-router-dom';

import { Container, Grid } from '@arch-ui/layout';
import Select from '@arch-ui/select';
import { Button } from '@arch-ui/button';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { DeleteItemModal, useAdminMeta } from '@keystonejs/app-admin-ui/components';
import { LoadingIndicator } from '@arch-ui/loading';

function Package({ item, refetch, items }) {
	let adminMeta = useAdminMeta();
	let list = adminMeta.getListByKey('Page');
	let options = list.fields.find((x) => x.path === 'packageName').options;
	let [isDeleteOpen, setIsDeleteOpen] = useState(false);
	let [isWorkingOnNewPkgThing, setIsWorkingOnNewPkgThing] = useState(false);
	let [deletePage] = useMutation(gql`
		mutation DeletePage($id: ID!) {
			deletePage(id: $id) {
				id
			}
		}
	`);
	let [changePackageName] = useMutation(gql`
		mutation ChangePackageName($id: ID!, $pkgName: PagePackageNameType!) {
			updatePage(id: $id, data: { packageName: $pkgName }) {
				id
			}
		}
	`);
	return (
		<Route>
			{({ history }) => (
				<Card css={{ width: 320 }}>
					<Title css={{ marginBottom: gridSize * 2 }}>{item.packageName}</Title>
					<Select
						css={{ marginBottom: gridSize * 2 }}
						placeholder="Select a new package for these docs"
						options={options}
						isLoading={isWorkingOnNewPkgThing}
						isDisabled={isWorkingOnNewPkgThing}
						onChange={async ({ value }) => {
							setIsWorkingOnNewPkgThing(true);
							let existingItem = items.find((x) => x.packageName === value);
							if (existingItem !== undefined) {
								await deletePage({ variables: { id: existingItem.id } });
							}
							await changePackageName({ variables: { pkgName: value, id: item.id } });
							history.push(`${adminMeta.adminPath}/pages/${item.id}`);
						}}
					/>
					<Button to={`${adminMeta.adminPath}/pages/${item.id}`} css={{ marginRight: gridSize }}>
						Edit
					</Button>

					<Button
						appearance="danger"
						onClick={() => {
							setIsDeleteOpen(true);
						}}
					>
						Delete
					</Button>
					<DeleteItemModal
						item={item}
						onClose={() => {
							setIsDeleteOpen(false);
						}}
						onDelete={async (promise) => {
							setIsDeleteOpen(false);
							await promise;
							refetch();
						}}
						list={list}
						isOpen={isDeleteOpen}
					/>
				</Card>
			)}
		</Route>
	);
}

function OrphanPages({ items, refetch }) {
	return (
		<Fragment>
			Pages below relate to packages that have been deleted or renamed. Please decide what should
			happen to the pages.
			<Grid
				css={{
					gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
					marginTop: gridSize * 2,
				}}
				gap={gridSize * 2}
			>
				{items.map((item) => {
					return <Package items={items} key={item.id} refetch={refetch} item={item} />;
				})}
			</Grid>
		</Fragment>
	);
}

function PagesWithoutDocs({ items }) {
	let adminMeta = useAdminMeta();
	let list = adminMeta.getListByKey('Page');
	let options = list.fields.find((x) => x.path === 'packageName').options;
	const packagesWithoutDocs = options.filter(
		(o) =>
			!items
				.filter((i) => i.packageName)
				.map((i) => i.packageName)
				.includes(o.value)
	);
	let [createPage] = useMutation(gql`
		mutation CreatePage($pkgName: PagePackageNameType!) {
			createPage(data: { packageName: $pkgName }) {
				id
			}
		}
	`);
	return (
		<Route>
			{({ history }) => (
				<Grid
					css={{
						gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
						marginTop: gridSize * 2,
					}}
					gap={gridSize * 2}
				>
					{packagesWithoutDocs.map(({ value }) => {
						return (
							<Card key={value}>
								<Title css={{ marginBottom: gridSize * 2 }}>{value}</Title>
								<Button
									onClick={async () => {
										let { data } = await createPage({ variables: { pkgName: value } });
										history.push(`${adminMeta.adminPath}/pages/${data.createPage.id}`);
									}}
									css={{ marginRight: gridSize }}
								>
									Create Page
								</Button>
							</Card>
						);
					})}
				</Grid>
			)}
		</Route>
	);
}

function Pages({ items }) {
	let adminMeta = useAdminMeta();
	return (
		<Fragment>
			<Grid
				css={{
					gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
					marginTop: gridSize * 2,
				}}
				gap={gridSize * 2}
			>
				{items.map((item) => {
					return (
						<Card key={item.id}>
							<div css={{ marginBottom: gridSize * 2 }}>
								<Title css={{ marginBottom: 2 }}>{item.pageTitle || item.packageName}</Title>
								<p css={{ fontSize: 'small', marginTop: 0, marginBottom: 0 }}>
									{item.packageName ? `Package: ${item.packageName}` : '\u00a0'}
								</p>
							</div>

							<Button
								to={`${adminMeta.adminPath}/pages/${item.id}`}
								css={{ marginRight: gridSize }}
							>
								Edit
							</Button>
						</Card>
					);
				})}
			</Grid>
		</Fragment>
	);
}

export default function Index() {
	let { data, error, refetch } = useQuery(
		gql`
			query AllPages {
				allPages {
					_label_
					id
					pageTitle
					isOrphaned
					packageName
				}
			}
		`,
		{ fetchPolicy: 'cache-and-network' }
	);
	if (error) return <p>There was an error fetching data for the dashboard.</p>;
	if (!data) return <LoadingIndicator />;
	let orphanPages = data.allPages.filter((x) => x.isOrphaned === 'true'); // ... yes, it's a string true
	return (
		<Container>
			<PageTitle>Pages</PageTitle>
			<Pages items={data.allPages} />
			{orphanPages.length ? (
				<Fragment>
					<PageTitle css={{ marginTop: gridSize * 5, marginBottom: gridSize * 4 }}>
						Orphaned Packages
					</PageTitle>
					<OrphanPages refetch={refetch} items={orphanPages} />
				</Fragment>
			) : null}
			<PageTitle css={{ marginTop: gridSize * 5, marginBottom: gridSize * 4 }}>
				Undocumented Packages
			</PageTitle>
			<PagesWithoutDocs items={data.allPages} />
			<div css={{ marginBottom: 320 }} />
		</Container>
	);
}
