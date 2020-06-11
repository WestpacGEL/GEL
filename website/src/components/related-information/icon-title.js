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
			<Heading
				tag="h3"
				size={8}
				overrides={{
					Heading: {
						styles: (styles) => ({ ...styles, fontWeight: 600 }),
					},
				}}
			>
				{children}
			</Heading>
			<Icon size="medium" />
		</div>
	);
};
