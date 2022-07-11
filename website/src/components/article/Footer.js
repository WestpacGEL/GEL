/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Container, Grid } from './Grid';
import { Cell } from '@westpac/grid';
import { DotBrandGuidelineLogo, DotFigmaLogo, DotSubscribeLogo } from './logos';
import { brandsMap } from './_utils';

const FooterTitle = (props) => {
	const { TYPE } = useBrand();
	const mq = useMediaQuery();
	return (
		<h3
			css={mq({
				fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
				fontSize: '1rem',
				textTransform: 'uppercase',
				marginTop: 0,
				marginBottom: ['1.875rem', null, '2.625rem', '3.375rem'],
			})}
			{...props}
		/>
	);
};

const FooterList = (props) => {
	return (
		<Grid
			tag="ul"
			rowGap={['0.375rem', '0.75rem', '1.5rem', null, '0.75rem']}
			css={{ listStyle: 'none', padding: 0, margin: 0 }}
			{...props}
		/>
	);
};

const FooterItem = ({ children, ...props }) => {
	return (
		<Cell tag="li" {...props}>
			<a href="#" css={{ display: 'flex', textDecoration: 'none' }}>
				{children}
			</a>
		</Cell>
	);
};

const FooterItemText = (props) => {
	const {
		TYPE,
		GEL: { COLORS },
	} = useBrand();

	return (
		<div
			css={{
				flexGrow: 1,
				display: 'inline-flex',
				alignItems: 'center',
				borderBottom: `1px solid ${COLORS.border}`,
				fontFamily: '"graphik",' + TYPE.bodyFont.fontFamily,
			}}
			{...props}
		/>
	);
};

const LogoCircle = ({ logo: Logo, ...props }) => {
	const mq = useMediaQuery();
	return (
		<Logo
			css={mq({
				marginRight: ['0.75rem', null, null, null, '1.125rem'],
				height: [72, null, null, null, 84],
				width: [72, null, null, null, 84],
			})}
			{...props}
		/>
	);
};

export const Footer = (props) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	const mq = useMediaQuery();
	return (
		<div css={{ backgroundColor: COLORS.background }} {...props}>
			<Container>
				<Grid
					rowGap={[42, 54]}
					css={mq({
						paddingTop: ['3.375rem', '3.75rem', '4.875rem', null, '5.625rem'],
						paddingBottom: ['3.75rem', '4.125rem', '5.25rem', null, '6rem'],
					})}
				>
					<Cell width={[12, null, 8, 7]}>
						<FooterTitle>Design System</FooterTitle>
						<FooterList>
							{Object.entries(brandsMap).map(([key, val]) => (
								<FooterItem key={key} width={[12, 6]}>
									<LogoCircle logo={val.dotLogo} />
									<FooterItemText>{val.name}</FooterItemText>
								</FooterItem>
							))}
						</FooterList>
					</Cell>
					<Cell width={[12, null, 4]} left={[null, null, null, 9]}>
						<FooterTitle>Tools &amp; resources</FooterTitle>
						<FooterList>
							<FooterItem width={[12, 6, 12]}>
								<LogoCircle logo={DotFigmaLogo} />
								<FooterItemText>Figma UI Kits</FooterItemText>
							</FooterItem>
							<FooterItem width={[12, 6, 12]}>
								<LogoCircle logo={DotBrandGuidelineLogo} />
								<FooterItemText>Master Brand Guidelines</FooterItemText>
							</FooterItem>
							<FooterItem width={[12, 6, 12]}>
								<LogoCircle logo={DotSubscribeLogo} />
								<FooterItemText>Subscribe to GEL</FooterItemText>
							</FooterItem>
						</FooterList>
					</Cell>
				</Grid>
			</Container>
		</div>
	);
};
