/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Container } from './Grid';

export const PageHero = ({ children, ...props }) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	return (
		<div
			css={mq({
				background: `linear-gradient(180deg, #FFFFFF 24.71%, ${COLORS.background} 100%)`,
				paddingTop: ['3.375rem', '4.125rem'],
			})}
		>
			<Container {...props}>{children}</Container>
		</div>
	);
};
