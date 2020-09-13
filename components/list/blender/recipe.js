import { GEL } from '@westpac/core';
import React from 'react';

import { List, Item } from '@westpac/list';
import { AndroidIcon } from '@westpac/icon';

import { blenderIcon } from '../src/overrides/icon';
import { blenderList } from '../src/overrides/list';

export function AllStyles({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/list'] = {
		List: {
			styles: blenderList.styles,
			component: blenderList.component,
		},
		// Icon: {
		// 	component: blenderIcon.component,
		// },
	};
	const allCombinations = [];

	return (
		<GEL brand={overridesWithTokens}>
			<List type="none">
				<Item>List item</Item>
			</List>
			<List type="bullet">
				<Item>List item</Item>
			</List>
			<List type="bullet" look="primary">
				<Item>List item</Item>
			</List>
			<List type="bullet" look="neutral">
				<Item>List item</Item>
			</List>
			<List type="link">
				<Item>List item</Item>
			</List>
			<List type="tick">
				<Item>List item</Item>
			</List>
			<List type="unstyled">
				<Item>List item</Item>
			</List>
			<List type="ordered">
				<Item>List item</Item>
			</List>
			<List type="icon" icon={AndroidIcon}>
				<Item>List item</Item>
			</List>
			<List type="none" spacing="large">
				<Item>List item</Item>
			</List>
		</GEL>
	);
}

export function Docs({ brand }) {
	const overridesWithTokens = { ...brand };
	overridesWithTokens['@westpac/list'] = {
		List: {
			component: blenderList.component,
			attributes: blenderList.attributes,
		},
		// Icon: {
		// 	component: blenderIcon.component,
		// },
	};
	return [
		{
			heading: `A default bullet list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet">
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `A primary bullet list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet" look="primary">
						<Item>List item</Item>
						<Item>
							List
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `A neutral bullet list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet" look="neutral">
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `An link list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="link">
						<Item>
							<a href="#">List item</a>
						</Item>
						<Item>
							<a href="#">List item</a>
							<List>
								<Item>
									<a href="#">List item</a>
								</Item>
								<Item>
									<a href="#">List item</a>
								</Item>
								<Item>
									<a href="#">List item</a>
								</Item>
							</List>
						</Item>
						<Item>
							<a href="#">List item</a>
						</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `An tick list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="tick">
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `An icon list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="icon" icon={AndroidIcon}>
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `An unstyled list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="unstyled">
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `An ordered list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="ordered">
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
		{
			heading: `An large list`,
			component: () => (
				<GEL brand={overridesWithTokens}>
					<List type="bullet" spacing="large">
						<Item>List item</Item>
						<Item>
							List item
							<List>
								<Item>List item</Item>
								<Item>List item</Item>
								<Item>List item</Item>
							</List>
						</Item>
						<Item>List item</Item>
					</List>
				</GEL>
			),
		},
	];
}
