import React from 'react';
import { Global, useTheme } from '@westpac/core';
import {
	Sidebar,
	SidebarHeader,
	SidebarContent,
	SidebarContentHeader,
	SidebarContentInner,
} from '../src';

export default () => {
	const { COLORS } = useTheme();

	return (
		<>
			<Global
				styles={{
					// Lets apply a background to simulate being inside the Template component
					body: {
						backgroundColor: COLORS.background,
					},
				}}
			/>

			<Sidebar>
				<SidebarHeader
					heading={
						<>
							<strong>Step</strong> <em>1 of 8</em>
						</>
					}
					toggleText="Show all steps"
				/>
				<SidebarContent>
					<SidebarContentHeader
						heading={
							<>
								<strong>Step</strong> <em>1 of 8</em>
							</>
						}
						toggleText="Show all steps"
					>
						SidebarContentHeader
					</SidebarContentHeader>
					<SidebarContentInner>SidebarContentInner</SidebarContentInner>
				</SidebarContent>
			</Sidebar>
		</>
	);
};
