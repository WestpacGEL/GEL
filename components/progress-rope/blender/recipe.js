import { GEL } from '@westpac/core';
import React from 'react';

import { ProgressRope } from '@westpac/progress-rope';

// Created simplified version of these components for blender use
import { Group, Step } from '../src/blender';
import { blenderProgressRope } from '../src/overrides/progressRope';
import { blenderList } from '../src/overrides/list';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-rope'] = {
		ProgressRope: {
			styles: blenderProgressRope.styles,
		},
		List: {
			styles: blenderList.styles,
		},
	};
	return (
		<GEL brand={overridesWithTokens} noScope>
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
				<Step end onClick={() => {}}>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope>
				<Step onClick={() => {}} visited>
					Step 1
				</Step>
				<Step onClick={() => {}} visited>
					Step 2
				</Step>
				<Step onClick={() => {}} visited>
					Step 3
				</Step>
				<Step onClick={() => {}} end active>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope>
				<Group text={'Group 1'} active>
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
				<Step onClick={() => {}} end>
					Review and Submit
				</Step>
			</ProgressRope>
			<ProgressRope>
				<Group text={'Group 1'} visited>
					<Step visited onClick={() => {}}>
						Step 1
					</Step>
					<Step onClick={() => {}} visited>
						Step 2
					</Step>
				</Group>
				<Group text={'Group 2'} active>
					<Step visited onClick={() => {}}>
						Step 3
					</Step>
					<Step onClick={() => {}} active>
						Step 4
					</Step>
				</Group>
				<Group text={'Group 3'}>
					<Step onClick={() => {}}>Step 5</Step>
					<Step onClick={() => {}}>Step 6</Step>
					<Step onClick={() => {}}>Step 7</Step>
				</Group>
				<Step onClick={() => {}} end>
					Review and Submit
				</Step>
			</ProgressRope>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/progress-rope'] = {
		ProgressRope: {
			attributes: blenderProgressRope.attributes,
		},
	};
	return [
		// Default
		{
			heading: 'Default progress-rope',
			subheading: 'Initial state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-initial-state">
						<Step onClick={() => {}} active>
							Step 1
						</Step>
						<Step onClick={() => {}}>Step 2</Step>
						<Step onClick={() => {}}>Step 3</Step>
						<Step onClick={() => {}}>Step 4</Step>
						<Step onClick={() => {}}>Step 5</Step>
						<Step onClick={() => {}} end>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			subheading: 'In-progress state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-inprogress">
						<Step onClick={() => {}} visited>
							Step 1
						</Step>
						<Step onClick={() => {}} visited>
							Step 2
						</Step>
						<Step onClick={() => {}} active>
							Step 3
						</Step>
						<Step onClick={() => {}}>Step 4</Step>
						<Step onClick={() => {}}>Step 5</Step>
						<Step onClick={() => {}} end>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			subheading: 'Final state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-final-state">
						<Step onClick={() => {}} visited>
							Step 1
						</Step>
						<Step onClick={() => {}} visited>
							Step 2
						</Step>
						<Step onClick={() => {}} visited>
							Step 3
						</Step>
						<Step onClick={() => {}} end active>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			subheading: 'Revisited step state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-revisited-step">
						<Step onClick={() => {}} visited>
							Step 1
						</Step>
						<Step onClick={() => {}} visited active>
							Step 2
						</Step>
						<Step onClick={() => {}} visited>
							Step 3
						</Step>
						<Step onClick={() => {}} end visited>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},

		// Group
		{
			heading: 'Progress-rope with groups',
			subheading: 'Initial state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-group-initial-state">
						<Group text={'Group 1'} active open>
							<Step onClick={() => {}} active>
								Step 1
							</Step>
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
				</GEL>
			),
		},
		{
			subheading: 'In-progress state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-group-inprogress">
						<Group text={'Group 1'} visited>
							<Step onClick={() => {}} visited>
								Step 1
							</Step>
							<Step onClick={() => {}} visited>
								Step 2
							</Step>
						</Group>
						<Group text={'Group 2'} active open>
							<Step onClick={() => {}} visited>
								Step 3
							</Step>
							<Step onClick={() => {}} active>
								Step 4
							</Step>
						</Group>
						<Group text={'Group 3'}>
							<Step onClick={() => {}}>Step 5</Step>
							<Step onClick={() => {}}>Step 6</Step>
							<Step onClick={() => {}}>Step 7</Step>
						</Group>
						<Step onClick={() => {}} end>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			subheading: 'Final state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-group-final-state">
						<Group text={'Group 1'} visited>
							<Step onClick={() => {}} visited>
								Step 1
							</Step>
							<Step onClick={() => {}} visited>
								Step 2
							</Step>
						</Group>
						<Group text={'Group 2'} visited>
							<Step onClick={() => {}} visited>
								Step 3
							</Step>
							<Step onClick={() => {}} visited>
								Step 4
							</Step>
						</Group>
						<Group text={'Group 3'} visited>
							<Step onClick={() => {}} visited>
								Step 5
							</Step>
							<Step onClick={() => {}} visited>
								Step 6
							</Step>
							<Step onClick={() => {}} visited>
								Step 7
							</Step>
						</Group>
						<Step onClick={() => {}} end active>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
		{
			subheading: 'Revisited step state',
			component: () => (
				<GEL brand={overridesWithTokens} noScope>
					<ProgressRope instanceIdPrefix="example-group-revisited-step">
						<Group text={'Group 1'} visited>
							<Step onClick={() => {}} visited>
								Step 1
							</Step>
							<Step onClick={() => {}} visited>
								Step 2
							</Step>
						</Group>
						<Group text={'Group 2'} visited active open>
							<Step onClick={() => {}} visited active>
								Step 3
							</Step>
							<Step onClick={() => {}} visited>
								Step 4
							</Step>
						</Group>
						<Group text={'Group 3'} visited>
							<Step onClick={() => {}} visited>
								Step 5
							</Step>
							<Step onClick={() => {}} visited>
								Step 6
							</Step>
							<Step onClick={() => {}} visited>
								Step 7
							</Step>
						</Group>
						<Step onClick={() => {}} end visited>
							Review and Submit
						</Step>
					</ProgressRope>
				</GEL>
			),
		},
	];
}
