/** @jsx jsx */
import React from 'react'; // Needed for within Keystone
import { jsx } from '@westpac/core';

const SeparatorComponent = props => {
	return <hr {...props} css={{ border: 'none', borderTop: `solid 1px #eee`, margin: `20px 0` }} />;
};

// Separator
export const Separator = {
	component: SeparatorComponent,
};
