import React, { Fragment } from 'react';

import { Badge } from '@westpac/badge';

import { IntroSection, BlocksDocs } from './_utils';

export const AccessibilityTab = ({ blocks }) => {
	return (
		<Fragment>
			<IntroSection
				description="This is some accessibility tab placeholder text to make the intro section look nicer,
						until the content is entered in the system."
				pageLinks={['Item A', 'Item B', 'Item C']}
			/>
			<BlocksDocs blocks={blocks} />
		</Fragment>
	);
};
