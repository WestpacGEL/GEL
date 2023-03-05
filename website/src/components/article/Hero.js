import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Container, Grid } from './Grid';
import { Cell } from '@westpac/grid';
import { usePageContext } from '../providers/pageContext';
import { GELHeroSvg } from './logos';

export const Hero = (props) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	const { pageHeadingRef } = usePageContext();
	return (
		<div ref={pageHeadingRef} css={{ backgroundColor: COLORS.primary }} {...props}>
			<Container {...props}>
				<Grid rowGap={[0, 0]}>
					<Cell
						width={[11, 9]}
						css={mq({
							marginTop: ['1.875rem', '2.625rem', '3.375rem', '3.75rem', '4.125rem'],
							marginBottom: ['1.5rem', '1.875rem', '2.25rem', '3.375rem'],
						})}
					>
						<GELHeroSvg />
					</Cell>
					<Cell
						top={2}
						left={[2, 3]}
						width={[10, 9]}
						css={mq({ marginBottom: ['2.625rem', '3.375rem', '5.25rem', '5.625rem', '6rem'] })}
					>
						<p
							css={mq({
								fontFamily: '"guardian","Times New Roman","Times",serif',
								fontWeight: 400,
								fontSize: ['1.125rem', null, '1.5rem'],
								fontStyle: 'normal',
								lineHeight: [1.33, null, 1.38],
								WebkitFontSmoothing: 'antialiased',
								color: '#fff',
								margin: 0,
							})}
						>
							The Global Experience Language is our single source of truth, providing everything you
							need to deliver our brand promises and create consistent, coherent customer
							experiences across our entire digital landscape faster, and with less effort.
						</p>
					</Cell>
				</Grid>
			</Container>
		</div>
	);
};
