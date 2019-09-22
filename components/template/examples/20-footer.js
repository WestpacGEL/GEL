import React from 'react';
import { Global, useTheme } from '@westpac/core';
import { Footer, FooterIcon, FooterText, FooterLogo } from '../src';
import { Cell, Grid } from '@westpac/grid';
import { MultibrandSmallRightLogo } from '@westpac/symbol';
import { PadlockIcon } from '@westpac/icon';

export default () => {
	const {
		template: { wrapper },
	} = useTheme();

	return (
		<>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: wrapper.backgroundColor,
					},
				}}
			/>

			<h2>Standard</h2>

			<h3>Simple footer</h3>
			<Footer isFancy>
				<Grid>
					<Cell width={[null, 9]}>
						<FooterIcon icon={PadlockIcon} />
						<FooterText>
							<p>
								Our site and your transactions are secure. You can read our{' '}
								<a href="#">security information</a>.<br />
								&copy; 2019 Westpac Banking Corporation ABN 33 007 457 141 AFSL and Australian
								credit licence 233714
							</p>
						</FooterText>
					</Cell>
					<Cell width={[null, 3]}>
						<FooterLogo symbol={MultibrandSmallRightLogo} />
					</Cell>
				</Grid>
			</Footer>
		</>
	);
};
