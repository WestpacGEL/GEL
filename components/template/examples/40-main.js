import React from 'react';
import { Global, useTheme } from '@westpac/core';
import { Container } from '@westpac/grid';
import { Main } from '../src';

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

			<h2>Standard</h2>
			<Main>
				<Container>Main</Container>
			</Main>

			<h2>Padded</h2>
			<Main padded>
				<Container>Main</Container>
			</Main>
		</>
	);
};
