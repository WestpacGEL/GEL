/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Heading } from '@westpac/heading';

// ==============================
// Component
// ==============================

export const BlockListHeading = ({ icon: Icon, children, ...rest }) => {
	const { SPACING, COLORS } = useBrand();
	return (
		<Heading
			tag="h3"
			size={8}
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingBottom: SPACING(3),
				borderBottom: `1px solid ${COLORS.neutral}`,
			}}
			{...rest}
		>
			{children}
			{Icon && <Icon size="medium" aria-hidden="true" />}
		</Heading>
	);
};
