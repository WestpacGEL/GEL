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
					<Selector type="radio" name="example-radio-simple" defaultValue={['2']}>
						<Option value="1">Label</Option>
						<Option value="2">Label</Option>
						<Option value="3">Label</Option>
					</Selector>
				</Cell>
			</Grid>
		</Playground>
	);
};

export default Demo;
