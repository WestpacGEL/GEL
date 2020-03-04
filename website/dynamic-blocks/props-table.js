/** @jsx jsx */
import React from 'react'; // Needed for within Keystone
import { jsx } from '@westpac/core';

const Component = props => {
	return <hr {...props} css={{ border: 'none', borderTop: `solid 1px #eee`, margin: `20px 0` }} />;
};

// Separator
export const PropsTable = {
	component: Component,
};
