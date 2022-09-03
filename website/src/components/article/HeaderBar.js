/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { usePageContext } from '../providers/pageContext';
import { ArrowLeftIcon } from '@westpac/icon';
import { GELLogo } from './logos';

export const HeaderBar = (props) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	const { pageHeadingRef } = usePageContext();

	return (
		<header
			ref={pageHeadingRef}
			css={mq({
				height: [54, 66],
				backgroundColor: COLORS.primary,
				display: 'flex',
				alignItems: 'flex-end',
			})}
			{...props}
		>
			<a href="/articles">
				<div css={mq({ height: [42, 54], display: 'flex', alignItems: 'center' })}>
					<ArrowLeftIcon color="#fff" css={mq({ marginLeft: ['1.25rem'] })} />
					<GELLogo
						white
						css={mq({
							height: '100%',
							borderLeft: '1px solid #fff',
							paddingLeft: 18,
							marginLeft: [20, 25],
						})}
					/>
				</div>
			</a>
		</header>
	);
};
