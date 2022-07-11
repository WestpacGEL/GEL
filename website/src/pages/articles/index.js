/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Cell } from '@westpac/grid';

import { ArrowRightIcon } from '@westpac/icon';
import { BASE_URL } from '../../config.js';
import { PageContextProvider } from '../../components/providers/pageContext';
import { Footer as StickyFooter } from '../../components/layout/footer.js';
import { Wrapper, Hero, ActionBar, Footer, Container, Grid } from '../../components/article';

/* 
TO DO
Later
- footer links
    - hook up to correct links
- Action bar
    - hook up to correct links
- Refactor out cards
- GEL wrapper issues at layout level
- fix semantic html
*/

// ============================================================
// Cards
// ============================================================

const CardGrid = ({ children, ...props }) => {
	const mq = useMediaQuery();
	return (
		<Container
			css={mq({
				marginTop: ['1.875rem', '2.25rem', '3rem', '3.375rem', '3.75rem'],
				marginBottom: ['6.4375rem', '6rem', '4.25rem', '6rem', '6.1875rem'],
			})}
			{...props}
		>
			<Grid gap={[24]}>{children}</Grid>
		</Container>
	);
};

const Card = ({ img, ...props }) => {
	const {
		TYPE,
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	return (
		<Cell {...props}>
			<a
				href="#"
				css={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					textDecoration: 'none',
					':hover img': { borderRadius: 200 },
				}}
			>
				<img
					css={{
						flexGrow: 1,
						width: '100%',
						minHeight: '250px',
						objectFit: 'cover',
						transition: 'border-radius 0.2s',
					}}
					src={`${BASE_URL}/images/${img}.png`}
					alt=""
				/>
				<div
					css={mq({
						paddingTop: ['1.5rem', '2.4375rem'],
						paddingLeft: '0.375rem',
						borderRight: `solid ${COLORS.border}`,
						borderRightWidth: [0, 1],
					})}
				>
					<h4
						css={{
							margin: '0 0 0.75rem 0',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							fontSize: '1rem',
							textTransform: 'uppercase',
							lineHeight: 1.12,
						}}
					>
						Title goes here.
					</h4>
					<p
						css={{
							margin: '0 1.5rem 0.75rem 0',
							fontSize: '1rem',
							fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
							lineHeight: 1.5,
						}}
					>
						Some description
					</p>
					<ArrowRightIcon
						color={COLORS.icon}
						css={mq({ display: 'block', marginLeft: 'auto', marginRight: [0, '0.375rem'] })}
					/>
				</div>
			</a>
		</Cell>
	);
};

// ============================================================
// Home
// ============================================================
const Home = () => {
	return (
		<Wrapper>
			<PageContextProvider>
				<div css={{ paddingBottom: '3.0625rem' }}>
					<Hero />
					<ActionBar />
					<CardGrid>
						<Card width={[12, 4]} img="Stream" />
						<Card width={[12, 4]} img="Stream" />
						<Card width={[12, 4]} img="Stream" />
						<Card width={[12, 6]} img="River" />
						<Card width={[12, 6]} img="River" />
						<Card width={[12, 8]} img="Ocean" />
						<Card width={[12, 4]} img="Stream" />
					</CardGrid>
					<Footer />
					<StickyFooter type="article" />
				</div>
			</PageContextProvider>
		</Wrapper>
	);
};

export default Home;
