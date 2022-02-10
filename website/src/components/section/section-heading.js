/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import { Fragment } from 'react';
import { Heading } from '@westpac/heading';

import { getTypeScaleMargin } from '../../components/body';

// ==============================
// Component
// ==============================

export const SectionHeading = ({ symbol: Symbol, tight = false, children, ...rest }) => {
	const mq = useMediaQuery();
	const { SPACING } = useBrand();

	return (
		<Fragment>
			{Symbol && <Symbol width={60} css={{ marginBottom: SPACING(2) }} />}
			<Heading
				tag="h2"
				size={6}
				css={mq({
					marginBottom: tight ? getTypeScaleMargin(6).bottomTight : getTypeScaleMargin(6).bottom,
				})}
				{...rest}
			>
				{children}
			</Heading>
		</Fragment>
	);
};
