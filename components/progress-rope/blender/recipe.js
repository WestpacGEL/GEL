import { GEL } from '@westpac/core';
import React from 'react';

import { ProgressRope, Group, Step } from '@westpac/progress-rope';

export function AllStyles({ brand }) {
	return (
		<GEL brand={brand}>
			<ProgressRope current={0}>
				<Step onClick={() => {}}>Step 1</Step>
				<Step onClick={() => {}}>Step 2</Step>
				<Step onClick={() => {}}>Step 3</Step>
				<Step end onClick={() => {}}>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope current={1}>
				<Step onClick={() => {}}>Step 1</Step>
				<Step onClick={() => {}}>Step 2</Step>
				<Step onClick={() => {}}>Step 3</Step>
				<Step end onClick={() => {}}>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope current={3}>
				<Step onClick={() => {}}>Step 1</Step>
				<Step onClick={() => {}}>Step 2</Step>
				<Step onClick={() => {}}>Step 3</Step>
				<Step end onClick={() => {}}>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope current={0}>
				<Group text={'Group 1'}>
					<Step onClick={() => {}}>Step 1</Step>
					<Step onClick={() => {}}>Step 2</Step>
				</Group>
				<Group text={'Group 2'}>
					<Step onClick={() => {}}>Step 3</Step>
					<Step onClick={() => {}}>Step 4</Step>
				</Group>
				<Step end onClick={() => {}}>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope current={3}>
				<Group text={'Group 1'}>
					<Step onClick={() => {}}>Step 1</Step>
					<Step onClick={() => {}}>Step 2</Step>
				</Group>
				<Group text={'Group 2'}>
					<Step onClick={() => {}}>Step 3</Step>
					<Step onClick={() => {}}>Step 4</Step>
				</Group>
				<Step end onClick={() => {}}>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope current={4}>
				<Group text={'Group 1'}>
					<Step onClick={() => {}}>Step 1</Step>
					<Step onClick={() => {}}>Step 2</Step>
				</Group>
				<Group text={'Group 2'}>
					<Step onClick={() => {}}>Step 3</Step>
					<Step onClick={() => {}}>Step 4</Step>
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
			heading: 'A default progress rope',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope current={0}>
						<Step onClick={() => {}}>Step 1</Step>
						<Step onClick={() => {}}>Step 2</Step>
						<Step onClick={() => {}}>Step 3</Step>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A progress rope with progress',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope current={1}>
						<Step onClick={() => {}}>Step 1</Step>
						<Step onClick={() => {}}>Step 2</Step>
						<Step onClick={() => {}}>Step 3</Step>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A completed progress rope',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope current={3}>
						<Step onClick={() => {}}>Step 1</Step>
						<Step onClick={() => {}}>Step 2</Step>
						<Step onClick={() => {}}>Step 3</Step>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A default grouped progress rope',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope current={0}>
						<Group text={'Group 1'}>
							<Step onClick={() => {}}>Step 1</Step>
							<Step onClick={() => {}}>Step 2</Step>
						</Group>
						<Group text={'Group 2'}>
							<Step onClick={() => {}}>Step 3</Step>
							<Step onClick={() => {}}>Step 4</Step>
						</Group>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A grouped progress rope in progress',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope current={3}>
						<Group text={'Group 1'}>
							<Step onClick={() => {}}>Step 1</Step>
							<Step onClick={() => {}}>Step 2</Step>
						</Group>
						<Group text={'Group 2'}>
							<Step onClick={() => {}}>Step 3</Step>
							<Step onClick={() => {}}>Step 4</Step>
						</Group>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			heading: 'A grouped progress rope at the end step',
			component: () => (
				<GEL brand={brand}>
					<ProgressRope current={4}>
						<Group text={'Group 1'}>
							<Step onClick={() => {}}>Step 1</Step>
							<Step onClick={() => {}}>Step 2</Step>
						</Group>
						<Group text={'Group 2'}>
							<Step onClick={() => {}}>Step 3</Step>
							<Step onClick={() => {}}>Step 4</Step>
						</Group>
						<Step end onClick={() => {}}>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
	];
}
