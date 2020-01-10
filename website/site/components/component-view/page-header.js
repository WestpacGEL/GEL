/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Container } from '@westpac/grid';
import { Heading } from '@westpac/heading';

export const PageHeader = ({ name, version }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<section
			css={{
				background: COLORS.primary,
				color: COLORS.light,
				paddingTop: SPACING(12),
				paddingBottom: SPACING(8),
			}}
		>
			<Container>
				<Heading size={1} css={{ textTransform: 'capitalize' }}>
					{name}
				</Heading>
				<span>Version {version}</span>
			</Container>
		</section>
	);
};
