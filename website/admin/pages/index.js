/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx } from '@emotion/core';
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
import { DeleteItemModal, useAdminMeta } from '@keystonejs/app-admin-ui/client';
import { LoadingIndicator } from '@arch-ui/loading';

function Package({ item, refetch, items }) {
	let adminMeta = useAdminMeta();
	let list = adminMeta.getListByKey('Component');
	let options = list.fields.find(x => x.path === 'packageName').options;
	let [isDeleteOpen, setIsDeleteOpen] = useState(false);
	let [isWorkingOnNewPkgThing, setIsWorkingOnNewPkgThing] = useState(false);
	let [deleteComponent] = useMutation(gql`
		mutation DeleteComponent($id: ID!) {
			deleteComponent(id: $id) {
				id
			}
		}
	`);
	let [changePackageName] = useMutation(gql`
		mutation ChangePackageName($id: ID!, $pkgName: ComponentPackageNameType!) {
			updateComponent(id: $id, data: { packageName: $pkgName }) {
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
							let existingItem = items.find(x => x.packageName === value);
							if (existingItem !== undefined) {
								await deleteComponent({ variables: { id: existingItem.id } });
							}
							await changePackageName({ variables: { pkgName: value, id: item.id } });
							history.push(`${adminMeta.adminPath}/components/${item.id}`);
						}}
					/>
					<Button
						to={`${adminMeta.adminPath}/components/${item.id}`}
						css={{ marginRight: gridSize }}
					>
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
						onDelete={async promise => {
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

function OrphanComponents({ items, refetch }) {
	return (
		<Fragment>
			The packages below have been deleted in GEL. You can decide what should happen to the docs
			below.
			<Grid columns={3} css={{ marginTop: gridSize * 2 }} gap={gridSize * 2}>
				{items.map(item => {
					return <Package items={items} key={item.id} refetch={refetch} item={item} />;
				})}
			</Grid>
		</Fragment>
	);
}

function ComponentsWithoutDocs() {
	let adminMeta = useAdminMeta();
	let list = adminMeta.getListByKey('Component');
	let options = list.fields.find(x => x.path === 'packageName').options;
	let [createComponent] = useMutation(gql`
		mutation CreateComponent($pkgName: ComponentPackageNameType!) {
			createComponent(data: { packageName: $pkgName }) {
				id
			}
		}
	`);
	return (
		<Route>
			{({ history }) => (
				<Grid columns={3} css={{ marginTop: gridSize * 2 }} gap={gridSize * 2}>
					{options.map(({ value }) => {
						return (
							<Card key={value} css={{ width: 320 }}>
								<Title css={{ marginBottom: gridSize * 2 }}>{value}</Title>
								<Button
									onClick={async () => {
										let { data } = await createComponent({ variables: { pkgName: value } });
										history.push(`${adminMeta.adminPath}/components/${data.createComponent.id}`);
									}}
									css={{ marginRight: gridSize }}
								>
									Create
								</Button>
							</Card>
						);
					})}
				</Grid>
			)}
		</Route>
	);
}

function Components({ items }) {
	let adminMeta = useAdminMeta();
	return (
		<Fragment>
			<Grid columns={3} css={{ marginTop: gridSize * 2 }} gap={gridSize * 2}>
				{items.map(item => {
					return (
						<Card key={item.id} css={{ width: 320 }}>
							<Title css={{ marginBottom: gridSize * 2 }}>{item.packageName}</Title>
							<Button
								to={`${adminMeta.adminPath}/components/${item.id}`}
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
			query AllComponents {
				allComponents {
					_label_
					id
					isOrphan
					packageName
				}
			}
		`,
		{ fetchPolicy: 'cache-and-network' }
	);
	if (error) return 'There was an error fetching data';
	if (!data) return <LoadingIndicator />;
	let orphanComponents = data.allComponents.filter(x => x.isOrphan === 'true'); // ... yes, it's a string true
	console.log(data.allComponents);
	return (
		<Container css={{}}>
			<PageTitle>Components</PageTitle>
			<Components items={data.allComponents} />
			{orphanComponents.length ? (
				<Fragment>
					<PageTitle>Orphan Components</PageTitle>
					<OrphanComponents refetch={refetch} items={orphanComponents} />
				</Fragment>
			) : null}
			<PageTitle>Components Without Docs</PageTitle>
			<ComponentsWithoutDocs items={data.allComponents} />
			<div css={{ marginBottom: 320 }} />
		</Container>
	);
}
