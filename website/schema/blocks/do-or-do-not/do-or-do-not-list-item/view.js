/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as DoOrDoNotList from '../do-or-do-not-list/view';

export let type = 'do-or-do-not-list-item';

export function Node({ attributes, children }) {
  return <li {...attributes}>{children}</li>;
}

export const getSchema = () => ({
  parent: { type: DoOrDoNotList.type },
});
