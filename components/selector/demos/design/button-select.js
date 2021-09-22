/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Selector, Option } from '@westpac/selector';
import { Grid, Cell } from '@westpac/grid';
import { Playground } from '../../../../website/src/components/playground/macro';

const Demo = ({ context, showCode, showDemo }) => {
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Grid>
				<Cell width={[12, null, 6]}>
					<Selector type="button" name="example-button">
						<Option value="1" hint="Some supporting hint text can do here">
							Button select
						</Option>
						<Option value="2" hint="Some supporting hint text can do here">
							Button select
						</Option>
						<Option value="3" hint="Some supporting hint text can do here">
							Button select
						</Option>
					</Selector>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
