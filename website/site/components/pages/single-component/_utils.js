/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Cell, Grid } from '@westpac/grid';

// Max width container
const maxWidth = 760;

export const MaxWidthGrid = props => {
	const { SPACING } = useBrand();
	return <Grid css={{ padding: `${SPACING(4)} 0`, maxWidth: maxWidth }} {...props} />;
};

// Full width row within <Grid> component
export const Row = props => <Cell width={12} {...props} />;
