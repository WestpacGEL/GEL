import { GEL } from '@westpac/core';
import React from 'react';

import { ProgressRope } from '@westpac/progress-rope';

// Created simplified version of these components for blender use
import { Group, Step } from '../src/blender';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<ProgressRope>
				<Step visited onClick={() => {}}>
					Step 1
				</Step>
				<Step active onClick={() => {}}>
					Step 2
				</Step>
				<Step onClick={() => {}}>Step 3</Step>
				<Step onClick={() => {}}>Step 4</Step>
				<Step onClick={() => {}}>Step 5</Step>
				<Step onClick={() => {}}>Review and Submit</Step>
			</ProgressRope>
			<ProgressRope>
				<Step visited onClick={() => {}}>
					Step 1
				</Step>
				<Step visited onClick={() => {}}>
					Step 2
				</Step>
				<Step visited onClick={() => {}}>
					Step 3
				</Step>
				<Step active end onClick={() => {}}>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope>
				<Group active text={'Group 1'}>
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
			<ProgressRope>
				<Group visited text={'Group 1'}>
					<Step visited onClick={() => {}}>
						Step 1
					</Step>
					<Step visited onClick={() => {}}>
						Step 2
					</Step>
				</Group>
				<Group active text={'Group 2'}>
					<Step visited onClick={() => {}}>
						Step 3
					</Step>
					<Step active onClick={() => {}}>
						Step 4
					</Step>
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
		</GEL>
	);
}

export function Docs({ brand }) {
	return [
		{
			heading: 'A progress rope',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope>
						<Step active onClick={() => {}}>
							Step 1
						</Step>
						<Step onClick={() => {}}>Step 2</Step>
						<Step onClick={() => {}}>Step 3</Step>
						<Step onClick={() => {}}>Step 4</Step>
						<Step onClick={() => {}}>Step 5</Step>
						<Step onClick={() => {}}>Review and Submit</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A progress rope in progress',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope>
						<Step visited onClick={() => {}}>
							Step 1
						</Step>
						<Step visited onClick={() => {}}>
							Step 2
						</Step>
						<Step active onClick={() => {}}>
							Step 3
						</Step>
						<Step onClick={() => {}}>Step 4</Step>
						<Step onClick={() => {}}>Step 5</Step>
						<Step onClick={() => {}}>Review and Submit</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A progress rope at the end step',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope>
						<Step visited onClick={() => {}}>
							Step 1
						</Step>
						<Step visited onClick={() => {}}>
							Step 2
						</Step>
						<Step visited onClick={() => {}}>
							Step 3
						</Step>
						<Step active end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A progress rope group',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope>
						<Group id={'progress-rope-group-1'} active text={'Group 1'}>
							<Step active onClick={() => {}}>
								Step 1
							</Step>
							<Step onClick={() => {}}>Step 2</Step>
						</Group>
						<Group id={'progress-rope-group-2'} text={'Group 2'}>
							<Step onClick={() => {}}>Step 3</Step>
							<Step onClick={() => {}}>Step 4</Step>
						</Group>
						<Group id={'progress-rope-group-3'} text={'Group 3'}>
							<Step onClick={() => {}}>Step 5</Step>
							<Step onClick={() => {}}>Step 6</Step>
							<Step onClick={() => {}}>Step 7</Step>
						</Group>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A progress rope group in progress',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope>
						<Group id={'progress-rope-group-1'} visited text={'Group 1'}>
							<Step visited onClick={() => {}}>
								Step 1
							</Step>
							<Step visited onClick={() => {}}>
								Step 2
							</Step>
						</Group>
						<Group id={'progress-rope-group-2'} active text={'Group 2'}>
							<Step visited onClick={() => {}}>
								Step 3
							</Step>
							<Step active onClick={() => {}}>
								Step 4
							</Step>
						</Group>
						<Group id={'progress-rope-group-3'} text={'Group 3'}>
							<Step onClick={() => {}}>Step 5</Step>
							<Step onClick={() => {}}>Step 6</Step>
							<Step onClick={() => {}}>Step 7</Step>
						</Group>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A progress rope group at the end step',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope>
						<Group id={'progress-rope-group-1'} visited text={'Group 1'}>
							<Step visited onClick={() => {}}>
								Step 1
							</Step>
							<Step visited onClick={() => {}}>
								Step 2
							</Step>
						</Group>
						<Group id={'progress-rope-group-2'} visited text={'Group 2'}>
							<Step visited onClick={() => {}}>
								Step 3
							</Step>
							<Step visited onClick={() => {}}>
								Step 4
							</Step>
						</Group>
						<Group id={'progress-rope-group-3'} visited text={'Group 3'}>
							<Step visited onClick={() => {}}>
								Step 5
							</Step>
							<Step visited onClick={() => {}}>
								Step 6
							</Step>
							<Step visited onClick={() => {}}>
								Step 7
							</Step>
						</Group>
						<Step active end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
	];
}
