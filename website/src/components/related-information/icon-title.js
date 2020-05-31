/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

export const IconTitle = ({ icon: Icon, children }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingBottom: SPACING(2),
				borderBottom: `solid 1px ${COLORS.neutral}`,
			}}
		>
			<Heading tag="h3" size={7} css={{ fontWeight: 500 }}>
				{children}
			</Heading>
			<Icon size="medium" />
		</div>
	);
};
