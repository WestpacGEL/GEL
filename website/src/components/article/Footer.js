import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Container, Grid } from './Grid';
import { Cell } from '@westpac/grid';
import { FigmaLogo, PdfIcon, MailIcon } from './logos';
import { brandsMap, DotLogo } from './_utils';

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

const FooterItem = ({ link = '#', children, ...props }) => {
	const {
		GEL: { COLORS },
	} = useBrand();
	return (
		<Cell tag="li" {...props}>
			<a
				href={link}
				css={{
					display: 'flex',
					textDecoration: 'none',
					':hover .dot-logo': {
						transition: 'all 0.4s cubic-bezier(0.13, 0.00, 0.11, 1.00)', // mouse over
						border: `4px solid ${COLORS.icon}60`,
						margin: '-3px',
					},
				}}
			>
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

const FooterLogo = (props) => {
	const mq = useMediaQuery();
	return (
		<span css={mq({ marginRight: ['0.75rem', null, null, null, '1.125rem'] })}>
			<DotLogo
				className="dot-logo"
				css={mq({
					height: [72, null, null, null, 84],
					width: [72, null, null, null, 84],
				})}
				aria-hidden={true}
				{...props}
			/>
		</span>
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
								<FooterItem key={key} link={`/design-system?b=${key}`} width={[12, 6]}>
									<FooterLogo logo={val?.dot?.logo} size={val?.dot?.size?.footer} hover={false} />
									<FooterItemText>{val.name}</FooterItemText>
								</FooterItem>
							))}
						</FooterList>
					</Cell>
					<Cell width={[12, null, 4]} left={[null, null, null, 9]}>
						<FooterTitle>Tools &amp; resources</FooterTitle>
						<FooterList columnGap={[null, null, 12, 24]}>
							<FooterItem width={[12, 6, 12]} link="/articles/figma-libraries">
								<FooterLogo logo={FigmaLogo} hover={false} />
								<FooterItemText>Figma UI Kits</FooterItemText>
							</FooterItem>
							<FooterItem
								link="https://westpacgroup.sharepoint.com/:f:/s/O365-UG-031831-GELOperatingEnvironmenttest/EnwmDFymE-dDtefynPcIwn4BdmYcqLZ2_ia2qdR6_YJcqA?e=rc10CQ"
								width={[12, 6, 12]}
							>
								<FooterLogo logo={PdfIcon} hover={false} />
								<FooterItemText>Master Brand Guidelines</FooterItemText>
							</FooterItem>
							<FooterItem link="mailto:gel@westpac.com.au" width={[12, 6, 12]}>
								<FooterLogo logo={MailIcon} hover={false} />
								<FooterItemText>Contact GEL</FooterItemText>
							</FooterItem>
						</FooterList>
					</Cell>
				</Grid>
			</Container>
		</div>
	);
};
