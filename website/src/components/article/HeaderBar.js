/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { usePageContext } from '../providers/pageContext';
import { ArrowLeftIcon } from '@westpac/icon';
import { StickyHeader } from './StickyHeader';
import { GELLogo } from './logos';

export const HeaderBar = (props) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	const { pageHeadingRef } = usePageContext();

	return (
		<StickyHeader>
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
						<span
							css={mq({
								width: [48, 60],
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							})}
						>
							<ArrowLeftIcon color="#fff" assistiveText={null} />
						</span>
						<span
							css={mq({
								borderLeft: '1px solid rgba(255, 255, 255, 0.8)',
								paddingLeft: 18,
								height: '100%',
								display: 'flex',
								alignItems: 'center',
							})}
						>
							<GELLogo width={[45, 60]} height={[18, 24]} white />
						</span>
					</div>
				</a>
			</header>
		</StickyHeader>
	);
};
