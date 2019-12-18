/* eslint-disable import/no-extraneous-dependencies */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, Fragment } from 'react';
import { gridSize } from '@arch-ui/theme';
import { Card } from '@arch-ui/card';
import { PageTitle, Title } from '@arch-ui/typography';

import { Container, Grid } from '@arch-ui/layout';
import Select from '@arch-ui/select';
import { Button } from '@arch-ui/button';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { DeleteItemModal, useAdminMeta } from '@keystonejs/app-admin-ui/client';
import { LoadingIndicator } from '@arch-ui/loading';

function Package({ item, refetch }) {
  let list = useAdminMeta().getListByKey('Component');
  console.log(useAdminMeta());
  console.log(list);
  let [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <Card css={{ width: 320 }}>
      <Title css={{ marginBottom: gridSize * 2 }}>{item.packageName}</Title>
      <Select
        css={{ marginBottom: gridSize * 2 }}
        placeholder="Select a new package for these docs"
        options={[{ value: '@westpac/new-alert', label: '@westpac/new-alert' }]}
      />
      <Button to={`/components/${item.id}`} css={{ marginRight: gridSize }}>
        View
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
        onDelete={() => {
          setIsDeleteOpen(false);
          refetch();
        }}
        list={list}
        isOpen={isDeleteOpen}
      />
    </Card>
  );
}
function Packages() {
  let { data, error, refetch } = useQuery(gql`
    query AllComponents {
      allComponents {
        _label_
        id
        isOrphan
        packageName
      }
    }
  `);
  if (error) return 'There was an error fetching data';
  if (!data) return <LoadingIndicator />;

  return (
    <Fragment>
      The packages below have been deleted in GEL. You can decide what should happen to the docs
      below.
      <Grid css={{ marginTop: gridSize * 2 }} gap={gridSize * 2}>
        {data.allComponents.map(item => {
          return <Package key={item.id} refetch={refetch} item={item} />;
        })}
      </Grid>
    </Fragment>
  );
}

export default function Index() {
  return (
    <Container>
      <PageTitle>Orphan Packages</PageTitle>
      <Packages />
    </Container>
  );
}
