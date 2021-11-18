/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';
import { SettingsIcon, WatchIcon, EmailIcon } from '@westpac/icon';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, null, 6]}>
					<Selector type="button" name="example-button">
						<Option
							value="1"
							hint="Some supporting hint text can do here"
							secondaryLabel="$10,000.00"
							icon={SettingsIcon}
						>
							Label
						</Option>
						<Option
							value="2"
							hint="Some supporting hint text can do here"
							secondaryLabel="$10,000.00"
							icon={WatchIcon}
						>
							Label
						</Option>
						<Option
							value="3"
							hint="Some supporting hint text can do here"
							secondaryLabel="$10,000.00"
							icon={EmailIcon}
						>
							Label
						</Option>
					</Selector>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
