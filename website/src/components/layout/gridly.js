/** @jsx jsx */
import react, { Fragment } from 'react';
import { useTransition, animated } from 'react-spring';

import { jsx } from '@westpac/core';
import { Container, Grid, Cell } from '@westpac/grid';

export const Gridly = ({ show }) => {
	const transitions = useTransition(show, null, {
		from: { opacity: 0 },
		enter: { opacity: 0.6 },
		leave: { opacity: 0 },
	});

	return transitions.map(
		({ item, key, props }) =>
			item && (
				<animated.div key={key} style={props}>
					<Container
						css={{
							position: 'absolute',
							top: 0,
							bottom: 0,
							right: 0,
							left: 0,
						}}
					>
						<Grid css={{ height: '100%' }}>
							{[...new Array(12)].map((item, index) => (
								<Cell key={index} css={{ backgroundColor: '#fff' }} />
							))}
						</Grid>
					</Container>
				</animated.div>
			)
	);
};
