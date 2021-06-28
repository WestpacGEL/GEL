/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { Fragment } from 'react';
import {
	AtmIcon,
	EftposIcon,
	PadlockIcon,
	BusinessPersonIcon,
	SecurityIcon,
	VerifiedIcon,
} from '@westpac/icon';
import { Playground } from '../../../../website/src/components/playground/macro';

const StyledCell = (props) => <Cell css={{ justifySelf: 'center' }} {...props} />;

const Demo = ({ context, showCode, showDemo }) => {
	const sizes = [
		{ text: 'Extra small - 12px', size: 'xsmall' },
		{ text: 'Small - 18px', size: 'small' },
		{ text: 'Medium - 24px', size: 'medium' },
		{ text: 'Large - 36px', size: 'large' },
		{ text: 'Extra large - 48px', size: 'xlarge' },
	];
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid
				columns={7}
				columns={'2fr repeat(6, 1fr)'}
				alignContent={'center'}
				overrides={{
					Grid: { styles: (styles) => ({ ...styles, gridAutoRows: '1fr', alignItems: 'center' }) },
				}}
			>
				{sizes.map((s) => (
					<Fragment key={s.size}>
						<Cell>{s.text}</Cell>
						<StyledCell>
							<AtmIcon size={s.size} />
						</StyledCell>
						<StyledCell>
							<EftposIcon size={s.size} />
						</StyledCell>
						<StyledCell>
							<PadlockIcon size={s.size} />
						</StyledCell>
						<StyledCell>
							<BusinessPersonIcon size={s.size} />
						</StyledCell>
						<StyledCell>
							<SecurityIcon size={s.size} />
						</StyledCell>
						<StyledCell>
							<VerifiedIcon size={s.size} />
						</StyledCell>
					</Fragment>
				))}
			</Grid>
		</Playground>
	);
};

export default Demo;
