/** @jsx jsx */

import { jsx } from '@westpac/core';

const Group = ({ state, ...rest }) => <li {...rest} />;

export const defaultGroupRoot = { component: Group, styles: () => ({}), attributes: () => null };
