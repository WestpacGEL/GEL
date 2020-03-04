/** @jsx jsx */
import React, { Fragment } from 'react'; // Needed for within Keystone
import { jsx } from '@westpac/core';

const Component = props => {
	return (
		<Fragment>
			<hr {...props} css={{ border: 'none', borderTop: `solid 1px #eee`, margin: `20px 0` }} />
		</Fragment>
	);
};

// Separator
export const IntroSection = {
	component: Component,
};
