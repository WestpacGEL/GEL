import { jsx, useBrand } from '@westpac/core';
import { Container, Grid } from './Grid';

export const PageContent = ({ document, children, ...props }) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	return (
		<div css={{ background: COLORS.background }}>
			<Container {...props}>
				<Grid rowGap={[0, 0]}>{children}</Grid>
			</Container>
		</div>
	);
};
