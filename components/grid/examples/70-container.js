import { GEL, jsx } from '@westpac/core';
import { Container, Cell, Grid } from '@westpac/grid';
import { useContainerQuery } from '@westpac/hooks';
import { useRef } from 'react';
import { Box } from './_utils';

function Example({ brand }) {
	const {
		LAYOUT: { breakpoints },
	} = brand;

	const containerRef = useRef();
	const { width: containerWidth } = useContainerQuery(containerRef);

	let breakpoint;
	if (containerWidth >= breakpoints.lg) {
		breakpoint = 'lg';
	} else if (containerWidth >= breakpoints.md) {
		breakpoint = 'md';
	} else if (containerWidth >= breakpoints.sm) {
		breakpoint = 'sm';
	} else if (containerWidth >= breakpoints.xsl) {
		breakpoint = 'xsl';
	} else {
		breakpoint = 'xs';
	}

	return (
		<GEL brand={brand}>
			<div
				css={{
					position: 'absolute',
					zIndex: 9,
					left: 0,
					right: 0,
					pointerEvents: 'none',
				}}
			>
				<div
					ref={containerRef}
					css={{
						position: 'fixed',
						left: 0,
						right: 0,
						height: 1,
						top: -4,
					}}
				/>
				<Container css={{ backgroundColor: 'rgba(255,0,0,0.2)' }}>
					<Box css={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
						Fluid (default): {containerWidth}px = {breakpoint}
					</Box>
				</Container>

				<hr />

				<Container css={{ backgroundColor: 'rgba(255,0,0,0.2)' }} fixed>
					<Box css={{ backgroundColor: 'rgba(255,255,255,0.7)' }}>
						Fixed: {containerWidth}px = {breakpoint}
					</Box>
				</Container>
			</div>
		</GEL>
	);
}

export default Example;
