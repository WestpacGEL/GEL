import React from 'react';
import {
	Footer,
	FooterIcon,
	FooterLogo,
	FooterText,
	Header,
	HeaderLogo,
	Main,
	Sidebar,
	SidebarContent,
	Template,
} from '../src';
import { Container, Grid, Cell } from '@westpac/grid';
import { LogoSmall, LogoSmallRight, LogoLarge } from '@westpac/symbol';
import { PadlockIcon } from '@westpac/icon';

export default () => (
	<Template>
		<Header fixed={[true, false]}>
			<HeaderLogo
				href="#0"
				logo={[<LogoSmall label="" />, <LogoLarge label="" />]}
				srOnlyText="Go to home"
			/>
		</Header>
		<Sidebar>
			<SidebarContent>SidebarContent</SidebarContent>
		</Sidebar>
		<Main>
			<Container>Main</Container>
		</Main>
		<Footer fancy>
			<Grid>
				<Cell width={[null, 9]}>
					<FooterIcon icon={PadlockIcon} />
					<FooterText>
						<p>
							Our site and your transactions are secure. You can read our{' '}
							<a href="#">security information</a>.<br />
							&copy; 2019 Westpac Banking Corporation ABN 33 007 457 141 AFSL and Australian credit
							licence 233714
						</p>
					</FooterText>
				</Cell>
				<Cell width={[null, 3]}>
					<FooterLogo symbol={LogoSmallRight} />
				</Cell>
			</Grid>
		</Footer>
	</Template>
);
