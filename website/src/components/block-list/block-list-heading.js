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
				alignItems: 'center',
				paddingBottom: SPACING(3),
				borderBottom: `1px solid ${COLORS.neutral}`,
				em: {
					fontStyle: 'normal',
					fontWeight: 'normal',
				},
			}}
			{...rest}
		>
			{children}
			{Icon && <Icon size="medium" aria-hidden="true" css={{ marginLeft: 'auto' }} />}
		</Heading>
	);
};
