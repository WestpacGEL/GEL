/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';

// Max width container
const maxWidth = 760;

export const MaxWidthContainer = props => {
	const { SPACING } = useBrand();
	return <div css={{ padding: `${SPACING(4)} 0`, maxWidth: maxWidth }} {...props} />;
};

// Separator
export const Separator = () => {
	const { COLORS, SPACING } = useBrand();
	return (
		<hr
			css={{ border: 'none', borderTop: `solid 1px ${COLORS.border}`, margin: `${SPACING(6)} 0` }}
		/>
	);
};

// Full width row within <Grid> component
export const Row = props => <Cell width={12} {...props} />;
