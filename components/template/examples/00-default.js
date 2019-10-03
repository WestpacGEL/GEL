import React from 'react';
import {
	Template,
	Header,
	HeaderLogo,
	Main,
	Footer,
	FooterIcon,
	FooterText,
	FooterLogo,
} from '../src';
import { Cell, Grid } from '@westpac/grid';
import {
	MultibrandSmallLogo,
	MultibrandSmallRightLogo,
	MultibrandLargeLogo,
} from '@westpac/symbol';
import { PadlockIcon } from '@westpac/icon';

export default () => (
	<Template>
		<Header fixed={[true, false]}>
			<HeaderLogo
				href="#0"
				logo={[<MultibrandSmallLogo label="" />, <MultibrandLargeLogo label="" />]}
				srOnlyText="Go to home"
			/>
		</Header>
		<Main>Main</Main>
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
					<FooterLogo symbol={MultibrandSmallRightLogo} />
				</Cell>
			</Grid>
		</Footer>
	</Template>
);
