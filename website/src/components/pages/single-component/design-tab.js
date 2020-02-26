import React, { Fragment } from 'react';

import { BlocksDocs, IntroSection, RelatedInformation } from './_utils';

export const DesignTab = ({ description, blocks }) => {
	return (
		<Fragment>
			<IntroSection
				description={`${description}.
        This is some accessibility tab placeholder text to make the intro section look nicer, until the content is entered in the system.`}
				pageLinks={['Item one', 'Item two', 'Item three', 'Item four']}
			/>
			<BlocksDocs blocks={blocks} />
			<RelatedInformation />
		</Fragment>
	);
};
