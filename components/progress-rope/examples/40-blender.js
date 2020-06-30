/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Grid, Cell } from '@westpac/grid';
import { ProgressRope, Group, Step } from '../src/blender';
import { Wrapper } from './_utils';

import { Intopia } from '../../../helpers/example/components/Intopia.js';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<Intopia />

			<Grid>
				<Cell width={6}>
					<Wrapper>
						<ProgressRope>
							<Step onClick={() => {}}>Step 1</Step>
							<Step onClick={() => {}}>Step 2</Step>
							<Step onClick={() => {}}>Step 3</Step>
							<Step onClick={() => {}}>Step 4</Step>
							<Step onClick={() => {}}>Step 5</Step>
							<Step end onClick={() => {}}>
								Review and Submit
							</Step>
						</ProgressRope>
					</Wrapper>
				</Cell>
				<Cell width={6}>
					<Wrapper>
						<ProgressRope>
							<Group text={'Group 1'}>
								<Step onClick={() => {}}>Step 1</Step>
								<Step onClick={() => {}}>Step 2</Step>
							</Group>
							<Group text={'Group 2'}>
								<Step onClick={() => {}}>Step 3</Step>
								<Step onClick={() => {}}>Step 4</Step>
							</Group>
							<Group text={'Group 3'}>
								<Step onClick={() => {}}>Step 5</Step>
								<Step onClick={() => {}}>Step 6</Step>
								<Step onClick={() => {}}>Step 7</Step>
							</Group>
							<Step end onClick={() => {}}>
								Review and Submit
							</Step>
						</ProgressRope>
					</Wrapper>
				</Cell>
			</Grid>
		</GEL>
	);
}

export default Example;
